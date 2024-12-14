const modalClose = document.getElementById("modalClose");
const moreModal = document.querySelector(".more-modal");
const modalContent = document.querySelector(".modal-content");
const bookUl = document.querySelector(".books");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    const resultP = document.querySelector(".resultP");
    const postsCount = posts.length;
    resultP.textContent = `Showing ${postsCount} Result(s)`;

    posts.forEach((post) => {
      const bookElement = document.createElement("li");
      bookElement.classList.add("book-item");

      // To'liq ma'lumotni data atributga saqlaymiz
      bookElement.setAttribute("data-post", JSON.stringify(post));

      bookElement.innerHTML = `<div class="book-info">
          <img src="img/book1.svg" alt="" />
          <div class="info">
            <h3>${post.title.slice(0, 5)}</h3>
            <p>${post.body.slice(0, 10)}</p>
          </div>
          <div class="book-btn">
            <div class="book-action">
              <button class="bookmarkBtn">Bookmark</button>
              <button class="moreInfoBtn">More Info</button>
            </div>
            <button class="readBtn">Read</button>
          </div>
        </div>`;

      bookUl.appendChild(bookElement);
    });

    bookUl.addEventListener("click", (event) => {
      const bookItem = event.target.closest(".book-item");
      if (bookItem) {
        const postData = JSON.parse(bookItem.getAttribute("data-post"));

        const moreModalTitle = (document.querySelector(
          ".moreModalTitle"
        ).textContent = postData.title);
        const moreModalP = (document.querySelector(".moreModalP").textContent =
          postData.body);

        const categoryP = document.querySelectorAll(".categoryP");
        categoryP.forEach((info) => {
          info.textContent = postData.id;
        });

        console.log(postData.id);
      }

      if (event.target.classList.contains("moreInfoBtn")) {
        moreModal.style.display = "block";
        moreModal.style.background = "#00000080";
        moreModal.style.transition = "all 1s ease";
        modalContent.style.transition = "ease all 1s";
        modalContent.style.transform = "translateX(0)";
      }
    });
  });

modalClose.addEventListener("click", () => {
  moreModal.style.display = "none";
});

const logOut = document.querySelector(".logOut");
logOut.addEventListener("click", () => {
  window.location.href = "login-sigin.html";
});

document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  if (!username || !password) {
    window.location.href = "login-sigin.html";
  }
});
