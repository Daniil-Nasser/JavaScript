
function showPassword() {
    const btn = document.querySelector('#eye');
    const input = document.querySelector('#password__input');

    btn.addEventListener('click', () => {
        if (input.getAttribute('type') === 'password') {
            input.setAttribute('type', 'text')
            btn.setAttribute('class', 'fas fa-eye icon-password')
        } else {
            input.setAttribute('type', 'password')
            btn.setAttribute('class', 'fas fa-eye-slash icon-password')
        }
    })
}
showPassword();


function showPassword1() {
    const btn = document.querySelector('#eye1');
    const input = document.querySelector('#password__input1');

    btn.addEventListener('click', () => {
        if (input.getAttribute('type') === 'password') {
            input.setAttribute('type', 'text')
            btn.setAttribute('class', 'fas fa-eye icon-password')
        } else {
            input.setAttribute('type', 'password')
            btn.setAttribute('class', 'fas fa-eye-slash icon-password')
        }
    })
}
showPassword1();

let confirm = document.querySelector('#submit');
let incorrect = document.getElementById('password__input1');
let incorrect1 = document.getElementById('password__input');
let additionalText = document.querySelector('.text')
confirm.addEventListener('click', function () {
    var pass1 = document.querySelector('#password__input'),
        pass2 = document.querySelector('#password__input1')
    if ((pass1.value === pass2.value) && (pass1.value.length >= 4 && pass2.value.length >= 4)) {
        alert('FOOLED! Successfully registered.');

    } else {
        incorrect.classList.add('notMatch');
        incorrect1.classList.add('notMatch');
        additionalText.innerHTML = `Password is NOT correct 
        or <p>you entered less than 4 characters.</p>`;
    }
})

incorrect.addEventListener('focus', function () {
    additionalText.innerHTML = ' ';
    incorrect.classList.remove('notMatch');
})


incorrect1.addEventListener('focus', function () {
    additionalText.innerHTML = ' ';
    incorrect1.classList.remove('notMatch');
})
