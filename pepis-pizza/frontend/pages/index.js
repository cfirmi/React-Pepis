import styled from 'styled-components';
import Header from '../components/User/Header';
import OrderOnline from '../components/User/Home/OrderOnline';
import Specials from '../components/User/Home/Specials';
import ToSignupComp from '../components/User/Home/ToSignupComp';

const PagesOuterBox = styled.div`
  /* background: red; */
  width: 100vw;
  overflow-x: hidden; 
`;
const AllContent = styled.div`
  width: 100%;
  margin-top: 12vh; 
  @media (max-width: ${props => props.theme.maxWidth}) {
    margin-top: 0vh;
  };
`;
const ExampleData = styled.div`
  background: green;
  height: 500px;
`;



const Home = () => (
  <PagesOuterBox>
    <Header />
    <AllContent>
      <div>
      <ToSignupComp />
        <OrderOnline></OrderOnline>
        <Specials></Specials>
      </div>
    </AllContent>
  </PagesOuterBox>
);

export default Home;
