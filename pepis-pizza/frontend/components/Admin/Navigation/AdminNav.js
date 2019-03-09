import styled from 'styled-components';
import Link from 'next/link';

const pizzaNavIcon = '../../../static/images/Admin/NavIcons/pizzaIcon.svg';
const subNavIcon = '../../../static/images/Admin/NavIcons/subIcon.svg';
const drinkNavIcon = '../../../static/images/Admin/NavIcons/drinkIcon.svg';
const dessertNavIcon = '../../../static/images/Admin/NavIcons/dessertIcon.svg';
const saladNavIcon = '../../../static/images/Admin/NavIcons/saladsIcon.svg';
const wingsNavIcon = '../../../static/images/Admin/NavIcons/wings&Icon.svg';
const couponNavIcon = '../../../static/images/Admin/NavIcons/couponIcon.svg';
const locationNavIcon = '../../../static/images/Admin/NavIcons/locationIcon.png';
const openNavIcon = '../../../static/images/Admin/NavIcons/openIcon.png';

const NavComp = styled.div`
  position: absolute;
  background: black;
  width: 100vw;
  top: 0px;
  z-index: 2;
  ul {
    display: flex;
    justify-content: space-around;
  }
  li {
    /* background: purple; */
    display: inline-block;
    line-height: 70px;
    height: 70px; 
    border-radius: 30px;
    cursor: pointer;
    img {
      margin-top: 25%; margin-left: 50%; 
      transform: translateX(-50%);
      height: 40px;
      width: 40px;
      transition: 0.5s ease-in;
      border: 1px solid transparent;
    }
  }
`;

const AdminNav = props => (
  <div>
    <NavComp>
      <ul>
        <Link href="/Admin/pizza">
          <li><img src={pizzaNavIcon} alt=""/></li>
        </Link>
        <Link href="/pizzaCreate">
          <li><img src={subNavIcon} alt=""/></li>
        </Link>
        <Link href="/pizzaCreate">
          <li><img src={drinkNavIcon} alt=""/></li>
        </Link>
        <Link href="/pizzaCreate">
          <li><img src={dessertNavIcon} alt=""/></li>
        </Link>
        <Link href="/pizzaCreate">
          <li><img src={saladNavIcon} alt=""/></li>
        </Link>
        <Link href="/pizzaCreate">
          <li><img src={wingsNavIcon} alt=""/></li>
        </Link>
        <Link href="/pizzaCreate">
          <li><img src={couponNavIcon} alt=""/></li>
        </Link>
        <Link href="/pizzaCreate">
          <li><img src={openNavIcon} alt=""/></li>
        </Link>
        <Link href="/pizzaCreate">
          <li><img src={locationNavIcon} alt=""/></li>
        </Link>

      </ul>
    </NavComp>
  </div>
);

export default AdminNav;