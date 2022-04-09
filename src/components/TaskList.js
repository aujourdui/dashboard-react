import React, { useState, useEffect } from "react";

import {
  TaskContainer,
  TaskItem,
  TaskAvatarImage,
  TaskAvatarContainer,
} from "../styles/task";

import * as api from "../api/index";

const TaskList = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const getTask = async () => {
      try {
        const { data } = await api.fetchTasks();
        setTask(data);
      } catch (error) {
        console.log(error);
      }
    };
    getTask();
  }, []);

  return (
    <TaskContainer>
      <div>Content</div>
      <div>Assignee</div>
      <div>Due</div>
      <div>Priority</div>

      {task.map((task) => (
        <React.Fragment key={task.id}>
          <TaskItem>{task.task}</TaskItem>
          <TaskItem>
            <TaskAvatarContainer>
              <TaskAvatarImage src={task.image} />
              {task.assignee}
            </TaskAvatarContainer>
          </TaskItem>
          <TaskItem>{task.due}</TaskItem>
          <TaskItem>{task.priority}</TaskItem>
        </React.Fragment>
      ))}
    </TaskContainer>
  );
};

export default TaskList;
