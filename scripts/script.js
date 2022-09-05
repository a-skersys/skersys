// Dark/light theme change

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
  } else if (theme == "light") {
    themeToggler.checked = true;
    themeTogglerMobile.checked = true;
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
  contain: true,
  wrapAround: false,
  resize: true,
  pageDots: false,
  cellAlign: 'center',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {

});
