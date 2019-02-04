import Link from 'next/link';
import styled from 'styled-components';
import NavStyles from './styles/NavStyles';

const pepisLogo = '../static/pepisLogo.png';


const Image = styled.img`
  height: 80px;
`;

const Nav = () => (
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
    </NavStyles>
);
export default Nav;