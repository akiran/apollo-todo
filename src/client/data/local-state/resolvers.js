import gql from 'graphql-tag'
import uuid from 'uuid'

const todosQuery = gql`
  {
    todos @client {
      id
      title
      completed
    }
  }
`

export default {
  Mutation: {
    addTodo: (_, variables, { cache }) => {
      const {todos} = cache.readQuery({query: todosQuery})
      const data = {
        todos: [{
          id: uuid.v4(),
          title: variables.title,
          completed: false,
          __typename: 'Todo'
        }, ...todos]
      };
      cache.writeData({ data });
      return null
    },
    deleteTodo: (_, variables, { cache }) => {
      const {todos} = cache.readQuery({query: todosQuery})
      const data = {
        todos: todos.filter(todo => todo.id !== variables.id)
      };
      cache.writeData({ data });
      return null
    },
    toggleTodo: (_, variables, { cache }) => {
      const {todos} = cache.readQuery({query: todosQuery})
      const data = {
        todos: todos.map(todo => ({
          ...todo,
          completed: todo.id === variables.id ? !todo.completed : todo.completed
        }))
      };
      cache.writeData({ data });
      return null
    },
  }
}
