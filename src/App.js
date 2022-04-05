import { useState } from "react";
import { CSSTransition } from "react-transition-group";

import {
  RelativeContainer,
  SidebarContainer,
  MainContainer,
  MenuIconContainer,
  MobileContainer,
  CustomMenuIcon,
} from "./styles/styles";

import Dashboard from "./Dashboard";

// const transitionStyle = {
//   entering: {
//     transition: "all 1s ease",
//     transform: "-translateX(100%)",
//   },
//   entered: {
//     transition: "all 1s ease",
//     transform: "-translateX(100%)",
//   },
//   exiting: {
//     transition: "all 1s ease",
//     transform: "translateX(0)",
//   },
//   exited: {
//     transition: "all 1s ease",
//     transform: "translateX(0)",
//   },
// };

const App = () => {
  const [show, setShow] = useState(true);
  // const [mount, setMount] = useState(false);

  const toggleSidebar = () => {
    setShow(!show);
    // setMount(!mount);
  };

  return (
    <>
      <RelativeContainer>
        {show && (
          <CSSTransition
            in={show}
            timeout={300}
            classNames="alert"
            unmountOnExit
            onEnter={() => setShow(false)}
            onExited={() => setShow(true)}
          >
            <div>
              <SidebarContainer>
                <p>Sidebar</p>
              </SidebarContainer>
            </div>
          </CSSTransition>
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

{
  /* <Transition in={mount} timeout={1000}>
{(state) => (
  <div style={transitionStyle[state]}>
    <SidebarContainer>
      <p>Sidebar</p>
      <p>{mount ? "in=true" : "in=false"}</p>
      <p>{state}</p>
    </SidebarContainer>
  </div>
)}
</Transition> */
}
