import { useQuery } from "react-query";
import fetchUser from "../fetcher/fetchUser";

const useGetUser = (search: any) => {
  return useQuery(["search-results", search], fetchUser(search));
};

export default useGetUser;
