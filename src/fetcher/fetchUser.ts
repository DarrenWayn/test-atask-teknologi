import customAxios from "../library/axios";
import { SearchResult } from "../types/search-results";

const fetchUser = (search: SearchResult) => {
  try {
    return customAxios({ url: `?q=${search}&per_page=20` , method: "get" });
  } catch (err) {
    throw err;
  }
};

export default fetchUser;
