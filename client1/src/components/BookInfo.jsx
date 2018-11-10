import React, {Component} from 'react';

export class BookInfo extends Component {

    render() {
        console.log("selectedBook "+ this.props.data);
        return <div class="col-xs-12 col-sm-6 example-col">
                <p><strong>Title:</strong></p>
                {/*{this.props.data.selectedBook.title}</p>*/}
                <p><strong>Description:</strong></p>
                {/*{this.props.data.selectedBook.description}</p>*/}
                <p><strong>ISBN number:</strong></p>
                {/*{this.props.data.selectedBook.ISBN_number}</p>*/}
            <p><strong>Author:</strong></p>
                {/*{this.props.data.selectedBook.author}</p>*/}
                <p><strong>Publication_date:</strong></p>
                {/*{this.props.data.selectedBook.publication_date}</p>*/}
                <p><strong>Genre:</strong></p>
                {/*{this.props.data.selectedBook.genre}</p>*/}
                <p><strong>Price:</strong></p>
                {/*{this.props.data.selectedBook.price}</p>*/}
        </div>
    }
}