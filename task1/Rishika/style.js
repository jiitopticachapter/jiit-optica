const hourEl = document.querySelector("#hour");
// console.log(hourEl);
const minEl = document.querySelector("#min");
// console.log(minEl);

const secEl = document.querySelector("#sec");
const ampmEl = document.querySelector("#ampm");

function updateClock(){
    let h = new Date().getHours();
    // console.log(h);
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h>12){
        h = h-12;
        ampm = "PM";
    }

   h=h<10?"0"+h : h;
   m=m<10?"0"+m : m;
   s=s<10?"0"+s : s;

  hourEl.innerHTML = h;
  minEl.innerHTML= m;
  secEl.innerHTML=s;
 ampmEl.innerHTML=ampm

  //setTimeout method

  setTimeout(()=>{
  updateClock();
  },1000)

  // every 1s === 1000ms


}

updateClock();