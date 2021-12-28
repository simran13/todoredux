import React from 'react';
const TaskSummary = ({tasklist}) => {
    return (
        <div className="card z-depth-0 task-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{tasklist.title}</span>
        <p>{tasklist.content}</p>
        <p className="grey-text">{tasklist.date},{tasklist.time}</p>
      </div>
    </div>
    );
};

export default TaskSummary;