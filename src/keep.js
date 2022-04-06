// const App = () => {
//   const [show, setShow] = useState(true);

//   const toggleSidebar = () => {
//     setShow(!show);
//   };

//   return (
//     <>
//       <RelativeContainer>
//         {show && (
//           <div>
//             <CSSTransition
//               in={show}
//               timeout={200}
//               classNames={"fade"}
//               unmountOnExit
//             >
//               <SidebarContainer>
//                 <p>Sidebar</p>
//               </SidebarContainer>
//             </CSSTransition>
//           </div>
//         )}
//         {show ? (
//           <>
//             <MobileContainer onClick={toggleSidebar}></MobileContainer>
//             <MainContainer>
//               <MenuIconContainer>
//                 <CustomMenuIcon onClick={toggleSidebar} />
//               </MenuIconContainer>
//               <Dashboard />
//             </MainContainer>
//           </>
//         ) : (
//           <MainContainer close>
//             <MenuIconContainer>
//               <CustomMenuIcon onClick={toggleSidebar} />
//             </MenuIconContainer>
//             <Dashboard />
//           </MainContainer>
//         )}
//       </RelativeContainer>
//     </>
//   );
// };
