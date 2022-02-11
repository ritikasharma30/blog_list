import axios from "axios";

/*
*Create Instance*
*/
const base_url = 'https://jsonplaceholder.typicode.com/'
let instance = axios.create({
  baseURL: `${base_url}`,
  headers: {
    "Content-Type": "application/json",
  },
});

/*
* handle request interceptor
*/
instance.interceptors.request.use(
  request => {
    return request;
  },
  (error) => Promise.reject(error)
);
/*
* logout on getting status 401 from any api
*/
const logout = () => {
  window.location.replace('/');
}
/*
* handle response interceptor
*/

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error?.response?.status === 401) {
      logout()
      return Promise.reject(error);
    }
  },
);

export default instance;

