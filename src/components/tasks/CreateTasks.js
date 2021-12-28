import React, { Component } from 'react'
import { createTask } from '../../store/actions/taskActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class CreateTask extends Component {
  state = {
    title: '',
    content: '',
    date:'',
    time:''
  }
  handleChange = (e) => {
    this.state.
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createTask(this.state);
    this.props.history.push('/');

  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Task</h5>
          <label><h6>Task Title</h6></label>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
          </div>
          <label><h6>Content</h6></label>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>
          <div className="date">
              <input type="date" id="date" placeholder="mm/dd/yyyy" name="date" onChange={this.handleChange}/>
          </div>
          <div className='time'>
              <input type="time" id="time" placeholder="Enter the Time" name="time" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
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

export default connect(mapStateToProps,mapDispatchToProps)(CreateTask)