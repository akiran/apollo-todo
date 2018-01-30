import gql from 'graphql-tag'
import client from '../apollo-client'

export const TOGGLE_LAST_NAME = gql`
  mutation toggleLastName($flag: Boolean) {
    toggleLastName(flag: $flag) @client
  }
`;

export function toggleLastName() {
  client.mutate({
    mutation: TOGGLE_LAST_NAME,
  })
}
