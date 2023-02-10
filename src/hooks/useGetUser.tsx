import { useQuery } from "react-query";
import fetchUser from "../fetcher/fetchUser";

const useGetUser = (search: string) => {
  return useQuery(`get-user-${search}`, () => fetchUser(search), {
    enabled: !!search,
  });
};

export default useGetUser;
