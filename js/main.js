let doc = document;

let slides = doc.querySelector('.slides');
let btnPrev = doc.querySelector('#btn-prev');
let btnNext = doc.querySelector('#btn-next');
let SlideWindow = doc.querySelector('.slide-window');
let WindowBut = doc.querySelector('.window-button');
let dots = '';
let currentSlide = 1;
let slideEl = '';
let slide = '';
let index = 0;


let imgs = [
    {img: 'img1.jpg', big:'img1-Big.jpg'},
    {img: 'img2.jpg', big:'img2-Big.jpg'},
    {img: 'img3.jpg', big:'img3-Big.jpg'},
    {img: 'img4.jpg', big:'img4-Big.jpg'},
]
let imgsCount = imgs.length;


renderSlide();
renderDots();



btnNext.onclick = slideNext;
btnPrev.onclick = slidePrev;



function slideNext() {
    changeSlide(currentSlide + 1);
}
function slidePrev() {
    changeSlide(currentSlide - 1);
}


function showSlide() {
    if (currentSlide > imgsCount) {
        currentSlide = 1;
    }
    if (currentSlide < 1) {
        currentSlide = imgsCount;
    }
    slide[currentSlide -1].classList.add('slide_active');
    dots[currentSlide -1].classList.add('slider__dot_active');
}

function hideSlide() {
    slide[currentSlide -1].classList.remove('slide_active');
    dots[currentSlide -1].classList.remove('slider__dot_active');
}

function changeSlide(newValue) {
    hideSlide(currentSlide);
    currentSlide = newValue;
    showSlide(currentSlide);
}
function renderSlide() {
    for (let i = 0; i < imgsCount; i++) {
        slideEl += `<div class="slide" data-index = ${index}><img data-index = ${index} src="img/${imgs[index].img}" alt=""></img></div>`;
        index++;
    }
}
slides.innerHTML = slideEl;
slide = doc.querySelectorAll('.slide');

showSlide(currentSlide);

function renderDots() {
    let sliderDotsEl = doc.querySelector('.slider__dots');
    for (let i = 0; i < imgsCount; i++) {
        dots += '<span class="slider__dot"></span>'
    }
    sliderDotsEl.innerHTML = dots;
    
    dots = doc.querySelectorAll('.slider__dot');
    for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = function() {
        changeSlide(i + 1);
        }
    }
}

for(let i = 0; i < slide.length; i++) {
    slide[i].onclick = function() {
        let index = this.dataset.index;
        SlideWindow.classList.add('slide-window_active');
        SlideWindow.innerHTML = `<img data-index = ${index} src="img/${imgs[currentSlide -1].big}" alt=""></img>`;
        WindowBut.classList.add('window-button_active');
    }
}

WindowBut.onclick = function() {
    SlideWindow.classList.toggle('slide-window_active');
    WindowBut.classList.remove('window-button_active');
    SlideWindow.innerHTML = '';
}



































