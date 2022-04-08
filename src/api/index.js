import axios from "axios";

const members = "http://localhost:5000/members/";
const tasks = "http://localhost:5000/tasks/";

export const fetchMembers = async () => {
  const result = await axios.get(members);
  return result;
};

export const fetchTasks = async () => {
  const result = await axios.get(tasks);
  return result;
};
