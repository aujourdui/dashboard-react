import axios from "axios";

const member = "http://localhost:5000/member";

export const fetchMember = async () => {
  const result = await axios.get(member);
  return result;
};
