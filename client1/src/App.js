// /client/App.js
import React, {Component} from "react";
import {BooksList} from "./components/BooksList";
import {AddBook} from "./components/AddBook";
import {BooksService} from "./services/BooksService";
import {Title} from "./components/Title";
import {BookInfo} from "./components/BookInfo";

import {Grid, Row, Col, Label} from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.booksService = new BooksService();
    }

    // initialize our state
    state = {
        data: [],
        selectedBook: {}
    };

    componentDidMount() {
        this.booksService.getDataFromDb().then((data) => {
            this.setState({data});
        });
    }

    render() {
        const {data} = this.state;
        return (
            <div>
                <Title/>
                <Grid>
                    <Row><h2>
                        <Label>All Books:</Label>
                    </h2>
                        <Col xs={6} md={4}>
                            <BooksList data={data}/>
                        </Col>
                        <Col xs={12} md={8}>
                            <BookInfo data={data}/>
                        </Col>
                    </Row>
                        <AddBook func={(book) => {
                            this.booksService.putDataToDB(book);
                        }}/>
                </Grid>
            </div>
    );
    }
    }

    export default App;