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
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid whitesmoke;
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  width: 90vw;
  margin-left: 50%; margin-bottom: 50px;
  transform: translateX(-50%);
  height: 100%;
  label {
    display: block;
    margin: 1.5rem
  }
  input,
  textarea,
  select {
    display: block;
    width: 50%;
    margin-top:5px; margin-left: 50%;
    transform: translateX(-50%);
    padding: 0.5rem;
    font-size: 1.3rem;
    height: 40px;
    border-radius: 15px;
    border: 1px solid black;
    text-align: center;
    &:focus {
      outline: 0;
    }
  }
  button,
  input[type='submit'] {
    width: 40%;
    min-width: auto;
    background: ${props => props.theme.orange};
    color: white;
    border: 0;
    border-radius: 25px;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(to right, #ff3019 0%, #e2b04a 50%, #ff3019 100%);
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default Form;
