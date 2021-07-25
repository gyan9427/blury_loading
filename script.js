const backGrd = document.querySelector('#bg');
const titleText = document.querySelector('.loading-text')
let load = 0;
let int = setInterval(blurEffect,30);

function blurEffect(){
    load++;
    titleText.innerText = `${load}%`;
    titleText.style.opacity = `${1-scale(load)}`; 
    if(load > 99){
        clearInterval(int);

    }
    backGrd.style.filter = `blur(${100 - load}px)`
}


function scale(val){
    return (val/100);
}