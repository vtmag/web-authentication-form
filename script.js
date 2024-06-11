const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signUpForm = document.getElementById('signUpForm');

const button= document.getElementsByClassName('si');



signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
    
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

const signUpButton1 = document.querySelector('.su');
const signInButton1 = document.querySelector('.si');

// Προσθήκη ακροατή για το κλικ στο κουμπί sign up
signUpButton1.addEventListener('click', function(event) {
    const emailInput = document.querySelector('.sign-up-container input[type="email"]');
    const passwordInput = document.querySelector('.sign-up-container input[name="password"]');
    const confirmPasswordInput = document.querySelector('.sign-up-container input[name="confirm-password"]');
    
    if (!isValidEmail(emailInput.value)) {
        event.preventDefault();
        alert('Please enter a valid email address for sign up.');
    }
    if (passwordInput.value.length < 6) {
        event.preventDefault();
        alert('Password must be at least 8 characters long for sign up.');
    }
    if (passwordInput.value !== confirmPasswordInput.value) {
        
        alert('Passwords do not match for sign up.');
    }
});

// Προσθήκη ακροατή για το κλικ στο κουμπί sign in
signInButton1.addEventListener('click', function(event) {
    const emailInput = document.querySelector('.sign-in-container input[type="email"]');
    const passwordInput = document.querySelector('.sign-in-container input[type="password"]');
    
    if (!isValidEmail(emailInput.value)) {
        event.preventDefault();
        alert('Please enter a valid email address for sign in.');
    }
    if (passwordInput.value.length < 6) {
        event.preventDefault();
        alert('Password must be at least 8 characters long for sign in.');
    }
});


function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
