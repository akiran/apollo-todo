import {todosQuery, detailsQuery} from '../queries'
import uuid from 'uuid'

export default {
  Mutation: {
    toggleLastName: (_, variables, { cache }) => {
      const {details} = cache.readQuery({query: detailsQuery})
      const data = {
        details: {
          __typename: 'Details',
          showLastName: !details.showLastName
        },
      };
      cache.writeData({ data });
      return null
    },
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
