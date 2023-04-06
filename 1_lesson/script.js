let username;

while (true) {
    username = prompt('What is your name?', '');

    if (username !== null && username.trim().length >= 3) {
        break;
    } else {
        alert("Error. The name should be at least 3 characters long. Please enter your name.");
    }
}

let age;

while (true) {
    age = prompt('How old are you', '');

    if (!isNaN(age)) {
        age = Number(age);
        break;
    } else {
        alert("Error. Please enter your age in number.");
    }
}

if (age < 18) {
    alert('You are not allowed to visit this website.');
}
else if (age < 22) {
    if (confirm('Are you sure you want to continue?')) {
        alert(`Welcome to PornHub, ${username}`);
    } else {
        alert('You are not allowed to visit this website.');
    }
}
else {
    alert(`Welcome to PornHub, ${username}`);
}