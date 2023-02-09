import { useQuery } from "react-query";
import fetchUser from "../fetcher/fetchUser";

const useGetUser = (search: string) => {
  return useQuery(`get-user-${search}`, () => fetchUser(search));
};

export default useGetUser;
