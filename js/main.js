const modalClose = document.getElementById("modalClose");
const moreModal = document.querySelector(".more-modal");
const modalContent = document.querySelector(".modal-content");
const moreInfoBtn = document.querySelectorAll(".moreInfoBtn");

moreInfoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("salom");
    modalContent.classList.add("modal-content-active");
    moreModal.style.background = "#00000080";
    moreModal.style.transition = "all 1s ease";
  });
});

const logOut = document.querySelector(".logOut");
logOut.addEventListener("click", () => {
  window.location.href = "login-sigin.html";
});
