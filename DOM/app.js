// const wrapper = document.getElementById("wrapper");
// console.log(wrapper);
//
// const title = document.getElementsByClassName("title");
// console.log(title);
//
// console.log(Array.isArray(Array.from(title)))
//
// let head = document.getElementsByTagName("header")
// console.log(head)

// const bookList = document.querySelectorAll("#book-list ul li")
// bookList.forEach(book =>{
//
//     console.log(book)/
//})

// const bookList = document.querySelectorAll("#book-list ul li .name")
// bookList.forEach(book => {
//     book.textContent += "(test)";
//     console.log(book.textContent)
// })
//
// const addBook = document.getElementById("add-book")
// console.log(addBook);
// console.log(addBook.lastElementChild.textContent)

const bookList = document.querySelector("#book-list ul")
//console.log(bookList)

bookList.addEventListener('click',(e) => {
    console.log(e)
    let className = e.target.className
    console.log(className)


    if (className === "delete") {
        let li = e.target.parentNode
        bookList.removeChild(li)
        alert("Deleted successfully")


}else {
        alert("oga click button")
    }

})

const searchBook = document.forms["search-books"];
const listOfBooks  = document.querySelectorAll("#book-list li .name")
console.log(searchBook)
console.log(listOfBooks)
searchBook.addEventListener("keyup",function (e){
    let inputText = e.target.value.toLowerCase()
    listOfBooks.forEach((book) =>{
        let title = book.textContent.toLowerCase()
        let isIncluded = title.includes(inputText)
        let parentNode = book.parentNode;
        console.log(parentNode)
        if(isIncluded){
            parentNode.style.display = "block"

        }
        else{
            parentNode.style.display = "none";
        }

    })

})

const  addBook = document.forms["add-book"];
console.log(addBook);

addBook.addEventListener("submit",(e)=>{
    e.preventDefault();
    const inputValue = addBook.querySelector("input").value

    if(inputValue){
        const liTag = document.createElement("li")
        const  firstSpan = document.createElement("span")
        const secondSpan = document.createElement("span")

        firstSpan.className = "name";
        secondSpan.className = "delete"

        liTag.appendChild(firstSpan);
        liTag.appendChild(secondSpan);

        firstSpan.textContent = inputValue;
        secondSpan.textContent = "delete";

        bookList.prepend(liTag)
        console.log(bookList)
    }
    })



