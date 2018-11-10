import React, {Component} from 'react';

export class BookInfo extends Component {

    render() {
        const {description, ISBN_number, author, publication_date, genre, price, title} = this.props.book;
        return <div class="col-xs-12 col-sm-6 example-col">
                <p><strong>Title:</strong>{title}</p>
                <p><strong>Description:</strong>{description}</p>
                <p><strong>ISBN number:</strong>{ISBN_number}</p>
                <p><strong>Author:</strong>{author}</p>
                <p><strong>Publication_date:</strong>{publication_date}</p>
                <p><strong>Genre:</strong>{genre}</p>
                <p><strong>Price:</strong>{price}</p>
        </div>
    }
}