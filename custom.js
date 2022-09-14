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
// const favouriteProjects = document.querySelectorAll('.favouriteproject');

// favouriteProjects.forEach((item) => {
//     item.addEventListener('click', function handleClick(event) {
//         console.log('box clicked', event);

//         box.setAttribute('style', 'background-color: yellow;');
//     });
// });

const favouriteProjects = document.querySelectorAll('.favouriteproject');
const loadingWrapper = document.querySelector('.loading-wrapper');
const startScreen = document.querySelector('.screenstartpage');
const screenContent = document.querySelector('.project-container');
const loadingBar = document.querySelector('.loading-bar');

favouriteProjects.forEach(item => {
    item.addEventListener('click', (event) => {
        loadingWrapper.classList.add('loading');
        setTimeout(function () {
            loadingWrapper.insertAdjacentHTML('beforebegin', '<img src=./img/podojo-screen.png>');
            startScreen.classList.add('hide');
            loadingBar.classList.add('loading-progress');
        }, 250);
        setTimeout(function () {
            loadingWrapper.classList.remove('loading');
        }, 1250);


    });
});



