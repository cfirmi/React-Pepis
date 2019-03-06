import Link from 'next/link';
import styled from 'styled-components';
import NavStyles from '../styles/NavStyles';

import { OrderOnlineButtonBig } from './OrderButton';

const PhoneButton = styled.div`
  background: red;
  height: 50px;
  width: 50px;
  margin-bottom: 20px;
  margin-left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;

const OrderOnlineComp = styled.div`
  background: url('../../static/images/Home/brick.jpg');
  max-width: 100%;
  /* border-radius: 55px; */
  margin-bottom: 50px;
  width: 100vw; height: 100%;
  margin-left: 50%;
  transform: translateX(-50%);
  @media (max-width: ${props => props.theme.mobileWidth1}) {
    background-size: 100vw;
  };
`;
const OrderOnline = () => (
  <OrderOnlineComp>
    <p style={{textAlign: 'center', fontSize: '65px', paddingTop: '50px', color: 'white', fontWeight: '800'}}>🍕ORDER ONLINE</p>
    <OrderOnlineButtonBig style={{cursor: 'pointer', borderRadius: '40px', width: '65vw', maxWidth: '400px'}}>LETS GET STARTED</OrderOnlineButtonBig>
    <p style={{textAlign: 'center', fontSize: '25px'}}>or</p>
   <PhoneButton src="" alt=""/>
  </OrderOnlineComp>
);
export default OrderOnline;