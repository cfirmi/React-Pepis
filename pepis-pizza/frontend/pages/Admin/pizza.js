import styled from 'styled-components'
import AdminNav from '../../components/Admin/Navigation/AdminNav'
import PleaseSignin from '../../components/LoginSignup/PleaseSignin'
import AllToppings from '../../components/Admin/Pizza/Create/Toppings/AllToppings'

const ToppingSection = styled.div`
  /* background: red; */
`;
const PizzaAdmin = () => (
  <div style={{height: '100%', marginTop: '100px'}}>
   <AdminNav />
    <ToppingSection>
      <AllToppings />
    </ToppingSection>
  </div>
);

export default PizzaAdmin;