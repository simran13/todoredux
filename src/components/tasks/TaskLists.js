import React from 'react';
import TaskSummary from './TaskSummary';

const TaskLists = ({todoTask}) => {
    return (
        <div className='project-list section'>
          {todoTask && todoTask.map(tasklist => {
            return (
              <TaskSummary tasklist={tasklist} key={tasklist.id}></TaskSummary>
            )
          })}
        </div>
    );
};

export default TaskLists;