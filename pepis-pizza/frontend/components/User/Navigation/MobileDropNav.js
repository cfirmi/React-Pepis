import React from 'react';
import Link from 'next/link';
import { Query} from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const Logo = '../../static/images/pepisLogo.png';

const LOCAL_STATE_QUERY = gql`
  query {
    dropOpen @client
  }
`;
const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleDrop @client
  }
`;

const MobileDropNav = () => (
  <Query query={LOCAL_STATE_QUERY}> 
  {({data}) => (
    <NavDropStyle open={data.dropOpen}>
      <LogoBox>
        <Link  href="/index">
          <a>
            <img src={Logo} alt=""/>
          </a>
        </Link>
        </LogoBox>
        <NavBox>
          <Link href='/pizza'>
            <a>
              <NavItems>
                    Pizza
              </NavItems>
            </a>
          </Link>
          <Link href='/subs'>
            <a>
              <NavItems>
                    Subs
              </NavItems>
            </a>
          </Link>
          <Link href='/wingThings'>
            <a>
              <NavItems>
                    Wings & Things
              </NavItems>
            </a>
          </Link>
          <Link href='/salads'>
            <a>
              <NavItems>
                    Salads
              </NavItems>
            </a>
          </Link>
          <Link href='/desserts'>
            <a>
              <NavItems>
              desserts
              </NavItems>
            </a>
          </Link>
          <Link href='/drinks'>
            <a>
              <NavItems>
              drinks
              </NavItems>
            </a>
          </Link>
        </NavBox>
      </NavDropStyle>
        )}
      </Query>
  );


export default MobileDropNav;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };

const LogoBox = styled.div`
  position:fixed;
  top: 10px;
  height: 80px; width: 80px;
  img {
  height: 80px;width: 67px;
  }
`;

const NavDropStyle = styled.div`
  background: ${props => props.theme.black};;
  position: fixed;
  padding: 20px;
  top: 0px; right: 0; bottom: 0px; left: 0px;
  z-index: 100;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  ${props => props.open && `transform: translateX(0);`};
`;

const NavItems = styled.div`
  margin-left: 50%; transform: translateX(-50%);
  text-align: left;
  border-bottom: 0.5px solid rgba(255,255,255,0.49);
  width: 90%;
  line-height: 43px;
  color: white;
  font-weight: 300;
  letter-spacing: 0.55px;
  :hover {
    color: ${props => props.theme.orange};
  }
`;

const NavBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  width: 100%;
  margin-left: 50%;
  margin-top: 100px;
  transform: translateX(-50%);  
`;