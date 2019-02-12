import styled from 'styled-components';
const ToggleDropButton = styled.div`
`;

const InputCheckBox = styled.input`
  display: block;
  width: 20px;
  height: 32px;
  position: absolute;
  top: 5px;
  left: 6px;
  background-color: #4CAF50;
  -ms-transform: scale(2.5); /* IE */
  -moz-transform: scale(2.5); /* FF */
  -webkit-transform: scale(2.5); /* Safari and Chrome */
  
  cursor: pointer;
  
  opacity: 0; /* hide this */
  z-index: 220; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;
  input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}
input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}
input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}
`;

const NavHamburger = styled.div`
  position: fixed;
  right: 30px;
  height: 30px; width: 33px;
  /* margin-right: 20px; */
  margin-top: 18px;
  color: white;
  z-index: 200;
  /* Change this if text is not on the right hand side of the mobile nav */
  :hover {
    color: green;
  }
span
{
  display: block;
  width: 33px;
  height: 3px;
  margin-top: 10px;
  margin-bottom: 5px;
  position: relative;
  z-index: 210;
  background: #fff;
  border-radius: 5px;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}
input:checked ~ span:first-child
{
  /* transform-origin: 0% 0%; */
  transform: rotate(45deg) translate(0, -1px);
}
/* input:checked ~ span:nth-last-child(2)
{
  transform-origin: 0% 100%;
} */
 input:checked ~ span:nth-last-child(1)
{
  /* opacity: 0; */
  transform: rotate(-45deg) translate(-3px, 6px);
  /* transform: rotate(0deg) scale(0.2, 0.2); */
}
 input:checked ~ span:nth-last-child(2)
{
  transform: rotate(45deg) translate(6px, -2px);
}
`;


export default ToggleDropButton;
export {NavStyles, InputCheckBox, NavHamburger};