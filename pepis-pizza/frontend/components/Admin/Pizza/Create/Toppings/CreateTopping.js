import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Error from '../../../../ErrorMessage'
import Form, { ImageLabel, NameLabel, PriceLabel, SubmitButton } from '../../../styles/Form'

const CREATE_TOPPINGITEM_MUTATION = gql`
  mutation CREATE_TOPPINGITEM_MUTATION(
     $name: String!,
     $price: Int!, 
     $image: String, 
     $largeImage: String
    ) {
    createToppingItem(
      name: $name
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

export default class createTopping extends Component {
  state = {
    name: '',
    image: '',
    largeImage: '',
    price: 0,
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
    data.append('upload_preset', 'pepispizza');
  
    const res = await fetch('https://api.cloudinary.com/v1_1/christian-firmi/image/upload', {
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
    <Mutation 
      mutation={CREATE_TOPPINGITEM_MUTATION}
      variables={this.state}
    >
      {(createToppingItem, {loading, error}) => (
        <Form
        onSubmit={async e => {
          e.preventDefault();
          const res = await createToppingItem();
          console.log(res)
        }}
        >
        <Error error={error} />
 
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Create Toppings</h2>
              <NameLabel htmlFor="name">
                Name
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Topping name"
                  required
                  value={this.state.name}
                  onChange={this.handleChange}
                  />
              </NameLabel>

              <PriceLabel htmlFor="price">
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
              </PriceLabel>
              <ImageLabel htmlFor="file" className="custom-file-upload">
                Select the image topping
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
              </ImageLabel>
              <SubmitButton type="submit">Submit</SubmitButton>
            </fieldset>  
        </Form>
      )}
    </Mutation>
    )
  }
}

export { CREATE_TOPPINGITEM_MUTATION };