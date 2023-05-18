import { useState } from "react";
import React from "react";

export default function SignUp() {
  return (
    <>
      <div>
        <form className="pure-form pure-form-aligned">
          <fieldset>
            <div className="pure-control-group">
              <label>Username</label>
              <input type="text" id="aligned-name" placeholder="Username" />
              <span className="pure-form-message-inline">
                This is a required field.
              </span>
            </div>
            <div className="pure-control-group">
              <label>Password</label>
              <input
                type="password"
                id="aligned-password"
                placeholder="Password"
              />
            </div>
            <div className="pure-control-group">
              <label>Email Address</label>
              <input
                type="email"
                id="aligned-email"
                placeholder="Email Address"
              />
            </div>
            <div className="pure-control-group">
              <label>Supercalifragilistic Label</label>
              <input
                type="text"
                id="aligned-foo"
                placeholder="Enter something here..."
              />
            </div>
            <div className="pure-controls">
              <label className="pure-checkbox">
                <input type="checkbox" id="aligned-cb" /> I&#x27;ve read the
                terms and conditions
              </label>
              <button type="submit" className="pure-button pure-button-primary">
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}
