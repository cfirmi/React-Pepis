import styled from 'styled-components'

const Item = styled.div`
  background: black;
  height: 300px;
  width: 100%;
  text-align: center;
  line-height: 15px;
`;
const ImageBox = styled.div`
  background: purple;
  height: 100px;
  width: 100px;
  margin-top: 10px; margin-left: 50%;
  transform: translateX(-50%);
`;
const NameBox = styled.p`
  font-size: 16px;
  text-transform: capitalize;
`;
const PriceBox = styled.p`
  font-size: 16px;
  font-weight: 200;
  line-height: 20px;
  letter-spacing: 2px;
`;

const price = '2.50'
const itemTopping = () => (
  <Item>
    <ImageBox> select an Image</ImageBox>
    <NameBox>Pepperoni</NameBox>
    <PriceBox> ${`${price}`}</PriceBox>
  </Item>
);

export default itemTopping;