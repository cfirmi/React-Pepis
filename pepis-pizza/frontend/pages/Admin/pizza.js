import styled from 'styled-components';
import AdminNav from '../../components/Admin/Navigation/AdminNav';

const PizzaSizes = styled.div`
  background: red;
`;
const PizzaAdmin = () => (
  <div style={{marginTop: '100px'}}>
   <AdminNav />
    <PizzaSizes> this is where pizza sizes will be called to</PizzaSizes>
  </div>
);

export default PizzaAdmin;