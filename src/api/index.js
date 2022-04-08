import axios from "axios";

const members = "http://localhost:5000/members/";

export const fetchMembers = async () => {
  const result = await axios.get(members);
  return result;
};
