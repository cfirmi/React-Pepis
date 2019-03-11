import styled from 'styled-components';
import AdminNav from '../../components/Admin/Navigation/AdminNav';
import PleaseSignin from '../../components/LoginSignup/PleaseSignin';
import Pizza from './pizza';

const NavComp = styled.div`
  background: red;
  position: absolute;
  height: 100vh;
  width: 300px;
  margin: 0;
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
  width: 100vw;
`;
const OuterBox = styled.div`
  position: absolute;
  top: 0px; left: 80px;
  width: 100vw; height: 100%;
  background: red;
`;

const AdminHomePage = props => (
  <Naver>
      <PleaseSignin>
        <AdminNav />
        <Pizza />
      </PleaseSignin>
  </Naver>
);

export default AdminHomePage;