import { useState } from "react";

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
  const [show, setShow] = useState(true);

  const toggleSidebar = () => {
    setShow(!show);
  };

  return (
    <>
      <RelativeContainer>
        {show && <SidebarContainer>Sidebar</SidebarContainer>}
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
