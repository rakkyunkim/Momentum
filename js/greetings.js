const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const logOut = document.getElementById("log-out");

const HIDDEN_CLASS_NAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    const typedUsername = loginInput.value;
    //prevent refreshing everytime it submits.
    event.preventDefault();
    //hide form on submit.
    loginForm.classList.add(HIDDEN_CLASS_NAME);
    logOut.classList.remove(HIDDEN_CLASS_NAME);
    //save the user name in the local storage
    localStorage.setItem(USERNAME_KEY, typedUsername);
    //display hello username.
    paintGreetings(typedUsername); 
}

function paintGreetings(username){
    //set visible the greeting text.
    greeting.classList.remove(HIDDEN_CLASS_NAME);
     //same as Hello + username
    greeting.innerText = `Hello, ${username}!`;
}
function logout(){
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem("todos");
    location.reload();
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

logOut.addEventListener("click", logout);

//if there is no saved user in the local storage, set loginform visible.
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASS_NAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    logOut.classList.remove(HIDDEN_CLASS_NAME);
    paintGreetings(savedUsername);
}


