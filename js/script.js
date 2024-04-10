const h = "00";
const m = "00";
let s = 10;

document.getElementById('hours').innerText = h;
document.getElementById('minutes').innerText = m;

const divElem = document.getElementsByClassName('center');



const countDown = setInterval(function(){
    let sStr = s <= 9 ? "0" + s.toString() : s.toString();
    s--;
    document.getElementById("seconds").innerText = sStr;
    console.log(sStr, typeof sStr);
    if(sStr === '00'){
        alert("buon anno!");
        clearInterval(countDown);
    }
},1000) 