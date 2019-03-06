import Link from 'next/link';
import styled from 'styled-components';
import NavStyles from '../styles/NavStyles';

const SpecialComp = styled.div`
  background: blue;
`;


const Specials = () => (
  <SpecialComp>
    <div>TEXT FOR THE TITLE</div>
    <div>TEXT FOR THE PRICE</div>
    <button>ORDER NOW</button>
    <img src="" alt=""/>
  </SpecialComp>
);
export default Specials;