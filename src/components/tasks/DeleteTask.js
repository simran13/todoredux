import React, { Component } from 'react'
import { createTask } from '../../store/actions/taskActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class DeleteTask extends Component {
  state = {
    title: '',
    content: '',
    date:'',
    time:''
  }
 
  handleSubmit = (e) => {
    this.state.todolist.splice(e.target.value, 1)
    this.setState({
        tasklist: this.state.tasklist
    })
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <div className="input-field">
            <button className="btn pink lighten-1">Delete</button>
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createTask: (tasklist) => dispatch(createTask(tasklist))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DeleteTask)