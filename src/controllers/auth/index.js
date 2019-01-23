const { Router: router } = require("express");
const { authenticate, generateAccessToken } = require("../../middleware");
const passport = require("passport");
const signIn = require("./sign-in");
const signUp = require("./sign-up");
const signOut = require("./sign-out");
const current = require("./current");
const changePassword = require("./change-password");

/**
 * Provide Api for Auth

 POST /api/users/sign-in - Sign In
 @params
       email {string}
       password {string}

       GET /api/users/current - get user
 @params
       Authorization: Bearer {token}

 POST /api/users/sign-up - Sign Un
 @params
       email {string}
       name {string}
       password {string}

 POST /api/users/sign-out - Sign Out
 @header
        Authorization: Bearer {token}

 POST /api/[users]/change-password - Change Password
 @header
       Authorization: Bearer {token}
 @params
       newPassword {string}
       password {string}


 **/

module.exports = (models, { config }) => {
  const api = router();

  api.post(
    "/sign-in",
    passport.authenticate("local", { session: false, scope: [] }),
    generateAccessToken,
    signIn
  );

  api.post(
    "/sign-up",
    signUp(models, { config }),
    passport.authenticate("local", { session: false, scope: [] }), // sign In after sign Up
    generateAccessToken,
    signIn
  );

  api.post("/sign-out", authenticate, signOut);

  api.get("/current", authenticate, current(models));
  api.put("/change-password", authenticate, changePassword(models));

  return api;
};
