import gql from 'graphql-tag'

export const detailsQuery = gql`
  {
    details @client {
      showLastName
    }
  }
`

export const todosQuery = gql`
  {
    todos @client {
      id
      title
    }
  }
`
