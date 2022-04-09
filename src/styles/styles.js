import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export const RelativeContainer = styled.div`
  position: relative;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 16rem;
  height: 100vh;
  background-color: white;
  z-index: 20;
  transition: 0.4s ease-in;
`;

export const MainContainer = styled.div`
  background-color: #f3f4f6;
  height: 100vh;
  overflow: hidden;
  transition: 0.4s ease-in;
  padding-left: ${(props) => (props.close ? 0 : "16rem")};
  @media (max-width: 64rem) {
    padding-left: 0;
    transition: 0.4s ease-in;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  margin: 1rem;
  padding: 1rem;
`;

export const MenuIconContainer = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  margin: 1rem;
  padding: 1rem;
  transition: 0.4s ease-in;
`;

export const MobileContainer = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: rgb(17 24 39);
  opacity: 0.5;
  z-index: 10;
  @media (min-width: 64rem) {
    display: none;
  }
`;

export const CustomMenuIcon = styled(MenuIcon)`
  color: #4b5563;
  cursor: pointer;
  transition: 0.4s ease-in;
`;

export const AvatarImage = styled.img`
  border-radius: 9999px;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;

export const LogoLinkWrapper = styled.div`
  padding: 1rem;
`;

export const LogoLink = styled(Link)`
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.75rem;
  text-decoration: none;
  color: rgb(37 99 235);
`;

export const UlSidebar = styled.ul`
  color: rgb(55 65 81);
  padding: 0;
`;
export const ListSidebar = styled.li`
  margin-bottom: 0.25rem;
  list-style: none;
`;
export const LinkItem = styled(Link)`
  display: block;
  padding: 0.5rem;
  text-decoration: none;
  color: black;
  border-radius: 0.125rem;
  &:hover {
    color: white;
    background-color: rgb(96 165 250);
  }
`;

export const SidebarListContainer = styled.div`
  margin-top: 2rem;
`;

export const MainContentsContainer = styled.div`
  padding-left: 1rem;
`;

export const MemberCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  margin-top: 2rem;
`;

export const TaskItem = styled.div`
  margin-bottom: 0.5rem;
`;
