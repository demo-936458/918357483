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
        var rendered = Mustache.render(template, { name: itemsList[i] })
        $('#checkboxes').append(rendered)
    }
}

// Get the nodes from the response
function getNodes(response) {
    var nodes = []
    var itemsList = createItemsList(response)
    for (var i = 0; i < itemsList.length; i++) {
        nodes.push({
            data: { id: itemsList[i] }
        })
    }
    return nodes
}

// Get the edges from the response
function getEdges(response) {
    var edges = []
    for (var i = 0; i < response.length; i++) {
        var edge = response[i]
        edges.push({
            data: {
                id: edge.item1 + '-' + edge.item2,
                source: edge.item1,
                target: edge.item2,
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
    var cy = cytoscape({
        container: $('#canvas'),
        elements: nodes.concat(edges),
        style: [{
                selector: 'node',
                style: {
                    'font-size': 5,
                    'width': 7,
                    'height': 7,
                    'background-color': '#666',
                    'label': 'data(id)'
                }
            },
            {
                selector: 'edge',
                style: {
                    'width': 'data(weight)',
                    'line-color': '#ccc',
                    'target-arrow-color': '#ccc',
                    'opacity': 0.4
                }
            }
        ],
        layout: {
            name: 'cose',
            gravity: 1,
            nodeRepulsion: 400000,
            idealEdgeLength: function(edge) {
                // Default is: 10
                // Instead, base it on "weight"
                return edge.data().weight * 100
            },
            edgeElasticity: function(edge) {
                // Default is: 100
                // Instead, base it on "weight"
                return edge.data().weight * 100
            },
        }
    });
}

function onCheckboxClick(element, name) {
    alert(name)
}