import customAxios, { BASE_URL_REPOS } from "../library/axios";
import { Repository } from "../types/repository";

const fetchRepos = (currentUser: string) => {
  try {
    return customAxios.get<Repository>(
      `${BASE_URL_REPOS}/${currentUser}/repos`
    );
  } catch (err) {
    throw err;
  }
};

export default fetchRepos;
