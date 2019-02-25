import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import Form from '../styles/Form';
import DropDownCategory from '../../DropDownCategory';

 class CreatePizzaItem extends Component {
    state = {
        title: 'Pepperoni',
        description: 'basic X',
        category: 'new',
        image: 'pepperoni.png',
        largeImage: 'pepperoni2.png',
        price: 1220,
    };
    handleChange = e => {
        const { name, type, value } = e.target;;
        console.log({name, type, value});
        const val = type === 'number' ? parseFloat(value) : value;
        this.setState({ [name]: val });
    };
  render() {
    return (
      <div>
        <Form onSubmit={(e) => {
            e.preventDefault();
            console.log(this.state);
        }}>
            <fieldset>
            <h2>Make a Pizza Item</h2>
            <label htmlFor="title">
            Title
                <input 
                type="text" 
                id="title" 
                name="title" 
                placeholder="title" 
                required
                onChange={this.handleChange}
                value={this.state.title}
                />
            </label>
            <DropDownCategory />
            <label htmlFor="price">
            Price
                <input 
                type="text" 
                id="price" 
                name="price" 
                placeholder="price" 
                required
                onChange={this.handleChange}
                value={this.state.price}
                />
            </label>
            <label htmlFor="description">
            Description
              <textarea 
                name="description"
                id="description"
                placeholder="Enter A Description"
                required
                value={this.state.description}
                onChange={this.handleChange}
                >
                </textarea>
            </label>
            </fieldset>
            <button type="submit">Submit</button>
        </Form>
      </div>
    )
  }
}
export default CreatePizzaItem;
export { CREATE_PIZZAITEM_MUTATION };

// const CREATE_PIZZAITEM_MUTATION = gql`

// `;