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
const screenContainer = document.querySelector('.loading-wrapper');
const screenContent = document.querySelector('.screenstartpage');

favouriteProjects.forEach(item => {
    item.addEventListener('click', (event) => {
        screenContainer.classList.add('loading');
        setTimeout(function () {
            screenContent.insertAdjacentHTML('beforebegin', '<img src=./img/podojo-screen.png>');
            screenContainer.classList.remove('loading');
        }, 1000);


    });
});



