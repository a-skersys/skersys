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
}

function rotateTheme(theme) {
  if (theme === 'light') {
    return 'dark'
  }
  return 'light';
}

const themeToggler = document.getElementById('theme-toggle');

let theme = getTheme();
applyTheme(theme);

themeToggler.onclick = () => {
  const newTheme = rotateTheme(theme);
  applyTheme(newTheme);
  saveTheme(newTheme);

  theme = newTheme;
}




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