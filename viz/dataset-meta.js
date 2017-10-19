// Returns if order is 'alacarte', 'combo', or 'drink'
function getOrderType(order) {
    order = order.toLowerCase()
    var drinks = ['water', 'sprite', 'coca-cola', 'iced tea', 'pineapple juice']
    var alacarte = ['fries', 'jolly hotdog', 'palabok', 'peach mango pie', 'spaghetti']
    if (drinks.indexOf(order) != -1) return 'drink'
    if (alacarte.indexOf(order) != -1) return 'alacarte'
    return 'combo'
}

// Gets the normalized frequency of the order
function getOrderFreq(freqs, order) {
    return $.grep(freqs, function(freq) {
        return freq.id === order
    })[0].expectation
}