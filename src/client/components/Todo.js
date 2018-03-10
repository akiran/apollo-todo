import React from 'react'

class Todo extends React.Component {
  render() {
    const {todo} = this.props
    return (
      <div style={{marginBottom: 10}}>
        {todo.title}
      </div>
    )
  }
}

export default Todo
