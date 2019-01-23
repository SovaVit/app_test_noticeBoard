import setAuthorizationToken from "./setAuthorizationToken";
const BASE_URL = "api/users";

const _request = async (url, fetchData) => {
  const res = await fetch(`${BASE_URL}${url}`, fetchData);
  if (!res.ok) {
    const error = Object.assign(
      {},
      {
        status: res.status,
        statusText: res.statusText
      }
    );
    return Promise.reject(error);
  }
  return res.json();
};
export const AddUser = {
  fetchPost(data) {
    let fetchData = {
      method: "POST",
      body: data,
      headers: setAuthorizationToken()
    };
    return _request("/sign-up", fetchData);
  }
};
export const Login = {
  fetchPost(data) {
    let fetchData = {
      method: "POST",
      body: data,
      headers: setAuthorizationToken()
    };
    return _request("/sign-in", fetchData);
  }
};
export const LogOut = {
  fetchPost(data) {
    let fetchData = {
      method: "POST",
      headers: setAuthorizationToken(data)
    };
    return _request("/sign-out", fetchData);
  }
};
