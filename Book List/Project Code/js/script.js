//get the UI elements
let form = document.querySelector('#book-form');
let booklist = document.querySelector("#book-list");

//Book Class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
// UI class
class UI {
    // constructor() {

    // }

    static addToBooklist(book) {
        let list = document.querySelector('#book-list');
        let row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href = "#" class = "delet">❎</a></td>
        `
        list.appendChild(row);
    }

    static clearFilds() {
        document.querySelector('#title').value = '',
            document.querySelector('#author').value = '',
            document.querySelector('#isbn').value = '';
    }
    static showAlert(message, className) {
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));

        let container = document.querySelector('.container');
        let form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        setTimeout(() => {
            document.querySelector('.alert').remove();//alert from squlaton class
        }, 3000);
    }

    static deleteFromBook(target){
        // console.log(target);
        if (target.hasAttribute('href')) {
            target.parentElement.parentElement.remove();
            // console.log(target.parentElement.parentElement);

            
        UI.showAlert('Book Removed!', 'success');
        }
    }
}


//add event Listener
form.addEventListener('submit', newBook);
booklist.addEventListener('click', removeBook)


//Define Functions

function newBook(e) {
    let title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value;

    // let ui = new UI();

    if (title === "" || author === "" || isbn === "") {
        
        UI.showAlert("please fill all the filds !", "error");
    } else {



        let book = new Book(title, author, isbn);
        // console.log(book);

        UI.addToBooklist(book);

        UI.showAlert("Successfully added the book", "success");

        UI.clearFilds();
    }

    e.preventDefault();
}


// Book removing function
function removeBook(e) {
    // let ui = new UI();
    UI.deleteFromBook(e.target);



    e.preventDefault(); 
}