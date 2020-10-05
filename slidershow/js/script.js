let slideAtual = 0; // slide que está sendo mostrado atualmente
let sliderWidth = document.querySelector('.slider_width');
let totalSlides = 0;

// Definir altura dos controles
document.querySelector('.slider_controls').style.height =
    `${document.querySelector('.box').clientHeight}px`;

function inicio() {
    // colocando
    let itens = '';
    for (let i = 0; i < imgSlide.length; i++) {
        itens += `<div class="slider_item"></div>`;
    }
    sliderWidth.innerHTML = itens;

    totalSlides = document.querySelectorAll('.slider_item').length;
    // definindo a largura baseado na quantidade de fotos
    sliderWidth.style.width = `calc(100vw * ${totalSlides})`;
    colocarFotos();
}

function colocarFotos() {
    let slides = document.querySelectorAll('.slider_item');
    for (let i = 0; i < imgSlide.length; i++) {
        slides[i].style.backgroundImage = `url(img/${imgSlide[i].url})`;
    }
}

function goPrev() {
    slideAtual = slideAtual > 0 ? slideAtual - 1 : totalSlides - 1;
    updateMargin();
}

function goNext() {
    slideAtual = slideAtual === (totalSlides - 1) ? slideAtual = 0 : slideAtual + 1;
    updateMargin();
}

function updateMargin() {
    let sliderItem = document.querySelector('.slider_item').clientWidth;
    let newMargin = (slideAtual * sliderItem);
    sliderWidth.style.marginLeft =
        `-${newMargin}px`;
}

inicio();
setInterval(goNext, 4500); // passa de slide automáticamente