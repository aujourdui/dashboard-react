import axios from "axios";

const members = "https://dashboard-react-backend742964.herokuapp.com/members/";
const tasks = "https://dashboard-react-backend742964.herokuapp.com/tasks/";

export const fetchMembers = async () => {
  const result = await axios.get(members);
  return result;
};

export const fetchTasks = async () => {
  const result = await axios.get(tasks);
  return result;
};
