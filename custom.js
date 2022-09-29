// ga4 custom click events
const myLinkList = document.querySelectorAll('a');

myLinkList.forEach(item => {
    if (item.href.includes('webflow.')) {
        item.addEventListener("click", () => {
            gtag('event', 'webflow_click');
        });
    }
    else if (item.href.includes('trk.elementor')) {
        item.addEventListener("click", () => {
            gtag('event', 'elementor_click');
        });
    }
});

// projects section

const favouriteProjects = document.querySelectorAll('.favouriteproject');
const loadingWrapper = document.querySelector('.loading-wrapper');
const startScreen = document.querySelector('.screenstartpage');
const screenContent = document.querySelector('.project-container');
const loadingBar = document.querySelector('.loading-bar');
const browserBar = document.querySelector('.browser-bar');
const projectDescriptionIntro = document.querySelector('.project-intro');

const projectDescription = [document.querySelector('.project-1'),
document.querySelector('.project-2'),
document.querySelector('.project-3')
];
projectDescription[0].classList.add('hide');
projectDescription[1].classList.add('hide');
projectDescription[2].classList.add('hide');

browserBar.addEventListener("mouseover", () => {
    browserBar.style.opacity = "1";
});

browserBar.addEventListener("mouseout", () => {
    browserBar.style.opacity = "0.8";
});

browserBar.addEventListener("click", () => {
    startScreen.classList.remove('hide');
    projectDescriptionIntro.classList.remove('hide');
    projectDescription[0].classList.add('hide');
    projectDescription[1].classList.add('hide');
    projectDescription[2].classList.add('hide');
    screenContent.innerHTML = '';
});

for (let i = 0; i < favouriteProjects.length; i++) {
    favouriteProjects[i].addEventListener('click', (event) => {
        loadingWrapper.classList.add('loading');
        setTimeout(function () {
            screenContent.insertAdjacentHTML('afterbegin', `<img src=https://jochen3000.github.io/pixel-berlin/img/project-${i}.png>`);
            startScreen.classList.add('hide');
            projectDescriptionIntro.classList.add('hide');
            loadingBar.classList.add('loading-progress');
            projectDescription[i].classList.remove('hide');
        }, 250);
        setTimeout(function () {
            loadingWrapper.classList.remove('loading');
            loadingBar.classList.remove('loading-progress');
        }, 1250);
    });
};

/**
 * whatsapp simulation
 */

/* display time in top bar */
let d = new Date();
document.querySelector('.time-display').innerHTML = `${d.getHours()}:${d.getMinutes()}`;

/* select elements and hide */
const isTyping = document.querySelector('.contact-tap');
const messagesComputer = document.querySelectorAll('.message-computer');
const messagesUser = document.querySelectorAll('.message-user');
const textEntryName = document.querySelector('.text-entry-name');
const textEntryMessage = document.querySelector('.text-entry-message');
const textEntryContact = document.querySelector('.text-entry-contact');

isTyping.classList.add('hide');
messagesUser[0].classList.add('hide');
messagesUser[1].classList.add('hide');
messagesUser[2].classList.add('hide');
messagesComputer[1].classList.add('hide');
messagesComputer[2].classList.add('hide');
messagesComputer[3].classList.add('hide');
messagesComputer[4].classList.add('hide');
textEntryName.classList.add('hide');
textEntryMessage.classList.add('hide');
textEntryContact.classList.add('hide');



