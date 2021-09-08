function testWebP(callback) {
    let webP = new Image()
    webP.onload = webP.onerror = function () {
        callback(webP.height==2)
    }
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
})
//
let colors = {green, yellow, pink}
colors[1]
console.log(colors[1]);

