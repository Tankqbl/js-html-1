let div2 = document.querySelector('taiji')
document.body.appendChild(div2)
var dragging = false
var lastX
var lastY
div2.onmousedown = function(e) {
    dragging = true
    lastX = e.clientX
    lastY = e.clientY
}
document.body.onmousemove = function(e) {
    if (dragging === true) {
        var deltaX = e.clientX - lastX
        var deltaY = e.clientY - lastY
        var top = parseInt(div2.style.top) || 0
        var left = parseInt(div2.style.left) || 0
        var resultY = top + deltaY
        var resultX = left + deltaX
        if (resultY <
            0) { resultY = 0 }
        if (resultX < 0) { resultX = 0 }
        div2.style.top = resultY + 'px'
        div2.style.left = resultX + 'px'
        lastX = e.clientX
        lastY = e.clientY
    }
}
document.body.onmouseup = function(e) {
    dragging = false
}
document.body.appendChild(div2)
var dragging = false
var lastX
var lastY
div2.onmousedown = function(e) {
    dragging = true
    lastX = e.clientX
    lastY = e.clientY
}
document.body.onmousemove = function(e) {
    if (dragging === true) {
        var deltaX = e.clientX - lastX
        var deltaY = e.clientY - lastY
        var top = parseInt(div2.style.top) || 0
        var left = parseInt(div2.style.left) || 0
        var resultY = top + deltaY
        var resultX = left + deltaX
        if (resultY < 0) {
            resultY = 0
        }
        if (resultX < 0) {
            resultX = 0
        }
        div2.style.top = resultY + 'px'
        div2.style.left = resultX + 'px'
        lastX = e.clientX
        lastY = e.clientY
    }
}
document.body.onmouseup = function(e) {
    dragging = false
}
