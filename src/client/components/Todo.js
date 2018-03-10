import React from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'

class Todo extends React.Component {
  deleteTodo = () => {
    this.props.mutate({
      variables: {id: this.props.todo.id}
    })
  }
  render() {
    const {todo} = this.props
    return (
      <div style={{marginBottom: 10}}>
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

export default graphql(deleteTodoMutation)(Todo)
