import { useState } from "react";
// import { CSSTransition } from "react-transition-group";

import {
  RelativeContainer,
  SidebarContainer,
  MainContainer,
  TabContainer,
  MenuIconContainer,
  MobileContainer,
  CustomMenuIcon,
} from "../styles/styles";

import Dashboard from "../components/Dashboard";
import DropdownMenu from "../components/DropdownMenu";
import Sidebar from "../components/Sidebar";

const DashboardPage = () => {
  const [show, setShow] = useState(window.innerWidth >= 1280 ? true : false);

  const toggleSidebar = () => {
    setShow(!show);
  };

  return (
    <>
      <RelativeContainer>
        {show && (
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>
        )}
        {show ? (
          <>
            <MobileContainer onClick={toggleSidebar}></MobileContainer>
            <MainContainer>
              <TabContainer>
                <MenuIconContainer>
                  <CustomMenuIcon onClick={toggleSidebar} />
                </MenuIconContainer>
                <DropdownMenu />
              </TabContainer>
              <Dashboard />
            </MainContainer>
          </>
        ) : (
          <MainContainer close>
            <TabContainer>
              <MenuIconContainer>
                <CustomMenuIcon onClick={toggleSidebar} />
              </MenuIconContainer>
              <DropdownMenu />
            </TabContainer>
            <Dashboard />
          </MainContainer>
        )}
      </RelativeContainer>
    </>
  );
};

export default DashboardPage;
