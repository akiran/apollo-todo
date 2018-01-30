import React, { Component } from "react";
import gql from 'graphql-tag'
import {graphql, compose} from 'react-apollo'
import {detailsQuery} from '../data/queries'
import {toggleLastName} from '../data/mutations'

class App extends Component {
  render() {
    const {user, details: {showLastName}, loading} = this.props
    if (loading) return null
    console.log(this.props)
    return (
      <div>
        <button onClick={toggleLastName}>{showLastName ? 'Hide Last Name': 'Show Last Name'}</button>
        <div>First Name: {user.firstName}</div>
        {showLastName ? <div> Last Name: {user.lastName}</div> : null}
      </div>
    )
  }
}

const userQuery = gql`
  {
    user {
      id
      firstName
      lastName
    }
  }
`

export default compose(
  graphql(detailsQuery, {
    props: ({data: {details}}) => ({details})
  }),
  graphql(userQuery, {
    props: ({data: {user, loading}}) => ({user, loading})
  }),
)(App);
