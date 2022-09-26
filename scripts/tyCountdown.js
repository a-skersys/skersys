const countdown = document.querySelector(".countdown");

let number = 3;
let opacity = 1;

const x = setInterval(function() {
    
    countdown.textContent = number;
    number--;
    opacity = 1;



    if (number < 0) {
      clearInterval(x);
    }

  }, 1000);

  const y = setInterval(function() {
    countdown.style.opacity = opacity;
    opacity = opacity - 0.01;
}, 20);

