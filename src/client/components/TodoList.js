import React from 'react'
import {graphql} from 'react-apollo'
import Todo from './Todo'
import {todosQuery} from '../data/queries'

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

export default graphql(todosQuery)(TodoList)
