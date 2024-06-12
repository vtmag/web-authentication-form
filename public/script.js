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
    
    // if (!isValidEmail(emailInput.value)) {
    //     event.preventDefault();
    //     alert('Please enter a valid email address for sign up.');
    // }
    // if (passwordInput.value.length < 6) {
    //     event.preventDefault();
    //     alert('Password must be at least 8 characters long for sign up.');
    // }
    // if (passwordInput.value !== confirmPasswordInput.value) {
        
    //     alert('Passwords do not match for sign up.');
    // }


});

// // Προσθήκη ακροατή για το κλικ στο κουμπί sign in
// signInButton1.addEventListener('click', function(event) {
//     const emailInput = document.querySelector('.sign-in-container input[type="email"]');
//     const passwordInput = document.querySelector('.sign-in-container input[type="password"]');
    
//     if (!isValidEmail(emailInput.value)) {
//         event.preventDefault();
//         alert('Please enter a valid email address for sign in.');
//     }
//     if (passwordInput.value.length < 6) {
//         event.preventDefault();
//         alert('Password must be at least 8 characters long for sign in.');
//     }
// });





function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}


// script.js

// Language translations
// JavaScript for Language Translation

// Language translations
const translations = {
    en: {
        createAccount: "Create Account",
        signUp: "Sign Up",
        signIn: "Sign In",
        welcomeBack: "Welcome Back!",
        welcomeBackText: "To keep connected with us please login with your personal info!",
        helloFriend: "Hello, Friend!",
        helloFriendText: "Enter your personal details and start journey with us!",
        forgotPassword: "Forgot your password?",
        copyright: "Copyright © Magda 2024"
    },
    el: {
        createAccount: "Δημιουργία Λογαριασμού",
        signUp: "Εγγραφή",
        signIn: "Σύνδεση",
        welcomeBack: "Καλώς Ήρθατε!",
        welcomeBackText: "Για να παραμείνετε συνδεδεμένοι μαζί μας, παρακαλώ συνδεθείτε με τα προσωπικά σας στοιχεία!",
        helloFriend: "Γεια σου, Φίλε!",
        helloFriendText: "Εισάγετε τα προσωπικά σας στοιχεία και ξεκινήστε το ταξίδι μαζί μας!",
        forgotPassword: "Ξεχάσατε τον κωδικό σας;",
        copyright: "Πνευματικά Δικαιώματα © Magda 2024"
    }
};

// Function to translate the page
function translatePage(lang) {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        el.textContent = translations[lang][key];
    });
}


// Event listener for language switcher buttons
document.querySelectorAll('.language-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        translatePage(lang);
    });
});

// Initial translation
translatePage('el'); // Set initial language (Greek)


document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const suButton = document.getElementsByClassName('su')[0]; // Select the first element with class 'su'
    const siButton = document.getElementsByClassName('si')[0];

    suButton.addEventListener('click', function(event) { // Use 'click' instead of 'on click'
        event.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        // Client-side validation
        if (!name || !email || !password) {
            alert('Please fill in all fields');
            return;
        }

        signupUser(name, email, password);
    });

    siButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Client-side validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        loginUser( email, password);
    });

    function loginUser(email, password) {
        // Send login request to the server
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => {
            if (response.ok) {
                window.location.href = '/success.html';

            } else {
                window.location.href = '/fail.html';

            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    function signupUser(name, email, password) {
        // Send sign-up request to the server
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
        .then(response => {
            if (response.ok) {
                window.location.href = '/success.html'; // Redirect to success page
            } else {
                window.location.href = '/fail.html';
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});
