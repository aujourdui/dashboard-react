import React from "react";

import { UlSidebar, ListSidebar, LinkItem } from "../styles/styles";

const List = () => {
  const lists = [
    {
      name: "User list",
      icon: "UserIcon",
      link: "/user",
    },
    {
      name: "Task list",
      icon: "TaskIcon",
      link: "/task",
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
          <LinkItem href={item.link}>
            <span>{item.name}</span>
          </LinkItem>
        </ListSidebar>
      ))}
    </UlSidebar>
  );
};

export default List;
