import React from 'react'
import {graphql} from 'react-apollo'
import Todo from './Todo'
import gql from 'graphql-tag'

class TodoList extends React.Component {
  render() {
    const {data: {todos}} = this.props
    return (
      <div>
        {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
      </div>
    )
  }
}

export const todosQuery = gql`
  {
    todos @client {
      id
      title
    }
  }
`

export default graphql(todosQuery)(TodoList)
