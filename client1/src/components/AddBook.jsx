import React, {Component} from 'react';
import {
    Label,
    FieldGroup,
    Button,
    DropdownButton,
    MenuItem,
    FormGroup,
    ControlLabel,
    FormControl
} from 'react-bootstrap';

export class AddBook extends Component {

    state = {
        title: "",
        description: "",
        ISBN_number: 0,
        author: "",
        publication_date: new Date(),
        genre: "",
        price: 0
    };

    render() {
        return <form onSubmit={() => this.props.func(this.state)} class="col-xs-12 col-sm-6 example-col">
            <h2>
                <Label>Add Book:</Label>
            </h2>
            <FormGroup>
                <ControlLabel>
                    Title:
                    <FormControl
                        type="text"
                        value={this.state.title}
                        onChange={e => this.setState({title: e.target.value})}
                        style={{width: "200px"}}
                    />
                    <FormControl.Feedback/>
                </ControlLabel>
            </FormGroup>
            <FormGroup>
                <ControlLabel>
                    Description:
                    <FormControl
                        type="text"
                        value={this.state.description}
                        onChange={e => this.setState({description: e.target.value})}
                        placeholder="Write short description"
                        style={{width: "200px"}}
                    />
                </ControlLabel>
            </FormGroup>
            <FormGroup>
                <ControlLabel>
                    ISBN number:
                    <FormControl
                        type="number"
                        value={this.state.ISBN_number}
                        onChange={e => this.setState({ISBN_number: e.target.value})}/>
                </ControlLabel>
            </FormGroup>
            <FormGroup>
                <ControlLabel>
                    Author:
                    <FormControl
                        type="text"
                        value={this.state.author}
                        onChange={e => this.setState({author: e.target.value})}
                        style={{width: "200px"}}
                    />
                </ControlLabel>
            </FormGroup>
            <FormGroup>
                <ControlLabel>
                    Publication Date:
                    <FormControl
                        type="date"
                        value={this.state.publication_date}
                        onChange={e => this.setState({publication_date: e.target.value})}
                        style={{width: "200px"}}
                    />
                </ControlLabel>
            </FormGroup>
            <FormGroup>
                <DropdownButton title={"Pick book genre:"} key={this.state.genre}
                                onSelect={e => this.setState({genre: e})}>
                    <MenuItem eventKey="Science fiction">Science fiction</MenuItem>
                    <MenuItem eventKey="Satire">Satire</MenuItem>
                    <MenuItem eventKey="Drama">Drama</MenuItem>
                    <MenuItem eventKey="Action">Action</MenuItem>
                    <MenuItem eventKey="Romance">Romance</MenuItem>
                    <MenuItem eventKey="Mystery">Mystery</MenuItem>
                    <MenuItem eventKey="Horror">Horror</MenuItem>
                </DropdownButton>
            </FormGroup>
            <FormGroup>
                <ControlLabel>
                    Price:
                    <FormControl
                        type="number"
                        value={this.state.price}
                        onChange={e => this.setState({price: e.target.value})}/>
                </ControlLabel>
            </FormGroup>
            <FormGroup>
                <Button bsStyle="primary"
                        Button type="submit">Add Book</Button>
            </FormGroup>
        </form>
    }
}