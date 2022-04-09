import React, { useState, useEffect } from "react";

import {
  MainContentsContainer,
  TaskContainer,
  TaskContentContainer,
  TaskSection,
  TaskItem,
  TaskContent,
  TaskAvatarImage,
  TaskAvatarContainer,
  TaskItemContainer,
  TaskAssignee,
  TaskDue,
  TaskPriority,
  TaskItemAssignee,
  TaskItemDue,
  TaskItemPriority,
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
        <TaskContentContainer>Content</TaskContentContainer>
        <TaskAssignee>Assignee</TaskAssignee>
        <TaskDue>Due</TaskDue>
        <TaskPriority>Priority</TaskPriority>
        <TaskItem>Finish the mid-term project</TaskItem>
        <TaskItemAssignee>
          <TaskAvatarContainer>
            <TaskAvatarImage src="/hero-image.jpeg" />
            Kyosuke
          </TaskAvatarContainer>
        </TaskItemAssignee>
        <TaskItemDue>Today</TaskItemDue>
        <TaskItemPriority>High</TaskItemPriority>
        <TaskItem>Study in the central library for 8hours</TaskItem>
        <TaskItemAssignee>
          <TaskAvatarContainer>
            <TaskAvatarImage src="https://media-exp1.licdn.com/dms/image/D5635AQFxVf3purrRog/profile-framedphoto-shrink_200_200/0/1649122686962?e=1649444400&v=beta&t=sfF1kIOjR4gafv0m0-SPnPoLVtnrSYX8bqJBnbsNWwE" />
            Sho
          </TaskAvatarContainer>
        </TaskItemAssignee>
        <TaskItemDue>Every day</TaskItemDue>
        <TaskItemPriority>High</TaskItemPriority>
      </TaskContainer>
      {/* <TaskContainer>

      </TaskContainer> */}
      {/* <TaskItemContainer>
        <TaskItem>
          Study in the central library for 8hours
        </TaskItem>
        <TaskSection>Sho</TaskSection>
        <TaskSection>Every Day</TaskSection>
        <TaskSection>Hight</TaskSection>
      </TaskItemContainer> */}
      {/* <TaskContainer>
        <TaskContentContainer>Content</TaskContentContainer>
        <TaskSection>Assignee</TaskSection>
        <TaskSection>Due</TaskSection>
        <TaskSection>Priority</TaskSection>
      </TaskContainer>
      <TaskItemContainer>
        <TaskContentContainer>Finish the midterm Project</TaskContentContainer>
        <TaskItem>Kyosuke</TaskItem>
        <TaskItem>Today</TaskItem>
        <TaskItem>High</TaskItem>
      </TaskItemContainer>
      <TaskItemContainer>
        <TaskContentContainer>
          Go to Library to study for 8 hours{" "}
        </TaskContentContainer>
        <TaskItem>Sho</TaskItem>
        <TaskItem>Every day</TaskItem>
        <TaskItem>High</TaskItem>
      </TaskItemContainer> */}
    </MainContentsContainer>
  );
};

export default TaskList;

{
  /* <MainContentsContainer>
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
</MainContentsContainer> */
}
