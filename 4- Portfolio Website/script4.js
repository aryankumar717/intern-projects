var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');

function opentab(tabname, event) {
  for (let tablink of tabLinks) {
    tablink.classList.remove('active-links');
  }
  for (let tabcontent of tabContents) {
    tabcontent.classList.remove('active-tabs');
  }
  event.currentTarget.classList.add('active-links');
  document.getElementById(tabname).classList.add('active-tabs');
}

var typed = new Typed('#element', {
  strings: ['Web Developer', 'Software Engineer', 'Problem Solver', 'Tech Enthusiast'],
  typeSpeed: 50,
  loop: true
});

var sidemenu = document.getElementById('sidemenu');

function openmenu() {
  sidemenu.style.right = '0';
}

function closemenu() {
  sidemenu.style.right = '-200px';
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyl0J-rHDIMSz0-6y-sicc0ZPoAmL5KTXJP7dV77LFLh71T9ZAZAeQ58Yw5P-TBqWupwA/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = 'Message sent successfully';
      setTimeout(() => {
        msg.innerHTML = '';
      }, 5000);
      form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});
