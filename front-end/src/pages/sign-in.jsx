import React from "react";
import { Button, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignIn() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  function handleLogin() {
    axios
      .post(
        "http://127.0.0.1:8000/auth/token/login/",
        {
          username: username,
          password: password,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        console.log(response);
        setToken(response.data.auth_token);
        localStorage.setItem("Token", response.data.auth_token);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setError(error.response);
      });
  }

  return (
    <>
      <div className="mt-20 ">
        <h1 className="text-center text-4xl font-cursive underline">Log in</h1>
      </div>
      <div className="">
        <div className="flex justify-center h-screen">
          <Form className="font-cursive mx-5 mt-10 w-2/5 ">
            <Form.Field>
              <label>Username</label>
              <input
                placeholder="Username"
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Field>
            <div className="text-center">
              <Button
                color="black"
                type="submit"
                className=""
                onClick={handleLogin}
              >
                <span className="font-cursive text-lg">Adventure</span>
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
