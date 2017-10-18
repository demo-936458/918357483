var cy;
var hidden = {}

Zepto(function($) {
    $.get('network.json', function(response) {
        populateSettings(response)
        constructGraph(response)
    })
})

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
}

// Get the nodes from the response
function getNodes(response) {
    var nodes = []
    var itemsList = createItemsList(response)
    for (var i = 0; i < itemsList.length; i++) {
        nodes.push({
            data: { id: "node" + i, name: itemsList[i] }
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
                weight: edge.weight / 50
            }
        })
    }
    return edges
}

// Construct the graph
function constructGraph(response) {
    var nodes = getNodes(response)
    var edges = getEdges(response)
    cy = cytoscape({
        container: $('#canvas'),
        elements: nodes.concat(edges),
        style: graphStyle,
        layout: graphLayout
    });

}

// Callback when a checkbox is clicked
function onCheckboxClick(element, name) {
    if (!element.checked) { // Remove node
        var removed = cy.$('#' + name).remove()
        hidden[name] = removed
    } else {
        cy.add(hidden[name])
    }
}