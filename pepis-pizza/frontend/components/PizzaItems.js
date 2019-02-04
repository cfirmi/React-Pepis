import React, { Component } from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const Center = styled.div`
  text-align: center;
`;
const ItemList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

 class PizzaItems extends Component {
  render() {
    return (
      <Center>
        <p>THis is the Pizza component where all PizzaItems will be called</p>
        <Query query={ALL_PIZZAITEMS_QUERY}>
          {({ data, error, loading }) => {
            if(loading) return <p>Loading...</p>;
            if(error) return <p>{error.message}...</p>;
            return <ItemList>{data.productItems.map(productItems =><div> <p>{productItems.title}</p><p>{productItems.description}</p></div>)}</ItemList>;
          }}
        </Query>
      </Center>
    )
  }
}
export default PizzaItems;
export { ALL_PIZZAITEMS_QUERY };

const ALL_PIZZAITEMS_QUERY = gql`
  query ALL_PIZZAITEMS_QUERY {
    productItems {
      title
      description
      price
      image
      largeImage
    }
  }
`;
