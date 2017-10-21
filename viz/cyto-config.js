var graphStyle = [{
        selector: 'node',
        style: {
            'color': '#fff',
            'font-size': 5,
            'width': 'data(weight)',
            'height': 'data(weight)',
            'background-color': '#aaa',
            'label': 'data(name)'
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
    },
    {
        selector: '.below-threshold',
        style: {
            'display': 'none'
        }
    },
    {
        selector: '.precompute',
        style: {
            opacity: 0
        }
    }
]

// Creates the graph's initial layout
function createInitialLayout() {
    return {
        name: 'grid',
        boundingBox: presetBoundingBox,
    }
}

var presetBoundingBox = {
    "x1": 332.7021815062869,
    "x2": 610.0942768522095,
    "y1": 220.48457783095193,
    "y2": 400.78943980580163,
    "w": 277.39209534592266,
    "h": 180.3048619748497
}

var presetPos = {
    "node0": { "x": 752.5589132794018, "y": 498.3845886180095 },
    "node1": { "x": 175.72966711632716, "y": 88.8799349957767 },
    "node2": { "x": 698.4591061932035, "y": 231.97295534624402 },
    "node3": { "x": 425.9198773470591, "y": 268.8940690756601 },
    "node4": { "x": 641.6355576273293, "y": 532.6438933702141 },
    "node5": { "x": 181.85369893379084, "y": 417.6099676967592 },
    "node6": { "x": 415.1090787472099, "y": 561.7307628994322 },
    "node7": { "x": 868.641218411246, "y": 474.16906943211507 },
    "node8": { "x": 769.913243838859, "y": 414.1266542085493 },
    "node9": { "x": 335.5676707908617, "y": 329.8415133455653 },
    "node10": { "x": 221.39975881493774, "y": 261.83908199642497 },
    "node11": { "x": 419.64275658697625, "y": 103.2083166741005 },
    "node12": { "x": 102.61567123957684, "y": 246.70442569468014 },
    "node13": { "x": 161.97297301204662, "y": 490.38046575023395 },
    "node14": { "x": 253.6983747085353, "y": 472.9046909840645 },
    "node15": { "x": 124.63966164067779, "y": 554.8214825934556 },
    "node16": { "x": 832.0135148286133, "y": 562.6919618794643 },
    "node17": { "x": 574.9466430677098, "y": 370.4692165304298 }
}