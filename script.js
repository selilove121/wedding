function enterSite(){
  document.querySelector(".intro").style.display="none";
  document.getElementById("music").play();
}

// COUNTDOWN
const target = new Date("April 19, 2026").getTime();

setInterval(()=>{
 let now = new Date().getTime();
 let d = target - now;
 let days = Math.floor(d/(1000*60*60*24));
 document.getElementById("countdown").innerHTML = days+" Days Left";
},1000);
