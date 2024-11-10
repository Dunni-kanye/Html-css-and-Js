
// const wrapper = document.getElementById("wrapper");
// console.log(wrapper)
// const bookTitles = document.getElementsByClassName("name");
// console.log(bookTitles)   

// console.log(Array.isArray(bookTitles))

// console.log(Array.isArray(Array.from(bookTitles)))
// const arrayResult = Array.from(bookTitles)

// arrayResult.forEach((element)=> {
//     console.log(element.textContent)
//     element.textContent += " (test)"

// })
// const lis = document.getElementsByTagName("li")
// console.log(lis)

// const pageBanner = document.querySelector("#page-banner")
// console.log(pageBanner)

// const bookToRead = document.querySelectorAll(".title");
// console.log(bookToRead)

// bookTitles.forEach(element=>{
//     console.log(element.textContent)
// })

// console.log(arrayResult)
const booklist = document.querySelector("#book-list ul")

console.log(booklist)
booklist.addEventListener('click', (events)=>{
    const deleteBtn = events.target.className
    if (deleteBtn == "delete") {
        const liTag = events.target.parentNode;
        booklist.removeChild(liTag)
          

    }
    
})

addBookBtn.addEventListener('click', (events) =>{
    const title = newBookInput.value.trim();
    if (title) {
        addBook(title);
        newBookInput.value = '';
    }
});
function addBook(title) {
    const li = document.createElement('li')
    li.textContent = title;
}