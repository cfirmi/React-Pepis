import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

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
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.red};
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    background: red;
    color: white;
    border: 0;
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

 const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($email: String!, $name: String!, $password: String!) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
 `;
 
 export default class Signup extends Component {
  state = {
    name: '',
    password: '',
    email: '',
  }
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
   render() {
     return (
  <Mutation mutation={SIGNUP_MUTATION} variables={this.state}>
    {(signup, { error, loading }) => (
      <Form>
        <fieldset disabled={loading} aria-busy={loading}>
          <label htmlFor="email"> 
            Email
            <input 
              type="email" 
              name="email" 
              placeholder="email" 
              value={this.state.email} 
              onChange={this.saveToState} />
          </label>
          <label htmlFor="name">
            Name
            <input 
              type="text" 
              name="name" 
              placeholder="name" 
              value={this.state.name} 
              onChange={this.saveToState} />
          </label>
          <label htmlFor="password">
            Password
            <input 
              type="password" 
              name="password" 
              placeholder="password" 
              value={this.state.password} 
              onChange={this.saveToState}/>
          </label>
        </fieldset>
      </Form>)
     }
  </Mutation>
     )
   }
 }
 