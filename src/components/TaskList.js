import React, { useState, useEffect } from "react";

import {
  MainContentsContainer,
  TaskContainer,
  TaskContentContainer,
  TaskSection,
  TaskItem,
  TaskAssignee,
  TaskContent,
  TaskAvatarImage,
  TaskAvatarContainer,
} from "../styles/styles";

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

  // useEffect(() => {
  //   const fetchTasks = () => {
  //     axios
  //       .get("https://jsonblob.com/api/961749831278411776")
  //       .then((res) => {
  //         setTask(res.data);
  //         console.log(task);
  //       })
  //       .catch((error) => console.error(`Error: ${error}`));
  //   };
  //   fetchTasks();
  // }, []);

  return (
    <MainContentsContainer>
      TaskList
      <TaskContainer>
        {task.map((task) => (
          <TaskContentContainer key={task.id}>
            <TaskSection>
              <TaskAvatarContainer>
                <TaskAvatarImage
                  src={task.image}
                  alt="avatar"
                ></TaskAvatarImage>
                {task.assignee}
              </TaskAvatarContainer>
            </TaskSection>
            <div>{task.due}</div>
          </TaskContentContainer>
        ))}
        <TaskContentContainer>
          <TaskContent>Content</TaskContent>
          <TaskItem>{task[0].task}</TaskItem>
          <TaskItem>{task[1].task}</TaskItem>
        </TaskContentContainer>
        <TaskSection>
          <TaskContent>Assignee</TaskContent>
          <TaskAssignee>
            <TaskAvatarContainer>
              <TaskAvatarImage src={task[0].image}></TaskAvatarImage>
              {task[0].name}
            </TaskAvatarContainer>
          </TaskAssignee>
          <TaskAssignee>
            <TaskAvatarContainer>
              <TaskAvatarImage src={task[1].image}></TaskAvatarImage>
              {task[1].name}
            </TaskAvatarContainer>
          </TaskAssignee>
        </TaskSection>
        <TaskSection>
          <TaskContent>Due</TaskContent>
          <TaskItem>{task[0].due}</TaskItem>
          <TaskItem>{task[1].due}</TaskItem>
        </TaskSection>
        <TaskSection>
          <TaskContent>Priority</TaskContent>
          <TaskItem>{task[0].priority}</TaskItem>
          <TaskItem>{task[1].priority}</TaskItem>
        </TaskSection>
      </TaskContainer>
    </MainContentsContainer>
  );
};

export default TaskList;
