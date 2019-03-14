import React from "react";
import "./LoginForm.scss";

const LoginForm = () => {
  return (
    <form>
      <h1>Login</h1>
      <label className="form-label" htmlFor="organization">
        Azure devops Organization
      </label>
      <input id="organization" type="text" />
      <label className="form-label" htmlFor="access_token">
        Personnal Access Token
      </label>
      <input id="access_token" type="password" />

      <button className="form-submit" type="submit">
        Let's go
      </button>
    </form>
  );
};

export default LoginForm;
