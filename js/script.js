import Countdown from "./countdown.js";

const tempoPara = new Countdown("12 february 2022 12:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo(){
   tempos.forEach((tempo, index) =>{
    tempo.innerHTML =tempoPara.total[index];
}); 
}
 setInterval(mostrarTempo , 1000);

