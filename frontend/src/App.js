// /client/App.js
import React, {Component} from "react";
import {BooksList} from "./components/BooksList";
import {AddBook} from "./components/AddBook";
import {BooksService} from "./services/BooksService";
import {Header} from "./components/Header";
import {BookInfo} from "./components/BookInfo";
import {Grid, Row, Col, Label} from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.booksService = new BooksService();
    }

    // initialize our state
    state = {
        books: [],
        selectedBook: null
    };

    componentDidMount() {
        this.booksService.getBooks().then(({data: books}) => {
            this.setState({books});
        });
    }

    onBookSelected = (selectedBook) => {
        const bookToSelect = this.state.books.find(book => selectedBook.title === book.title);
        if (bookToSelect) {
            this.setState({selectedBook: bookToSelect});
        }
    }
    onBookDeleted = (BookToDelete) => {
        const bookToDelete = this.state.books.find(book => BookToDelete.title === book.title);
        if (bookToDelete) {
            this.booksService.deleteBook(bookToDelete.title).then(() => {
                const filteredBooks = this.state.books.filter(book => bookToDelete.title !== book.title);
                this.setState({books: filteredBooks});
                if (this.state.selectedBook&&this.state.selectedBook.title === bookToDelete.title) {
                    this.setState({selectedBook: null});
                }
            });
        }
    }

    render() {
        const {books, selectedBook} = this.state;
        return (
            <div>
                <Header/>
                <Grid>
                    <Row><h2>
                        <Label>All Books:</Label>
                    </h2>
                        <Col xs={6} md={4}>
                            <BooksList data={books} onSelect={this.onBookSelected} onDelete={this.onBookDeleted}/>
                        </Col>
                        <Col xs={12} md={8}>
                            {selectedBook && <BookInfo book={selectedBook}/>}
                        </Col>
                    </Row>
                    <AddBook func={(book) => {
                        this.booksService.addBook(book);
                    }}/>
                </Grid>
            </div>
        );
    }
}

export default App;