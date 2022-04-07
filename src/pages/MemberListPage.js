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

import MemberList from "../components/MemberList";
import DropdownMenu from "../components/DropdownMenu";
import Sidebar from "../components/Sidebar";

const MemberListPage = () => {
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
              <MemberList />
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
            <MemberList />
          </MainContainer>
        )}
      </RelativeContainer>
    </>
  );
};

export default MemberListPage;
