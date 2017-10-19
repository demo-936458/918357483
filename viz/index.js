var cy;

// Util function to round
Number.prototype.round = function(places) {
    return +(Math.round(this + "e+" + places) + "e-" + places);
}

Zepto(function($) {
    $.get('network.json', function(response) {
        $.get('freqs.json', function(freqs) {
            populateSettings(response)
            constructGraph(response, freqs)
        })
    })
    initSlider()
})

// Initialize the slider
function initSlider() {
    var slider = new Slider('#ex1', {
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    });
    slider.on("slide", function(sliderValue) {
        $("#slider-value").text(sliderValue)
        cy.$('edge').forEach(function(edge) {
            if (edge.data('weight') >= sliderValue) {
                edge.removeClass('below-threshold')
            } else {
                edge.addClass('below-threshold')
            }
        })
    });
}

// Create items list from response
function createItemsList(response) {
    itemsSet = {}
    for (var i = 0; i < response.length; i++) {
        itemsSet[response[i].item1] = true
        itemsSet[response[i].item2] = true
    }
    var itemsList = []
    $.each(itemsSet, function(key, value) {
        itemsList.push(key)
    })
    itemsList.sort()
    return itemsList
}

// Populate the settings checkboxes
function populateSettings(response) {
    var itemsList = createItemsList(response)
    var template = $('#checkbox-template').html();
    Mustache.parse(template);
    for (var i = 0; i < itemsList.length; i++) {
        var rendered = Mustache.render(template, { name: itemsList[i], key: "node" + i })
        $('#checkboxes').append(rendered)
    }
    $('.node-checkbox').change(onCheckboxChange);
}

// Get the nodes from the response
function getNodes(response, freqs) {
    var nodes = []
    var itemsList = createItemsList(response)
    for (var i = 0; i < itemsList.length; i++) {
        nodes.push({
            data: {
                id: "node" + i,
                name: itemsList[i],
                weight: 100 * getOrderFreq(freqs, itemsList[i])
            },
            classes: getOrderType(itemsList[i])
        })
    }
    return nodes
}

// Get the edges from the response
function getEdges(response) {
    var itemsList = createItemsList(response)
    var edges = []
    for (var i = 0; i < response.length; i++) {
        var edge = response[i]
        var node1 = itemsList.indexOf(edge.item1)
        var node2 = itemsList.indexOf(edge.item2)
        edges.push({
            data: {
                id: "edge" + node1 + '-' + node2,
                source: "node" + node1,
                target: "node" + node2,
                weight: (Math.pow(edge.norm_weight / 100000, 0.7)).round(2),
            }
        })
    }
    return edges
}

// Construct the graph
function constructGraph(response, freqs) {
    var nodes = getNodes(response, freqs)
    var edges = getEdges(response)
    cy = cytoscape({
        container: $('#canvas'),
        elements: nodes.concat(edges),
        style: graphStyle,
        layout: graphLayout
    });
    cy.on("tap", function(evt) {
        if ((evt.target === cy) || evt.target.isEdge()) { // Background or Edge tap
            cy.$('edge').removeClass('focused')
            cy.$('edge').removeClass('notfocused')
        } else if (evt.target.isNode()) { // Node tap
            cy.$('edge').removeClass('focused')
            cy.$('edge').addClass('notfocused')
            evt.target.connectedEdges().removeClass('notfocused')
            evt.target.connectedEdges().addClass('focused')
        }
    })
}

// Callback when a checkbox changes
function onCheckboxChange() {
    var checked = $(this).is(':checked')
    var key = $(this).data('key')
    var node = cy.$('#' + key)
    if (!checked) { // Hide node
        node.addClass('gone')
    } else { // Show node
        node.removeClass('gone')
    }
}

// Callback when the toggle all button is clickeds
function onCheckAllClick() {
    var allChecked = true;
    $('.node-checkbox').each(function() {
        allChecked = allChecked && this.checked
    })
    $('.node-checkbox').each(function() {
        if (allChecked == this.checked) this.click()
    })
}