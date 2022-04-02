// connecting to server
// change based on deployment
// const serverPath = `http://localhost:3000`;
const serverPath = `https://trackyourhabits.herokuapp.com`;

const protocol = window.location.protocol;
const host = window.location.host;

function setFormMessage(formElement, type, message) {
const messageElement = formElement.querySelector(".form__message");

messageElement.textContent = message;
messageElement.classList.remove("form__message--success", "form__message--error");
messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
inputElement.classList.add("form__input--error");
inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
inputElement.classList.remove("form__input--error");
inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
const loginForm = document.querySelector("#login");
const createAccountForm = document.querySelector("#createAccount");

document.querySelector("#linkCreateAccount").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.add("form--hidden");
    createAccountForm.classList.remove("form--hidden");
});

document.querySelector("#linkLogin").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");
});

loginForm.addEventListener("submit", async e => {
    e.preventDefault();
    
    async function loginUser(e){
        e.preventDefault();
        try{
        
            const loginData = {username:e.target[0].value, password: e.target[1].value};
            console.log(loginData)

            const options = {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(loginData)
            }
            
            const response = await fetch(`${serverPath}/auth/login`, options);
            const data = await response.json();
            console.log(data);

            // if (data.err){ throw Error(data.err); }
            
            if (response.status == 200) { 
            // if (data.success) {                        
                console.log(`User ${e.target[0].value} has registered`)
                // err2.innerHTML=""
                localStorage.setItem('username', e.target[0].value);
                localStorage.setItem('password',  e.target[1].value);
                /*document.querySelector('#checkUserLog').innerHTML = `You are logged in as ${e.target[0].value}`*/
                window.location.href = "/habits.html";
                return true
            }

            else if (response.status == 401){
                document.querySelector('#checkUserLog').innerHTML = `Wrong username or password! Try again!`
            }

            // } else if (response.status ==401) {
            //     err2.innerHTML=`Username ${e.target[0].value} already exists. Choose a unique one`
            // } 
            // return false;

            //localstorage
            // localStorage.setItem('username', e.target[0].value);
            // localStorage.setItem('password', e.target[1].value);
            
        }
        catch (err) {
            console.warn(`User login failed: error: ${err}`);
            setFormMessage(loginForm, "error", "Invalid username or password! Please try again!");
        }
    }
    loginUser(e)
})

createAccountForm.addEventListener('submit', async e => {
    e.preventDefault()
    // fetch(`/auth/register`, {
    //     "method": 'POST',
    //     "headers": {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     "body": JSON.stringify({username: regUser.value, password: regPass.value})})
    // .then(resp => {
    //     console.log(`Our res code is ${resp.status}`)
    //     if (resp.status == 200) { 
    //         console.log(`User ${regUser.value} has registered`)
    //         err2.innerHTML=""
    //         localStorage.setItem('username', regUser.value);
    //         localStorage.setItem('password', regPass.value);
    //         window.location.href="/"
    //     } else if (resp.status ==401) {
    //         err2.innerHTML=`Username ${regUser.value} already exists. Choose a unique one`
    //     }
    // })
    async function createUser(e){
        e.preventDefault();
        try {

            const registrationData = {username:e.target[0].value, email: e.target[1].value, password: e.target[2].value};
            console.log(registrationData)

            const options = {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(registrationData)
            } 

            const response = await fetch(`${serverPath}/auth/register`, options);
            const userData = await response.json();
            console.log(userData)

            // localstorage
            localStorage.setItem('username', e.target[0].value);
            localStorage.setItem('password', e.target[1].value);
            
            // window.location.hash = `#users/${userData['user_id']}`
            window.location.href = "/habits.html";
            
            }
         catch (err) {
            console.warn(`User registration failed: error: ${err}`);
        }
    }
    createUser(e)
})

document.querySelectorAll(".form__input").forEach(inputElement => {
    inputElement.addEventListener("blur", e => {
        if (e.target.id === "regUser" && e.target.value.length > 0 && e.target.value.length < 4) {
            setInputError(inputElement, "Username must be at least 4 characters in length");
        }
    });

    inputElement.addEventListener("input", e => {
        clearInputError(inputElement);
    });
});
});


// function login(data){
//     localStorage.setItem('username', data.user);
//     location.hash = '#feed';
// }

// function logout(){
//     localStorage.clear();
//     location.hash = '#login';
// }

// function currentUser(){
//     const username = localStorage.getItem('username')
//     return username;
// }

// let greeting = document.querySelector('#showUsername')
//     if (greeting){
//         greeting.textContext = `You are now logged in as ${localStorage.getItem('username')}`
//         console.log(localStorage.getItem('username'))
//     };

// async function createUser(e){
//     e.preventDefault();
//     try {
//         const options = {
//             method: 'POST',
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
//         }
        
//         const response = await fetch('http://localhost:3000/auth/register', options);
//         const { id, err } = await response.json();
//         if(err) { 
//             throw Error(err) 
//         } else {
//             window.location.hash = `#users/${id}`
//         }
//     } catch (err) {
//         console.warn(err);
//     }
// }
