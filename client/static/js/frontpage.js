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

loginForm.addEventListener("submit", e => {
    e.preventDefault();
    // Perform your AJAX or Fetch login
    fetch(`http://localhost:3000/auth/login`, {
        "method": 'POST',
        "headers": {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        "body": JSON.stringify({username: loginUser.value, password: loginPass.value})
    })
    .then(resp => {
        console.log(`Our res code is ${resp.status}`)
        if (resp.status == 200) { 
            err.innerHTML=""
            localStorage.setItem('username', loginUser.value);
            localStorage.setItem('password', loginPass.value);
            window.location.href="/"
            document.querySelector('#checkUserLog').innerHTML = `You are logged in as ${loginUser.value}`
        }
        else if (resp.status == 403) {
            err.innerHTML="Wrong password"
        }
        else if (resp.status == 401) {
            err.innerHTML = `User ${loginUser.value} does not exist. Please create an account`
        }
    
    })

    setFormMessage(loginForm, "error", "Invalid username/password combination");
});

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

            const data = {username:e.target[0].value, email: e.target[1].value, password: e.target[2].value};
            console.log(data)

            const options = {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            } 

            const response = await fetch('http://localhost:3000/auth/register', options);
            const userData = await response.json();
            console.log(userData)

            // localstorage
            
            // window.location.hash = `#users/${userData['user_id']}`
            window.location.href = "/habits.html"
            
            
            
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
