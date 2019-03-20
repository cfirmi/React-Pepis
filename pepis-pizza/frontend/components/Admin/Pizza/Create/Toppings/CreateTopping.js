import React, { Component } from 'react'
import styled from 'styled-components'
import Form from '../../Styles/Form'

const Item = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  line-height: 15px;
  padding: 2px;
`;

const Button = styled.label`
  background: blue;
  height: 100px;
  input {
    border: none;
  }
`;



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
  uploadFile = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'sickfits');
  
    const res = await fetch('https://api.cloudinary.com/v1_1/wesbostutorial/image/upload', {
      method: 'POST',
      body: data,
    });
    const file = await res.json();
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url,
    });
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
          <Button htmlFor="file">
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
              <img width="230" height="230" src={this.state.image} alt="Upload Preview" />
              )}
          </Button>

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