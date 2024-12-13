const login = document.querySelector(".login-form");
const signin = document.querySelector(".sigin-form");
const goSigin = document.querySelector(".enter-signup");
const gologin = document.querySelector(".enter-login");

goSigin.addEventListener("click", () => {
  login.style.display = "none";
  signin.style.display = "block";
});

gologin.addEventListener("click", () => {
  signin.style.display = "none";
  login.style.display = "block";
});

// sigin
document.getElementById("sigin-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("signin-username").value;
  const password = document.getElementById("signin-password").value;

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
});

// login
document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const inputUsername = document.getElementById("login-username").value;
  const inputPassword = document.getElementById("login-password").value;

  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (inputUsername === storedUsername && inputPassword === storedPassword) {
    window.location.href = "index.html";
  } else {
    console.log("xato");
  }
});
