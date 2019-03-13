import styled from 'styled-components'
import AdminNav from '../../components/Admin/Navigation/AdminNav'
import PleaseSignin from '../../components/LoginSignup/PleaseSignin'
import PizzaComps from '../../components/Admin/Pizza/PizzaComps'

const CreateSection = styled.div`
  background: red;
`;
const PizzaAdmin = () => (
  <div style={{marginTop: '100px'}}>
   <AdminNav />
    <CreateSection>
      <PizzaComps />
    </CreateSection>
  </div>
);

export default PizzaAdmin;