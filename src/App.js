// import MenuIcon from "@mui/icons-material/Menu";

import {
  RelativeContainer,
  SidebarContainer,
  MainContainer,
  MenuIconContainer,
  CustomMenuIcon,
} from "./styles/styles";
// import axios from "axios";

const App = () => {
  return (
    <>
      <RelativeContainer>
        <SidebarContainer>Sidebar</SidebarContainer>
        <MainContainer>
          <MenuIconContainer>
            <CustomMenuIcon />
          </MenuIconContainer>
        </MainContainer>
      </RelativeContainer>
    </>
  );
};

export default App;

{
  /* 
<RelativeContainer>
<SidebarContainer>Sidebar</SidebarContainer>
<MainContainer></MainContainer>
<MenuIconContainer></MenuIconContainer>
</RelativeContainer> */
}
