import customAxios, { BASE_URL } from "../library/axios";
import { Owner } from "../types/repository";

const fetchUser = (search: string) => {
  try {
    return customAxios.get<Owner>(`${BASE_URL}?q=${search}`);
  } catch (err) {
    throw err;
  }
};

export default fetchUser;
