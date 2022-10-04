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

/**
 * projects section
 */

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
setInterval(currentTime, 30000);

function currentTime() {
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes()
    let minutesString = minutes <= 9 ? (`0${minutes}`) : (`${minutes}`);
    document.querySelector('.time-display').innerHTML = `${hours}:${minutesString}`;
}

/* select elements and hide */
const isTyping = document.querySelector('.contact-tap');
const messagesComputer = document.querySelectorAll('.message-computer');
const messagesUser = document.querySelectorAll('.message-user');
const textEntryName = document.querySelector('.text-entry-name');
const textEntryMessage = document.querySelector('.text-entry-message');
const textEntryContact = document.querySelector('.text-entry-contact');
const textEntryButton = document.querySelector('.submit-arrow-button');
const formSubmitButton = document.querySelector('.submit-button');
const formSubmitSuccess = document.querySelector('.submit-success-message');
const whatsappForm = document.querySelector(".whatsapp-form");
const chatContainer = document.querySelector('.chat-container');
const chatContainerInner = document.querySelector('.chat-container-inner');

isTyping.classList.add('hide');
messagesUser[0].classList.add('hide');
messagesUser[1].classList.add('hide');
messagesUser[2].classList.add('hide');
messagesComputer[1].classList.add('hide');
messagesComputer[2].classList.add('hide');
messagesComputer[3].classList.add('hide');
messagesComputer[4].classList.add('hide');
textEntryMessage.classList.add('hide');
textEntryContact.classList.add('hide');
formSubmitButton.classList.add('hide');
formSubmitSuccess.classList.add('hide');

// function to display computer messages
const displayComputerMessage = (id) => {
    isTyping.classList.remove('hide');
    setTimeout(function () {
        isTyping.classList.add('hide');
        messagesComputer[id].classList.remove('hide');
        scrollUp();
    }, 1000);
}

// Show first message on scroll visible
messagesComputer[0].classList.add('hide');
const appear = messagesComputer[0];
const cb = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            displayComputerMessage(0);
        }
    });
}
const io = new IntersectionObserver(cb);
io.observe(appear);

// Show second message on focus textEntryName 
textEntryName.addEventListener("focus", () => {
    displayComputerMessage(1);
});

// Press submit button to send user messages
textEntryButton.addEventListener("click", () => {
    displayUserMessage();
});

// Press enter key to send user messages
whatsappForm.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        displayUserMessage();
        e.preventDefault();
    }
});

// scroll up window if needed
const scrollUp = () => {
    if (chatContainerInner.clientHeight > chatContainer.clientHeight) {
        chatContainer.scrollTop = chatContainerInner.clientHeight - chatContainer.clientHeight;
    }
}

// Check which fields are filled and display
const displayUserMessage = () => {
    if (textEntryContact.value) {
        messagesUser[2].firstElementChild.firstElementChild.firstElementChild.innerText = textEntryContact.value;
        messagesUser[2].classList.remove('hide');
        textEntryButton.classList.add('hide');
        displayComputerMessage(4);
        formSubmitButton.click();
        scrollUp();
    }
    else if (textEntryMessage.value) {
        messagesUser[1].firstElementChild.firstElementChild.firstElementChild.innerText = textEntryMessage.value;
        messagesUser[1].classList.remove('hide');
        textEntryContact.classList.remove('hide');
        textEntryContact.focus();
        textEntryMessage.classList.add('hide');
        displayComputerMessage(3);
        scrollUp();
    }
    else if (textEntryName.value) {
        messagesUser[0].firstElementChild.firstElementChild.firstElementChild.innerText = textEntryName.value;
        messagesUser[0].classList.remove('hide');
        textEntryMessage.classList.remove('hide');
        textEntryMessage.focus();
        textEntryName.classList.add('hide');
        displayComputerMessage(2);
        scrollUp();
    }
}







