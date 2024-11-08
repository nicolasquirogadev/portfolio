const navMenu = document.querySelector('nav');
const navBtn = document.querySelectorAll('.nav-btn');
const allSections = document.querySelectorAll('section');

function navTransitions() {
    for (let i = 0; i < navBtn.length; i++) {
      navBtn[i].addEventListener('click', function() {
        // Activator de clase para botones del nav
        let currentBtn = document.querySelectorAll('.active-btn');
        currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
        this.className += ' active-btn';
  
      //activador de section por nav
        const secId = this.dataset.id; 
        const currentSec = document.getElementById(secId);
        allSections.forEach((section) =>{
            section.classList.remove('active'); 
        })
        currentSec.classList.add('active');
        console.log("clicked button:", secId); 
      });
    }
  }
  
  navTransitions();

  