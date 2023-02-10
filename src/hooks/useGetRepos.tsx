import { useQuery } from "react-query";
import fetchRepos from "../fetcher/fetchRepos";

const useGetRepos = (currentUser: string) => {
  return useQuery(`get-repos-${currentUser}`, () => fetchRepos(currentUser), {
    enabled: !!currentUser,
  });
};

export default useGetRepos;
