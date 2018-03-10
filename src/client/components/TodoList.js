import React from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import Todo from './Todo'

class TodoList extends React.Component {
  render() {
    console.log(this.props)
    const {data: {todos}} = this.props
    return (
      <div>
        {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
      </div>
    )
  }
}

const todosQuery = gql`
  {
    todos @client {
      id
      title
    }
  }
`

export default graphql(todosQuery)(TodoList)
