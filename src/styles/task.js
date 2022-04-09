import styled from "styled-components";

export const TaskAvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const TaskAvatarImage = styled.img`
  border-radius: 9999px;
  width: 1.5rem;
  height: 1.5rem;
  padding-right: 0.2rem;
`;

export const TaskContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr repeat(3, 1fr);
  grid-template-rows: 2fr repeat(2, 1fr);
  margin: 2rem 0 0 2rem;
  @media (max-width: 48rem) {
    margin: 2rem 0 0 0.5rem;
  }
`;

export const TaskItem = styled.div`
  margin-bottom: 0.5rem;
  @media (max-width: 48rem) {
    font-size: 0.8rem;
  }
`;
