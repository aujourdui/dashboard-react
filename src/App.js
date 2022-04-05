import {
  RelativeContainer,
  SidebarContainer,
  MainContainer,
  MenuIconContainer,
  CustomMenuIcon,
} from "./styles/styles";

import Dashboard from "./Dashboard";

const App = () => {
  return (
    <>
      <RelativeContainer>
        <SidebarContainer>Sidebar</SidebarContainer>
        <MainContainer>
          <MenuIconContainer>
            <CustomMenuIcon />
          </MenuIconContainer>
          <div>
            <Dashboard />
          </div>
        </MainContainer>
      </RelativeContainer>
    </>
  );
};

export default App;
