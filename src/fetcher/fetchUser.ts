import customAxios, { BASE_URL } from "../library/axios";

const fetchUser = (search: string) => {
  try {
    return customAxios.get(`${BASE_URL}?q=${search}`);
  } catch (err) {
    throw err;
  }
};

export default fetchUser;
