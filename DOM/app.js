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

    if(Object .is(className, "delete")){
        let li = e.target.parentElement
        bookList.removeChild(li)

    }
})


