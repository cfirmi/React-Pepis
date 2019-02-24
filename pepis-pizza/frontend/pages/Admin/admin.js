import styled from 'styled-components';
import AdminNav from '../../components/Admin/Navigation/AminNav';

const NavComp = styled.div`
  position: absolute;
  background: red;
  height: 100vh;
  width: 300px;
  margin: 0;
  top: 0px;
  ul {
    margin-top: 100px;
    background: black;
    list-style: none;
    margin-left: -40px;
  }
  li {
    line-height: 50px;

    height: 50px;
    margin: 4px 5px;
    background: purple;
  }
`;

const Admin = props => (
  <div>
    <AdminNav></AdminNav>
  </div>
);

export default Admin;