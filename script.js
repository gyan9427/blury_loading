const backGrd = document.querySelector('#bg');
const titleText = document.querySelector('.loading-text')
let load = 0;
let int = setInterval(blurEffect,30);

function blurEffect(){
    load++;
    titleText.innerText = `${load}%`;
    titleText.style.opacity = `${parseInt(Math.ceil(load/100))}` 
    if(load > 99){
        clearInterval(int);
    }

}