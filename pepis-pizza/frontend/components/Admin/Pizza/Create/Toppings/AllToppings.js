import styled from 'styled-components'
import ItemTopping from './ItemTopping'
import CreateTopping from './CreateTopping'

 const Outerbox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 230px);
  grid-template-rows: repeat(auto-fill, 300px);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  width: 100vw;
  justify-content: center;
 `;

 const Title = styled.div`
  width: 100%;
  margin-left: 40px;
  font-size: 3rem;
  font-weight: 600; 
`;

const allToppings = () => (
  <div>
    <Title>ALL TOPPINGS</Title>
  <Outerbox>
    <ItemTopping />
    <ItemTopping />
    <ItemTopping />
    <ItemTopping />
    <ItemTopping />
    <ItemTopping />
    <ItemTopping />
  </Outerbox>
  </div>
);

export default allToppings;