import Axios, { AxiosError, AxiosResponse } from "axios";

export const BASE_URL = "https://api.github.com/search/users";
export const BASE_URL_REPOS = "https://api.github.com/users";

const customAxios = Axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const responseHandler = (response: AxiosResponse) => {
  return response;
};

const errorHandler = (error: AxiosError) => {
  return Promise.reject(error);
};

// ** Response Intercept
customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default customAxios;
