// ga4 custom click events
const myLinkList = document.querySelectorAll('a');

myLinkList.forEach(item => {
    if (item.href.includes('webflow.')) {
        item.addEventListener("click", () => {
            gtag('event', 'webflow_click');
        });
    }
});

console.log('hallo');