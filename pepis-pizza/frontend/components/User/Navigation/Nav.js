import Link from 'next/link';
import styled from 'styled-components';
import NavStyles from '../styles/NavStyles';
import User from '../User';

const pepisLogo = '../static/images/pepisLogo.png';

const Image = styled.img`
  height: 80px;
  ::selection {
      background: ${props => props.theme.orange}; /* WebKit/Blink Browsers */
    }
    ::-webkit-selection {
      background: ${props => props.theme.orange}; 
    }
    ::-moz-selection {
      background: ${props => props.theme.orange}; 
    }
`;

const Nav = () => (
  <User>
    {({data: { me } }) => (
      <NavStyles>
      <Link href="/pizzas">
          <a>Pizza</a>
      </Link>
      <Link href="/subs">
          <a>Subs</a>
      </Link>
      <Link href="/wingThings">
          <a>Wings & Things</a>
      </Link>
      <Link href="/index">
          <a><Image src={pepisLogo} alt=""/></a>
      </Link>
      <Link href="/salads">
          <a>Salads</a>
      </Link>
      <Link href="/desserts">
          <a>Desserts</a>
      </Link>
      <Link href="/drinks">
          <a>Drinks</a>
      </Link>
      {me && (
        <Link href="/account">
        <a>
          {me.name}
        </a>
      </Link>
      )}
    </NavStyles>
    )}
  </User>
    
);
export default Nav;