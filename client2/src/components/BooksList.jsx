import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap';

export class BooksList extends Component {

    render() {
        return <ListGroup>
            {this.props.data.length <= 0
                ? "NO DB ENTRIES YET"
                : this.props.data.map((book) => (
                    <ListGroupItem style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}
                                   key={book.title}>{book.title}
                        <div>
                            <Button bsStyle="info" type="submit"
                                    onClick={() => this.props.onSelect(book)}>Info
                            </Button>
                            <Button bsStyle="danger" type="submit"
                                    onClick={() => this.props.onDelete(book)}>Delete
                            </Button>
                        </div>
                    </ListGroupItem>
                ))}
        </ListGroup>
    }
}