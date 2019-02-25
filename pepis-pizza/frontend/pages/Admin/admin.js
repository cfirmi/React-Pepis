import styled from 'styled-components';
import AdminNav from '../../components/Admin/Navigation/AdminNav';

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

const Naver = styled.div`
  position: absolute;
  background: red;
`;
const OuterBox = styled.div`
  position: absolute;
  top: 0px; left: 80px;
  width: 100vw; height: 100%;
  background: red;
`;

const Admin = props => (
  <Naver>
    <AdminNav></AdminNav>
    <OuterBox>This is the content for everything</OuterBox>
  </Naver>
);

export default Admin;