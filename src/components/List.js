import React from "react";

import { UlSidebar, ListSidebar, LinkItem } from "../styles/styles";

const List = () => {
  const lists = [
    {
      name: "User list",
      icon: "UserIcon",
      link: "/",
    },
    {
      name: "Task list",
      icon: "TaskIcon",
      link: "/#",
      // sublists: [
      //   {
      //     name: "UserList",
      //     link: "/#",
      //   },
      //   {
      //     name: "TaskList",
      //     link: "/#",
      //   },
      // ],
    },
  ];
  return (
    <UlSidebar>
      {lists.map((item) => (
        <ListSidebar>
          <LinkItem>
            <span>{item.name}</span>
          </LinkItem>
        </ListSidebar>
      ))}
    </UlSidebar>
  );
};

export default List;
