import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import Router from 'next/router'
import Link from 'next/link'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { CURRENT_USER_QUERY } from '../User/User'

const backbutton = '../../static/images/backbtn.svg';

 const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
    }
  }
 `;
 
 export default class SigninAdmin extends Component {
  state = {
    password: '',
    email: '',
    name: '',
  }
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
   render() {
     return (
      <div>
        <BackNav>
          <Link href="/index">
          <a>
            <BackButton src={backbutton} alt="backbtn"/>
          </a>
          </Link>
        </BackNav>

        <Mutation 
        mutation={SIGNIN_MUTATION} 
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
          {(signin, { error, loading }) => (
            <Form 
            method="post"
            onSubmit={ async e => {
              e.preventDefault();
              await signin();
              this.setState({email: '', password: ''})
              Router.push({
                pathname: '/Admin/admin'
              })
            }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="email"> 
                  <p>
                    Email
                  </p>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="email" 
                    value={this.state.email} 
                    onChange={this.saveToState} />
                </label>
                <label htmlFor="password">
                  <p>
                    Password
                  </p>
                  <input 
                    type="password" 
                    name="password" 
                    placeholder="password" 
                    value={this.state.password} 
                    onChange={this.saveToState}/>
                </label>
                <button type="submit">Sign In</button>
              </fieldset>
            </Form>)
          }
        </Mutation>
        <p style={{textAlign: "center", color: "#FF7000"}}>OR</p>
        <SignInLink> 
          <Link href="/signup">
          <a>
            Sign Up 🍕  
          </a>
          </Link>
          <Link href="/forgotpassword">
          <a>
            Forgot Password 
          </a>
          </Link>
        </SignInLink>
      </div>
     )
   }
 }
 
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
  label {
    display: block;
    margin-bottom: 1rem;
    p {
      color: whitesmoke;
      width: 50%;
      margin-left: 25%;
      margin-bottom: -5px;
      /* background: red; */
      /* transform: translateX(-50%); */
    }
  }
  input,
  textarea,
  select {
    margin-left: 50%;
    transform: translateX(-50%);
    display: block;
    background: ${props => props.theme.black};
    width: 50%;
    color: white;
    padding: 0.5rem;
    font-size: 1.95rem;
    letter-spacing: 0.65px;
    font-weight: 200;
    border: transparent;
    border-bottom: 1px solid ${props => props.theme.grey};
    &:focus {
      outline: 0;
      border-bottom: 1px solid ${props => props.theme.offWhite};
    }
  
  }
  button,
  input[type='submit'] {
    width: auto;
    background: ${props => props.theme.orange};
    margin-left: 50%;
    transform: translateX(-50%);
    color: white;
    border: 20px;
    font-size: 1.5rem;
    cursor: pointer;
    font-weight: 400;
    white-space: nowrap;
    border-radius: 20px;
    padding: 1rem 10rem;
  }
  fieldset {
    border: 20px;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      margin-top: 10vh;
      margin-left: 50%;
      transform: translateX(-50%);
      border-radius: 5px;
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

 const BackNav = styled.div`
  height: 50px;
  /* background: red; */
 `;

 const BackButton = styled.img`
  /* background: blue; */
  margin-left: 20px; margin-top: 15px;
  width: 20px; height: 20px; 
 `;
 const SignInLink = styled.p`
  font-weight: 200;
  letter-spacing: 0.6px;
  text-align: center;
    
  a {
    line-height: 15px;
    padding: 10px 15px;
      ::selection {
    background: ${props => props.theme.orange}; /* WebKit/Blink Browsers */
    }
    ::-moz-selection {
      background: ${props => props.theme.orange}; /* Gecko Browsers */
    }
  }
 `;