var graphStyle = [{
        selector: 'node',
        style: {
            'font-size': 5,
            'width': 7,
            'height': 7,
            'background-color': '#666',
            'label': 'data(name)'
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
    },
    {
        selector: 'node:selected',
        style: {
            'background-color': '#ef4631'
        }
    }
]

var graphLayout = {
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