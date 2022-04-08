import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DashboardPage from "./pages/DashboardPage";
import TaskListPage from "./pages/TaskListPage";
import MemberListPage from "./pages/MemberListPage";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App />}> */}
      <Route path="/" element={<DashboardPage />} />
      <Route path="/member" element={<MemberListPage />} />
      <Route path="/task" element={<TaskListPage />} />

      {/* </Route> */}
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
