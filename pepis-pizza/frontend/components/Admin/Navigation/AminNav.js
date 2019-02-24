import styled from 'styled-components';
import Link from 'next/link';

const pizzaNavIcon = '../../../static/images/Admin/NavIcons/pizzaIcon.svg';
const subNavIcon = '../../../static/images/Admin/NavIcons/subIcon.svg';

const NavComp = styled.div`
  background: ${props => props.theme.blue};
  position: absolute;
  height: 100vh;
  width: 80px;
  margin: 0;
  top: 0px;
  ul {
    /* background: black; */
    margin-top: 50%;
    list-style: none;
    margin-left: -40px;
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
        <li>Drinks</li>
        <li>Subs</li>
        <li>Desserts</li>
        <li>Salads</li>
        <li>Wings and Things</li>
      </ul>
    </NavComp>
    <p>Admin Pages
      Looking at doing a vertical Nav on the left side
    </p>
  </div>
);

export default AdminNav;