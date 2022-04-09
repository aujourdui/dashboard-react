import styled from "styled-components";

export const MemberCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 48rem) {
    display: block;
  }
`;

export const MemberCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4%;
  padding: 5%;
  color: white;
  background-color: rgb(37 99 235);
  border-radius: 5px;
`;

export const MemberCardContent = styled.div`
  display: flex;
  padding: 0.2rem;
`;

export const MemberCardAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem;
`;

export const MemberCardAvatarImage = styled.img`
  border-radius: 9999px;
  width: 2.5rem;
  height: 2.5rem;
  padding-right: 0.2rem;
`;
