import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

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
`;

export const MainContainer = styled.div`
  background-color: #f3f4f6;
  height: 100vh;
  overflow: hidden;
  padding-left: ${(props) => (props.close ? 0 : "16rem")};
  @media (max-width: 64rem) {
    padding-left: 0;
  }
`;

export const MenuIconContainer = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  margin: 1rem;
  padding: 1rem;
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
`;
