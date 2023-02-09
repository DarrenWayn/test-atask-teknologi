import customAxios, { BASE_URL_REPOS } from "../library/axios";

const fetchRepos = (currentUser: string) => {
  try {
    return customAxios.get(`${BASE_URL_REPOS}/${currentUser}/repos`);
  } catch (err) {
    throw err;
  }
};

export default fetchRepos;
