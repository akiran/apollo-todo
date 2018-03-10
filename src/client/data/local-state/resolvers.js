import gql from 'graphql-tag'
import uuid from 'uuid'

const todosQuery = gql`
  {
    todos @client {
      id
      title
    }
  }
`

export default {
  Mutation: {
    addTodo: (_, variables, { cache }) => {
      console.log('var', variables)
      const {todos} = cache.readQuery({query: todosQuery})
      const data = {
        todos: [{
          id: uuid.v4(),
          title: variables.title,
          __typename: 'Todo'
        }, ...todos]
      };
      cache.writeData({ data });
      return null
    }
  }
}
