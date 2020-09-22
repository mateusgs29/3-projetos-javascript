let totalSlides = document.querySelectorAll('.slider_item').length;
let slideAtual = 0;

document.querySelector('.slider_width').style.width = 
    `calc(100vw * ${totalSlides})`;
document.querySelector('.slider_controls').style.height = 
    `${document.querySelector('.slider').clientHeight}px`;

function goPrev(){
    slideAtual --;
    if (slideAtual < 0) {
        slideAtual = totalSlides - 1;
    }
    updateMargin();
}

function goNext(){
    slideAtual++;
    if(slideAtual > (totalSlides - 1)){
        slideAtual = 0;
    }
    updateMargin();
}

function updateMargin(){
    let sliderWidth = document.querySelector('.slider_item').clientWidth;
    let newMargin = (slideAtual * sliderWidth);
    document.querySelector('.slider_width').style.marginLeft =
        `-${newMargin}px`;
}

setInterval(goNext, 2000);