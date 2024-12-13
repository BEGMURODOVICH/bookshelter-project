const modalClose = document.getElementById("modalClose");
const moreModal = document.querySelector(".more-modal");
const modalContent = document.querySelector(".modal-content");
const moreInfoBtn = document.querySelectorAll(".moreInfoBtn");

moreInfoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    moreModal.style.display = "block";
    moreModal.style.background = "#00000080";
    moreModal.style.transition = "all 1s ease";
    modalContent.style.transition = "ease all 1s ";
    modalContent.style.transition = "ease all 1s";
    modalContent.style.transform = "translateX(0)";
  });
});

modalClose.addEventListener("click", () => {
  moreModal.style.display = "none";
});
const logOut = document.querySelector(".logOut");
logOut.addEventListener("click", () => {
  window.location.href = "login-sigin.html";
});
