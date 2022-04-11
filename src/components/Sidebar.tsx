import React from "react";
import {
  LogoLink,
  LogoLinkWrapper,
  SidebarListContainer,
} from "../styles/styles";
import List from "./List";

const Sidebar = () => {
  return (
    <LogoLinkWrapper>
      <LogoLink to="/">Dashboard app</LogoLink>
      <SidebarListContainer>
        <List />
      </SidebarListContainer>
    </LogoLinkWrapper>
  );
};

export default Sidebar;
