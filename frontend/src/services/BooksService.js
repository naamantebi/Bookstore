import axios from "axios/index";

export class BooksService {
    getBooks = () => axios.get("/api/books/all")
        .then(res => res.data)


    addBook = book => {
        axios.post("/api/books/add", {
            title: book.title,
            description: book.description,
            ISBN_number: book.ISBN_number,
            author: book.author,
            publication_date: book.publication_date,
            genre: book.genre,
            price: book.price
        });
    };

    deleteBook = bookTitle => axios.delete(`/api/books/delete/${bookTitle}`);

}