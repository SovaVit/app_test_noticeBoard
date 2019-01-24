import setAuthorizationToken from "./setAuthorizationToken";

const BASE_URL = "api/";

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

export const AllPosts = {
  fetchPosts(start) {
    return _request(`posts/?skip=${start}&limit=50`);
  }
};
export const SearchPosts = {
  fetchPosts(start, search) {
    return _request(`posts/?skip=${start}&limit=50&search=${search}`);
  }
};

export const PostById = {
  fetchPost(id) {
    return Promise.all([
      _request(`posts/${id}`),
      _request(`comments/?postId=${id}`)
    ]);
  }
};
export const AddPost = {
  fetchPost(data, token) {
    let fetchData = {
      method: "POST",
      body: data,
      headers: setAuthorizationToken(token)
    };
    return _request("posts", fetchData);
  }
};

export const AddComments = {
  fetchComment(data, token) {
    let fetchData = {
      method: "POST",
      body: data,
      headers: setAuthorizationToken(token)
    };
    return _request("comments", fetchData);
  }
};
export const GetUserPosts = {
  fetchPost(token) {
    let fetchData = {
      method: "GET",
      headers: setAuthorizationToken(token)
    };
    return _request("posts/userposts", fetchData);
  }
};
export const GetUserComments = {
  fetchPost(token) {
    let fetchData = {
      method: "GET",
      headers: setAuthorizationToken(token)
    };
    return _request("comments/usercomments", fetchData);
  }
};
export const RemoveUserPost = {
  fetchPost(_id) {
    let fetchData = {
      method: "DELETE"
    };
    return _request(`posts/${_id}`, fetchData);
  }
};
export const RemoveUserComment = {
  fetchPost(_id) {
    let fetchData = {
      method: "DELETE"
    };
    return _request(`comments/${_id}`, fetchData);
  }
};
export const UpdatePost = {
  fetchPost(id, data, token) {
    let fetchData = {
      method: "PATCH",
      body: data,
      headers: setAuthorizationToken(token)
    };
    return _request(`posts/${id}`, fetchData);
  }
};
export const UpdateComment = {
  fetchPost(id, data, token) {
    let fetchData = {
      method: "PATCH",
      body: data,
      headers: setAuthorizationToken(token)
    };
    return _request(`comments/${id}`, fetchData);
  }
};
