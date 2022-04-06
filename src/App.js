import { useState } from "react";
// import { CSSTransition } from "react-transition-group";

import {
  RelativeContainer,
  SidebarContainer,
  MainContainer,
  MenuIconContainer,
  MobileContainer,
  CustomMenuIcon,
} from "./styles/styles";

import Dashboard from "./Dashboard";

const App = () => {
  const [show, setShow] = useState(window.innerWidth >= 1280 ? true : false);

  const toggleSidebar = () => {
    setShow(!show);
  };

  return (
    <>
      <RelativeContainer>
        {show && (
          <SidebarContainer>
            <p>Sidebar</p>
          </SidebarContainer>
        )}
        {show ? (
          <>
            <MobileContainer onClick={toggleSidebar}></MobileContainer>
            <MainContainer>
              <MenuIconContainer>
                <CustomMenuIcon onClick={toggleSidebar} />
              </MenuIconContainer>
              <Dashboard />
            </MainContainer>
          </>
        ) : (
          <MainContainer close>
            <MenuIconContainer>
              <CustomMenuIcon onClick={toggleSidebar} />
            </MenuIconContainer>
            <Dashboard />
          </MainContainer>
        )}
      </RelativeContainer>
    </>
  );
};

export default App;
