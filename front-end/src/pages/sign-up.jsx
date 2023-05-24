import React from "react";
import { Button, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState(null);

  function handleSubmit() {
    axios
      .post("http://127.0.0.1:8000/auth/users", {
        headers: { "Content-Type": "application/json" },
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        setToken(response.data.auth_token);
      })
      .catch((error) => {
        console.error(error);
        setError(error.response);
      });
  }

  return (
    <>
      <div className="">
        <div className="mt-10 ">
          <h1 className="text-center text-2xl font-cursive">Welcome to</h1>
        </div>
        <div className="">
          <h1 className="text-center text-6xl font-cursive">
            Simple Adventure
          </h1>
        </div>
        <div className="mt-20 ">
          <h1 className="text-center text-4xl font-cursive underline">
            Sign Up
          </h1>
        </div>
        <div className="flex justify-center h-screen">
          <Form className="font-cursive mx-5 mt-10 w-2/5 ">
            {/* <Form.Field>
              <label>Email</label>
              <input placeholder="Email" />
            </Form.Field>
            <Form.Field>
              <label>First Name</label>
              <input placeholder="First Name" />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input placeholder="Last Name" />
            </Form.Field> */}
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
            {/* <Form.Field>
              <label>Confirm Password</label>
              <input placeholder="Confirm Password" />
            </Form.Field> */}
            <div className="text-center">
              <Button
                color="black"
                type="submit"
                className=""
                onClick={handleSubmit}
              >
                <span className="font-cursive text-lg">Submit</span>
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
