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
    "node0": { "x": 549.7800993665913, "y": 363.240847808197 },
    "node1": { "x": 370.98806277116427, "y": 236.3121743689777 },
    "node2": { "x": 533.0115066631164, "y": 280.66480160004943 },
    "node3": { "x": 448.5361717149062, "y": 292.1087447790114 },
    "node4": { "x": 515.3986722892511, "y": 373.85974570516385 },
    "node5": { "x": 372.88624690122134, "y": 338.2042202866253 },
    "node6": { "x": 445.18529325001015, "y": 382.8754131247804 },
    "node7": { "x": 585.7605769260574, "y": 355.73508761787946 },
    "node8": { "x": 555.1591888027023, "y": 337.12454425285955 },
    "node9": { "x": 420.53090823610836, "y": 310.99980787746944 },
    "node10": { "x": 385.1438094858273, "y": 289.92200491371983 },
    "node11": { "x": 446.5905366554568, "y": 240.75335095359887 },
    "node12": { "x": 348.3258966043361, "y": 285.2309181816234 },
    "node13": { "x": 366.7240845278883, "y": 360.7599170332601 },
    "node14": { "x": 395.1549789146346, "y": 355.34318516276295 },
    "node15": { "x": 355.1523779659586, "y": 380.7338360367057 },
    "node16": { "x": 574.4075781609755, "y": 383.17334310034335 },
    "node17": { "x": 494.72800253426794, "y": 323.5926329516732 }
}