const navMenu = document.querySelector('nav');
const navBtn = document.querySelectorAll('.nav-btn');

function webTransitions() {
    //activador de clase para botones del nav
    for(let i = 0; i < navBtn.length; i++){
        navBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn'
        })
    }
    //activador de clase para sections
        let allSections = document.querySelectorAll('section');
        allSections.addEventListener('click', (e) => {
            console.log(e.target)
        })
    }

webTransitions();