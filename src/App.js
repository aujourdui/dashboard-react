import { useState } from "react";

import {
  RelativeContainer,
  SidebarContainer,
  MainContainer,
  MenuIconContainer,
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
        <MainContainer>
          <MenuIconContainer>
            <CustomMenuIcon onClick={toggleSidebar} />
          </MenuIconContainer>
          <Dashboard />
        </MainContainer>
      </RelativeContainer>
    </>
  );
};

export default App;
