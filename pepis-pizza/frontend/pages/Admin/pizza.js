import styled from 'styled-components'
import AdminNav from '../../components/Admin/Navigation/AdminNav'
import SizeItem from '../../components/Admin/Pizza/Create/SizeItem'
import StyleItem from '../../components/Admin/Pizza/Create/StyleItem';

const CreateSection = styled.div`
  background: red;
`;
const PizzaAdmin = () => (
  <div style={{marginTop: '100px'}}>
   <AdminNav />
    <CreateSection>
      <SizeItem />
      <StyleItem />
    </CreateSection>
  </div>
);

export default PizzaAdmin;