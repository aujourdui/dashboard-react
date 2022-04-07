import React from "react";
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

const TaskList = () => {
  return (
    <MainContentsContainer>
      TaskList
      <TaskContainer>
        <TaskContentContainer>
          <TaskContent>Content</TaskContent>
          <TaskItem>Finish mid-term project</TaskItem>
          <TaskItem>Study in the central library for 8hours</TaskItem>
        </TaskContentContainer>
        <TaskSection>
          <TaskContent>Assignee</TaskContent>
          <TaskAssignee>
            <TaskAvatarContainer>
              <TaskAvatarImage src="/hero-image.jpeg"></TaskAvatarImage>
              Kyosuke{" "}
            </TaskAvatarContainer>
          </TaskAssignee>
          <TaskAssignee>
            <TaskAvatarContainer>
              <TaskAvatarImage src="https://media-exp1.licdn.com/dms/image/D5635AQFxVf3purrRog/profile-framedphoto-shrink_200_200/0/1649122686962?e=1649444400&v=beta&t=sfF1kIOjR4gafv0m0-SPnPoLVtnrSYX8bqJBnbsNWwE"></TaskAvatarImage>
              Sho{" "}
            </TaskAvatarContainer>
          </TaskAssignee>
        </TaskSection>
        <TaskSection>
          <TaskContent>Due</TaskContent>
          <TaskItem>Today</TaskItem>
          <TaskItem>Every day</TaskItem>
        </TaskSection>
        <TaskSection>
          <TaskContent>Priority</TaskContent>
          <TaskItem>High</TaskItem>
          <TaskItem>High</TaskItem>
        </TaskSection>
      </TaskContainer>
    </MainContentsContainer>
  );
};

export default TaskList;
