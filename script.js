let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function fixZero(time){
    
    return time < 10 ? `0${time}` : time;
}

setInterval(()=>{
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let seconds = now.getSeconds();
    
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(seconds)}`;
    let sgrau = ((360 / 60) * seconds) - 90;
    let mgrau = ((360 / 60) * minute) - 90;
    let hgrau = ((360 / 12) * hour) - 90;
    sElement.style.transform = `rotate(${sgrau}deg)`;
    mElement.style.transform = `rotate(${mgrau}deg)`;
    hElement.style.transform = `rotate(${hgrau}deg)`;
}, 1000)