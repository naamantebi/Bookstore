import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap';

export class BooksList extends Component {

    onBookSelected = function (title) {
        // this.props.selectedBook= title;
    }

    render() {
        return <ListGroup>
            {this.props.data.length <= 0
                ? "NO DB ENTRIES YET"
                : this.props.data.map((book) => (
                    <ListGroupItem onClick={this.onBookSelected(book.title)}>{book.title}
                        {/*<Button bsStyle="primary"*/}
                        {/*Button type="submit" onClick={this.booksService.deleteFromDB(book.title)}>delete*/}
                        {/*</Button>*/}
                    </ListGroupItem>
                ))}
        </ListGroup>

    }
}