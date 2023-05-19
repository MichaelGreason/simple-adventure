import React from "react";
import { Button, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/");
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
              <input placeholder="Username" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder="Password" />
            </Form.Field>
            <div className="text-center">
              <Button color="black" type="submit" className="">
                <span className="font-cursive text-lg" onClick={handleLogin}>
                  Adventure
                </span>
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
