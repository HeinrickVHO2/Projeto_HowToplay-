const imgs = document.getElementById("img")
const img = document.querySelectorAll("#img img")

let funcao = 0;

function carrossel() {
    funcao++

    if (funcao < img.length - 1) {
        
        funcao = 0
    }
    imgs.style.transform = `translateX(${-funcao * 500}px)`

}
setInterval(carrosel,5000)