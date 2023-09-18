const text = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
const blurOpen = document.querySelector('.blurOpen')
let load = 0;const blurringSet = setInterval(blurring, 40);
const blurringSet2 = setInterval(blurB, 10);
function startNowDelay(){
      const myTimeout = setTimeout(blurB, 2000);
  }
function blurring(){
        startNowDelay()

    load++;

    if (load >99){
        clearInterval(blurringSet)
    }         
   
    text.innerText = `${load}%`
    text.style.opacity=scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
let load2 =0;
function blurB(){
    
    load2++;

    if (load2 >99){
        clearInterval(blurringSet2)
    
    }    
    blurOpen.style.filter = `blur(${scale(load2, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }
  