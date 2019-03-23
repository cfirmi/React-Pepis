import React, { Component } from 'react'
import styled from 'styled-components'
import ItemTopping from './ItemTopping'
import CreateTopping from '../../Create/Toppings/CreateTopping'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    toppingItems {
      id
      name
      price
      image
      largeImage
    }
  }
`;
 const Outerbox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 240px);
  grid-template-rows: repeat(auto-fit, 360px);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  width: 100vw;
  justify-content: center;
 `;

 const Title = styled.div`
  width: 100%;
  margin-left: 40px;
  font-size: 2.6rem;
  font-weight: 600; 
`;

class AllToppings extends Component {
  render() {
    return (
      <div>
        <div>
          <CreateTopping />
        </div>
        <Title>ALL TOPPINGS</Title>
          <Query query={ALL_ITEMS_QUERY}>
            {({data, error, loading }) => {
              if(error) return <p>Error: {error.message}</p>;
              if(loading) return <p>Loading...</p>;
              return (
                <Outerbox>
                  {data.toppingItems.map(toppingItem => <ItemTopping key={toppingItem.id} toppingItem={toppingItem} /> 
                  )}
                </Outerbox>
              )
            }}
          </Query>
      </div>
    );
  }
}
export default AllToppings;