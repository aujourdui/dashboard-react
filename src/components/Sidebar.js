import React from "react";
import {
  LogoContainer,
  LogoContainerWrapper,
  SidebarListContainer,
} from "../styles/styles";
import List from "./List";

const Sidebar = () => {
  return (
    <LogoContainerWrapper>
      <LogoContainer>Dashboard app</LogoContainer>
      <SidebarListContainer>
        <List />
      </SidebarListContainer>
    </LogoContainerWrapper>
  );
};

export default Sidebar;
