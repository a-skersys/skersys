// Dark/light theme change

noise = document.querySelector(".noise");
dust = document.querySelector(".dust");
noiseBackground = document.querySelector(".background");

function getTheme() {
  return localStorage.getItem('theme') || 'dark';
}

function saveTheme(theme) {
  localStorage.setItem('theme', theme);
}

const colorScheme = document.querySelector('meta[name="color-scheme"]');
function applyTheme(theme) {
  document.body.className = theme;
  colorScheme.content = theme;
  if (theme == "dark") {
    themeToggler.checked = false;
    themeTogglerMobile.checked = false;
    noise.style.opacity = "0.07";
    dust.style.opacity = "0";
    noiseBackground.style.opacity = "0.5";
  } else if (theme == "light") {
    themeToggler.checked = true;
    themeTogglerMobile.checked = true;
    noise.style.opacity = "0";
    dust.style.opacity = "1";
    noiseBackground.style.opacity = "1";
  }
}

function rotateTheme(theme) {
  if (theme === 'light') {
    return 'dark'
  }
  return 'light';
}

const themeToggler = document.getElementById('theme-toggle');
const themeTogglerMobile = document.getElementById('theme-toggle-mobile');

let theme = getTheme();
applyTheme(theme);

themeToggler.onclick = () => {
  const newTheme = rotateTheme(theme);
  applyTheme(newTheme);
  saveTheme(newTheme);
  theme = newTheme;
}

themeTogglerMobile.onclick = () => {
  const newTheme = rotateTheme(theme);
  applyTheme(newTheme);
  saveTheme(newTheme);
  theme = newTheme;
}


// Menu closing after clicking the link

var goToPage = document.querySelectorAll(".mobile .menu a");

for (var i = goToPage.length; i--; ) {
  goToPage[i].addEventListener( "click", function() {
    document.querySelector(".menu-toggle").checked = false;
  });
}


// Reveal effect

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}


// Movements of eyes

var  eye = document.getElementsByClassName("eye-green");
document.onmousemove = function() {
  var width = window.innerWidth;
  var x = event.clientX;
  var a = (x / width + 1) * 0.4 ;
  a = a * 100;
  var height = window.innerHeight;
  var y = event.clientY;
  var b = (y / height + 0.4) * 0.5;
  b = b * 100;
  eye[0].style.cssText = "left: " + a + "%; top: " + b  + "%;";
  eye[1].style.cssText = "left: " + a + "%; top: " + b + "%;"; 
}


// Carousel

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  freeScroll: true,
  initialIndex: 4,
  contain: true,
  wrapAround: false,
  resize: true,
  pageDots: false,
  cellAlign: 'center',
  contain: true
});

var flkty = new Flickity( '.main-carousel', {

});



// Dust paricles

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 355,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0.2,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 4,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 1,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
