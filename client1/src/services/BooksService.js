import axios from "axios/index";

export class BooksService{
    // our first get method that uses our backend api to
    // fetch data from our data base
    getDataFromDb = () => fetch("/api/books/getData")
            .then(data => data.json())
            .then(res => res.data);

    // our put method that uses our backend api
    // to create new query into our data base
    putDataToDB = book => {
        axios.post("/api/books/putData", {
            title: book.title,
            description: book.description,
            ISBN_number: book.ISBN_number,
            author: book.author,
            publication_date: book.publication_date,
            genre: book.genre,
            price: book.price
        });
    };


    deleteFromDB = idTodelete => {
        let objIdToDelete = null;
        this.state.data.forEach(dat => {
            if (dat.id == idTodelete) {
                objIdToDelete = dat._id;
            }
        });

        axios.delete("/api/books/deleteData", {
            data: {
                id: objIdToDelete
            }
        });
    };
}