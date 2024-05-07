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
const listOfBooks = document.querySelectorAll("#book-list li")
console.log(searchBook)
console.log(listOfBooks)
searchBook.addEventListener("keyup",function (e){
    let inputText = e.target.value.toLowerCase()
    console.log(inputText)
    console.log(e)
})


