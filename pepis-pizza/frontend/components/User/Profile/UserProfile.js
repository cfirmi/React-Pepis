import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import UserProfile from './UserProfile'

const UserProfilePage = props =>(
  <div>
   <UserProfile />
  </div>

);

export default UserProfilePage;