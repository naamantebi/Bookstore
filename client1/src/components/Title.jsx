import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';

export class Title extends Component {

    render() {
        return <div class="example-wrapper container-fluid">
            <div class="row"><Jumbotron>
                <h1>Bookstore</h1>
                <p>
                    Welcome to our bookstore !
                    Our bookstore sells many kinds of books. All books have a title, description,
                    ISBN number, Author, Publication Date, Genre and a Price.
                    Enjoy!
                </p>
            </Jumbotron>
            </div>
        </div>
    }
}