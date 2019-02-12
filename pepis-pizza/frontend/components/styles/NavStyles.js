import styled from 'styled-components';

const NavStyles = styled.ul`
  margin: 0;
  padding: 0 4vw;
  display: flex;
  justify-content: space-around;
  /* justify-self: end; */
  width: 100vw;
  font-size: 1.3rem;
  letter-spacing: 0.4px;
  background: ${props => props.theme.black};
  a,
  button {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.8px;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    color: white;
      :hover {
        color: grey;
        transition: 0.25s ease-in-out;
      }
    }
    a {
      color: white;
      height: 100px;
      text-align: center;
      padding: 10px 15px;
      ::selection {
      background: ${props => props.theme.orange}; /* WebKit/Blink Browsers */
    }
    ::-webkit-selection {
      background: ${props => props.theme.orange}; 
    }
    ::-moz-selection {
      background: ${props => props.theme.orange}; 
    }
    }
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
    &:before {
      content: '';
      width: 2px;
      height: 10%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 20px;
      bottom: 0;
    }
    &:after {
      height: 2px;
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      color: #FF5D00;
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }

`;

export default NavStyles;
