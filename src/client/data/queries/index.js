import gql from 'graphql-tag'

export const detailsQuery = gql`
  {
    details @client {
      showLastName
    }
  }
`
