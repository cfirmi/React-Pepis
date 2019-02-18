import styled from 'styled-components';
import Header from '../components/Header';

const PagesOuterBox = styled.div`
  width: 100vw;
  overflow-x: hidden; 
  background: red;
`;
const AllContent = styled.div`
  width: 100vw;
  background: red;
  margin-top: 12vh; 
  @media (max-width: ${props => props.theme.maxWidth}) {
    margin-top: 0vh;
  };
`;
const ExampleData = styled.div`
  height: 500px;
  background: green;
`;



const Home = () => (
  <PagesOuterBox>
    <Header />
    <AllContent>
      <div>
        <ExampleData>
          this is sample1
        </ExampleData>
        <ExampleData>
          this is sample2
        </ExampleData>
      </div>
    </AllContent>
  </PagesOuterBox>
);

export default Home;
