import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  background: rgba(0, 0, 0, 0.30);
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.5;
  font-weight: 600;
  border-radius: 20px;
  width: 86vw; height: 100%;
  margin-left: 50%; margin-bottom: 50px;
  transform: translateX(-50%);
  label {
    display: inline-block;
    margin: 1.0rem;
    text-align: left;
    font-weight: 200;
    letter-spacing: 1.5px;
    margin-top: 20px;
  }
  input[type='text'],
  [type='number'] 
  {
   border-radius: 7px;
   width: 100%;
   height: 50px;
   background-color: #fff;
   font-weight: 200;
   color: #909090;
   border: none;
   font-size: 2.5rem;
   padding-left: 20px;
 }
  fieldset {
    border: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr ;
    height: 100%;
    max-width: 600px;
    margin-top: 110px; margin-left: 50%;
    transform: translateX(-50%);
    input[type='file'] {
    display: none;
    }
    .custom-file-upload {
      margin-top: 30px; margin-left: 50%;
      transform: translateX(-50%);
      text-align: center;
      /* border: 1px solid #ccc; */
      display: inline-block;
      padding: 6px 12px;
      cursor: pointer;
    }
    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      margin-left: 50%;
      transform: translateX(-50%);
      width: 80vw;
      border-radius: 5px;
      left: 20px; right: 20px;
      content: '';
      background-image: linear-gradient(to right, #ff3019 0%, #e2b04a 50%, #ff3019 100%);
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

const ImageLabel = styled.label`
 /* background: red; */
 grid-column: 2 / 3;
 grid-row: 1 / 6; 
 max-width: 300px;
 border: 1px solid grey;
 input[type='file'] {
  display: block;
  /* background-color: green; */
 }
 img {
    display: block;
    margin-top: 10px;
    margin-left: 50%;
    transform: translateX(-50%);
    padding: 20px;
  }
`;
const NameLabel = styled.label`
 /* background: lightblue; */
 grid-column: 3 / 6;
 grid-row: 1 / 3; 
 text-align: left;

`;
const PriceLabel = styled.label`
 /* background: purple; */
  grid-column: 3 / 6;
  grid-row: 2 / 4; 
`;

const SubmitButton = styled.button`
 background: #036CF0;
 border: none;
 grid-column: 3;
 grid-row: 4;
 height: 45px; 
 /* width: 200px; */
 width: 70%;
 border-radius: 4px;
 margin-left: 50%;
 transform: translateX(-50%);
 justify-self: start;
 align-self: end;
 color: white;
 font-size: 2.5rem;
 font-weight: 400;

`;

export default Form;
export { ImageLabel, NameLabel, PriceLabel, SubmitButton}