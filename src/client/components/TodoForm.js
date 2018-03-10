import React from 'react'

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
    if (e.key !== 'Enter') {
      return
    }
    this.setState({
      title: ''
    })
  }
  render() {
    return (
      <div>
        <input
          placeholder='Enter Todo'
          value={this.state.title}
          onKeyDown={this.addTodo}
          onChange={this.setTitle}
        />
      </div>
    )
  }
}

export default TodoForm
