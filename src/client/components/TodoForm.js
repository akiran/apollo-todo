import React from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }
  setTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  addTodo = (e) => {
    if (e.key !== 'Enter' || !this.state.title) {
      return
    }
    this.props.mutate({
      variables: {title: this.state.title}
    })
    this.setState({
      title: ''
    })
  }
  render() {
    return (
      <div style={{marginTop: 20, marginBottom: 20}}>
        <input
          placeholder='Enter Todo'
          className='form-control'
          value={this.state.title}
          onKeyDown={this.addTodo}
          onChange={this.setTitle}
        />
      </div>
    )
  }
}

const addTodoMutation = gql`
  mutation addTodoMutation($title: String) {
    addTodo(title: $title) @client
  }
`

export default graphql(addTodoMutation)(TodoForm)
