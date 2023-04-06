// const htmlAttribute = document.querySelector('[data-say-hi]');
// const text = htmlAttribute.getAttribute('data-say-hi');
// console.log(text);

// const yonchi = document.querySelector('ul');
// const elem = yonchi.lastElementChild;
// console.log(elem.textContent);

// const classLike = document.getElementsByClassName('like');
// console.log(classLike);

// const list = document.querySelectorAll('ul')[0];
// list.insertAdjacentHTML(
//     'beforeend',
//     '<li>Text</li>'
// );

// const page = document.documentElement;
// const pageWidth = page.clientWidth;
// const windowWidth = window.innerWidth;
// const scrollWidth = windowWidth - pageWidth;

// console.log(pageWidth, windowWidth);
// console.log(scrollWidth);

// function scrollPage() {
//     window.scrollTo({
//         top: 100,
//         left: 0,
//         behavior: "smooth"
//     })
// };
// setTimeout(scrollPage, 1000);

// const ul1 = document.querySelectorAll('ul')[0];
// const ul2 = document.querySelectorAll('ul')[1];
// const div = document.querySelectorAll('div')[1];
// const coordUl1 = ul1.getBoundingClientRect();
// const coordUl2 = ul2.getBoundingClientRect();
// const coordDiv = div.getBoundingClientRect();


// console.log(coordUl1, coordUl2, coordDiv);

const textareaBody = document.querySelector('.textareaIcon');

document.addEventListener("click", textareaIcon);

function textareaIcon(event) {
    if (event.target.closest('.textarea__button')) {
        textareaBody.classList.toggle('_active');
    }
    if (!event.target.closest('.textareaIcon')) {
        textareaBody.classList.remove('_active');
    }
}

const textField = document.querySelector('.textarea__item');
const textFieldLimit = textField.getAttribute('maxlength');
const textCounter = document.querySelector('.textarea__counter span');
textCounter.innerHTML = textFieldLimit;

textField.addEventListener("keyup", textSetCounter);
textField.addEventListener("keydown", function (event) {
    if (event.repeat) textSetCounter();
});

function textSetCounter() {
    const textCounterResult = textFieldLimit - textField.value.length;
    textCounter.innerHTML = textCounterResult;
}

document.addEventListener("keyup", function (event) {
    if (event.code === 'Escape') {
        textareaBody.classList.remove('_active');
    }
})
