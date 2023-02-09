import { useQuery } from "react-query";
import customAxios, { BASE_URL } from "../library/axios";

const fetchUser = (search: string) => {
  try {
    return customAxios.get(`${BASE_URL}?q=${search}`);
  } catch (err) {
    throw err;
  }
};

export const useGetUser = (search: string) => {
  return useQuery(`get-user-${search}`, () => fetchUser(search));
};

export default useGetUser;
