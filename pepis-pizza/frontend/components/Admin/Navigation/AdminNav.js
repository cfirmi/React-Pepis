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
  background: ${props => props.theme.blue};
  position: absolute;
  /* height: 100vh; */
  width: 80px;
  margin: 0;
  top: 0px;
  ul {
    /* background: black; */
    list-style: none;
    margin-left: -40px;
    margin-top: 50%;
  }
  li {
    /* background: purple; */
    line-height: 70px;
    height: 70px;
    margin: 10px 10px;
    cursor: pointer;
    img {
      margin-left: 50%;
      transform: translateX(-50%);
      height: 50px;
      width: 60px;
    }
    :hover {
      border-color: darkblue;
      box-shadow: ${props => props.theme.bs2};
    }
  }
`;

const AdminNav = props => (
  <div>
    <NavComp>
      <ul>
        <Link href="/pizzaCreate">
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
    <p>Admin Pages
      Looking at doing a vertical Nav on the left side
    </p>
  </div>
);

export default AdminNav;