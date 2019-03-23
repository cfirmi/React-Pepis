import React, { Component } from 'react'
import { Mutation, Query } from 'react-apollo'
import gql from 'graphql-tag'
import Error from '../../../../ErrorMessage'
import Form, { ImageLabel, NameLabel, PriceLabel, SubmitButton } from '../../../styles/Form'

const SINGLE_TOPPINGITEM_QUERY = gql`
  query SINGLE_TOPPINGITEM_QUERY($id: ID!) {
    toppingItem(where: { id: $id }) {
      id
      name
      price
      image
    }
  }
`;
const UPDATE_TOPPINGITEM_MUTATION = gql`
  mutation UPDATE_TOPPINGITEM_MUTATION(
     $id: ID!,
     $name: String,
     $price: Int, 
    ) {
    updateToppingItem(
      id: $id
      name: $name
      price: $price
    ) {
      id
      name 
      price
    }
  }
`;

export default class updateTopping extends Component {
  state = { };
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  updateToppingItem = async (e, updateToppingItemMutation) => {
    e.preventDefault();
    console.log(this.state);
    const res = await updateToppingItemMutation({
      variables: {
        id: this.props.id,
        ...this.state,
      }
    })
    console.log('Updated')
  }
  render() {
    return (
    <Query query={SINGLE_TOPPINGITEM_QUERY} 
      variables={{
        id: this.props.id
      }}
    >
      {({data, loading}) => {
        if(loading) return <p>Loading</p>
        if(!data.toppingItem) return <p>No Item found for ID {this.props.id}</p>
        return (
          <Mutation 
            mutation={UPDATE_TOPPINGITEM_MUTATION}
            variables={this.state}
          >
            {(updateToppingItem, {loading, error}) => (
              <Form onSubmit={ e => this.updateToppingItem(e, updateToppingItem)}>
                <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <h2>Update Toppings</h2>
                    {/* <ImageLabel htmlFor="file" className="custom-file-upload">
                      Select the image topping
                      <input
                        type="file"
                        id="file"
                        name="file"
                        placeholder="Upload an image"
                        required
                        onChange={this.uploadFile}
                        />
                      {data.toppingItem.image && (
                        <img width="230" height="230" src={data.toppingItem.image} alt="Upload Preview" />
                        )}
                    </ImageLabel> */}
                    <NameLabel htmlFor="name">
                      Name
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Topping name"
                        required
                        defaultValue={data.toppingItem.name}
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
                        defaultValue={data.toppingItem.price}
                        onChange={this.handleChange}
                        />
                    </PriceLabel>
          
                    <SubmitButton type="submit">Update</SubmitButton>
                  </fieldset>  
                </Form>
              )}
            </Mutation>
          )
        }}
      </Query>
    )
  }
}

export { UPDATE_TOPPINGITEM_MUTATION };