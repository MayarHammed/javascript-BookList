// windows
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");
const error = document.getElementById("Error");
// Form
const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const bookList = document.getElementById("book-list");
const btn = document.querySelector(".btn");

// BookList
btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (title.value == "" && author.value == "" && year.value == "") {
    alert("Fill The Form in Input Empty ");
  } else {
    const newRow = document.createElement("section");


    // Creating new Title && new Author && new Year
    // ********************************************

    
    //  <div1>...Title...</div1>
    const newTitle = document.createElement("div1");
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);
    title.value = "";

    // <div2>...Author...</div2>
    const newAuthor = document.createElement("div2");
    newAuthor.innerHTML = author.value;
    newRow.append(newAuthor);
    author.value = "";

    //  <div3>...Year...</div3>
    const newYear = document.createElement("div3");
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);
    year.value = "";

    //  <section id="book-list"> ...... </section>
    bookList.appendChild(newRow);
  }
});

// Action
open.addEventListener("click", () => modal.classList.add("show-modal"));
close.addEventListener("click", () => modal.classList.remove("show-modal"));

window.addEventListener("click", (e) => {
  e.target === modal ? modal.classList.remove("show-modal") : false;
});
