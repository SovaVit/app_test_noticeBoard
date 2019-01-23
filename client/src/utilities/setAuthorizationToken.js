export default function setAuthorizationToken(token) {
  let myHeader = {};
  if (token) {
    myHeader = new Headers({
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`
    });
  } else {
    myHeader = new Headers({
      "Content-type": "application/json; charset=UTF-8"
    });
  }
  return myHeader;
}
