import Link from 'next/link';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import { TOGGLE_CART_MUTATION } from './MobileDropNav';
import {NavHamburger, InputCheckBox} from '../styles/ToggleDropButton';

// Logo
const Logo = '../../static/images/Logo.svg';

const SmallMobileNav = props => (
      <NavStyles> 
        <NavHamburger id="menuToggle">
          <Mutation mutation={TOGGLE_CART_MUTATION}>
            {(toggleCart) => (
              <InputCheckBox type="checkbox" onClick={toggleCart} />
            )}
          </Mutation>
            <span></span>
            <span></span>
        </NavHamburger>
        <Link href='/homepage'>
          <a>
            <StyleLogo src={Logo} alt=""/>
          </a>
        </Link>
      </NavStyles>
);

export default SmallMobileNav;
const NavStyles = styled.div`
  /* background: blue; */
  position: relative;
  width: 100vw;  height: 50px;
  line-height: 66px;
  ${props => props.open && `transform: translateX(0);`};
`;

const StyleLogo = styled.img`
  position: absolute;
  height: 50px;
  top: 0vh; left: 20px;
  border-radius: 10px;
  box-shadow: -0px -0px 5px rgba(106, 106, 106, .25);

`;