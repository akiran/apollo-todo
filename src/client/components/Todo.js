import React from 'react'
import gql from 'graphql-tag'
import {graphql, compose} from 'react-apollo'

class Todo extends React.Component {
  deleteTodo = () => {
    this.props.deleteTodo({
      variables: {id: this.props.todo.id}
    })
  }
  toggleTodo = () => {
    this.props.toggleTodo({
      variables: {id: this.props.todo.id}
    })
  }
  render() {
    const {todo} = this.props
    return (
      <div style={{marginBottom: 10}}>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={this.toggleTodo}
          style={{marginRight: 10}}
        />
        {todo.title}
        <a className='pull-right btn-link' onClick={this.deleteTodo}>
          <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
        </a>
      </div>
    )
  }
}

const deleteTodoMutation = gql`
  mutation deleteTodoMutation($id: String) {
    deleteTodo(id: $id) @client
  }
`

const toggleTodoMutation = gql`
  mutation toggleTodoMutation($id: String) {
    toggleTodo(id: $id) @client
  }
`


export default compose(
  graphql(deleteTodoMutation, {name: 'deleteTodo'}),
  graphql(toggleTodoMutation, {name: 'toggleTodo'})
)(Todo)
