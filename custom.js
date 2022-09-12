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
const favouriteProject1 = document.querySelector('.favouriteproject1');
const favouriteProject2 = document.querySelector('.favouriteproject2');

favouriteProject1.addEventListener('click', () => {
    console.log('hallo inner');
});
