import styled from 'styled-components'
import Form from '../../Styles/Form'

const Item = styled.div`
  /* background: purple; */
  height: 250px;
  text-align: center;
  line-height: 15px;
  padding: 2px;
`;

import React, { Component } from 'react'

export default class createTopping extends Component {
  state = {
    title: 'Pepperoni',
    image: 'dog.jpg',
    largeImage: 'large-dog.jpg',
    price: 1000,
  };
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  render() {
    return (
      <Form
        onSubmit={async e => {
          e.preventDefault();
        }}
      >
        {/* <fieldset disabled={} aria-busy={loading}> */}
        <Item>
          <fieldset>
          <label htmlFor="file">
            Image
            <input
              type="file"
              id="file"
              name="file"
              placeholder="Upload an image"
              required
              onChange={this.uploadFile}
              />
            {this.state.image && (
              <img width="200" src={this.state.image} alt="Upload Preview" />
              )}
          </label>

            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                required
                value={this.state.title}
                onChange={this.handleChange}
                />
            </label>

            <label htmlFor="price">
                  Price
                  <input
                    type="number"
                    id="price"
                    name="price"
                    placeholder="Price"
                    required
                    value={this.state.price}
                    onChange={this.handleChange}
                    />
                </label>
                <button type="submit">Submit</button>
          </fieldset>  
        </Item>
      </Form>
    )
  }
}