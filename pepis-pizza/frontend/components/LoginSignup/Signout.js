import React, { Component } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { CURRENT_USER_QUERY } from '../User/User';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const Signout = () =>(
  <div>
    <Mutation 
    mutation={SIGN_OUT_MUTATION}
    refetchQueries={CURRENT_USER_QUERY}
    >
      {(signout) => (
        <Link  href="/index">
          <a>
            <button onClick={signout}>Sign out</button>
          </a>
        </Link>
      )}
    </Mutation>
  </div>
);

export default Signout;