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

browserBar.addEventListener("click", () => {
    startScreen.classList.remove('hide');
});

for (let i = 0; i < favouriteProjects.length; i++) {

    favouriteProjects[i].addEventListener('click', (event) => {
        loadingWrapper.classList.add('loading');
        setTimeout(function () {
            screenContent.insertAdjacentHTML('afterbegin', `<img src=./img/project-${i}.png>`);
            startScreen.classList.add('hide');
            loadingBar.classList.add('loading-progress');
        }, 250);
        setTimeout(function () {
            loadingWrapper.classList.remove('loading');
            loadingWrapper.classList.remove('loading-progress');
        }, 1250);
    });
};



