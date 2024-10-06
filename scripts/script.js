// Dark/light theme change

noise = document.querySelector(".noise");
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
    noise.style.opacity = "0.1";
    noiseBackground.style.opacity = "0.5";
  } else if (theme == "light") {
    themeToggler.checked = true;
    themeTogglerMobile.checked = true;
    noise.style.opacity = "0";
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



// Modal

// var modalResume = document.getElementById("modalResume");
// var btnResume = document.getElementById("btnResume");
// var span = document.getElementsByClassName("close")[0];

// btnResume.onclick = function() {
//   modalResume.style.display = "block";
// }

// span.onclick = function() {
//   modalResume.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modalResume.style.display = "none";
//   }
// }

// Current year
document.addEventListener("DOMContentLoaded", function() { 
  const currentYear = new Date().getFullYear();
  const currentYearSpan = document.getElementById("current-year");
  currentYearSpan.textContent = currentYear
})
