const h = "00";
const m = "00";
let s = 10;

document.getElementById('hours').innerText = h;
document.getElementById('minutes').innerText = m;

let divElem = document.querySelector(".center");
let list = divElem.classList;
console.log(list);

const gifElem = document.querySelector(".gif-space");
console.log(gifElem);
let list_gif = gifElem.classList;


const countDown = setInterval(function(){
    let sStr = s <= 9 ? "0" + s.toString() : s.toString();
    s--;
    document.getElementById("seconds").innerText = sStr;
    console.log(sStr, typeof sStr);
    if(sStr === '00'){
        alert("buon anno!");
        clearInterval(countDown);
        list.add("none");
        list_gif.remove("none");
    }
},1000) 