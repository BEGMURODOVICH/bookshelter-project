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
