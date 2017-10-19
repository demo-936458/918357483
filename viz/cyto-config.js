var graphStyle = [{
        selector: 'node',
        style: {
            'color': '#fff',
            'font-size': 5,
            'width': 'data(weight)',
            'height': 'data(weight)',
            'background-color': '#aaa',
            'label': 'data(name)',
        }
    },
    {
        selector: 'node.drink',
        style: {
            'background-color': '#ef4631'
        }
    },
    {
        selector: 'node.alacarte',
        style: {
            'background-color': '#f7bb09'
        }
    },
    {
        selector: 'node.combo',
        style: {
            'background-color': '#f7bb09'
        }
    },
    {
        selector: 'edge',
        style: {
            'width': 'data(weight)',
            'line-color': '#555',
            'target-arrow-color': '#555',
            'opacity': 0.5
        }
    },
    {
        selector: 'node:selected',
        style: {
            'font-size': 8,
            'font-weight': 'bold',
            'color': '#fff',
            'text-background-color': '#000',
            'text-background-opacity': 0.8,
            'text-background-shape': 'roundrectangle',
            'text-background-padding': '2px',
            'z-index': 1000
        }
    },
    {
        selector: '.focused',
        style: {
            'line-color': '#ef4631',
            'opacity': 0.8
        }
    },
    {
        selector: 'edge.focused',
        style: {
            'label': 'data(weight)',
            'font-size': 4,
            'color': '#fff',
            'text-opacity': 1,
            'z-index': 1000
        }
    },
    {
        selector: '.notfocused',
        style: {
            'opacity': 0.1
        }
    },
    {
        selector: '.gone',
        style: {
            'display': 'none'
        }
    }
]

var graphLayout = {
    name: 'cose',
    gravity: 0.001,
    nodeRepulsion: 1000000,
    idealEdgeLength: function(edge) {
        // Default is: 10
        // Instead, base it on "weight"
        return edge.data().weight * 100
    },
    edgeElasticity: function(edge) {
        // Default is: 100
        // Instead, base it on "weight"
        return edge.data().weight * 140
    },
}