import React from "react";
import "./LoginForm.scss";

const LoginForm = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-6 is-offset-3">
            <h3 className="title has-text-grey">Login</h3>
            <p className="subtitle has-text-grey">Please login to proceed.</p>
            <div className="box">
              <form>
                <div className="field">
                  <div className="control">
                    <label className="label" htmlFor="organization">
                      Azure devops Organization
                    </label>
                    <div className="field has-addons">
                      <div className="control">
                        <a className="button is-static is-large">
                          https://dev.azure.com/
                        </a>
                      </div>
                      <div className="control is-expanded">
                        <input
                          className="input is-large"
                          id="organization"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <label className="label" htmlFor="access_token">
                      Personal Access Token
                    </label>
                    <input
                      className="input is-large"
                      id="access_token"
                      type="password"
                      placeholder="Personal Access Token"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="checkbox">
                    <input type="checkbox" />
                    Remember me
                  </label>
                </div>
                <button className="button is-block is-primary is-large is-fullwidth">
                  Login &rarr;
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <form className="hero-body login-form column is-half">
        <h1 className="title is-1 has-text-centered">Login</h1>
        <div className="control">
          <label className="label" htmlFor="organization">
            Azure devops Organization
          </label>
          <div className="field has-addons">
            <div className="control">
              <a className="button is-static">https://dev.azure.com/</a>
            </div>
            <div className="control">
              <input className="input" id="organization" type="text" />
            </div>
          </div>
        </div>
        <div>
          <label className="label" htmlFor="access_token">
            Personnal Access Token
          </label>
          <input className="input" id="access_token" type="password" />
        </div>

        <label className="checkbox has-text-right is-medium">
          Remember me&nbsp;
          <input type="checkbox" />
        </label>

        <button className="button is-primary submit-button" type="submit">
          Let's go &rarr;
        </button>
      </form> */}
    </section>
  );
};

export default LoginForm;
