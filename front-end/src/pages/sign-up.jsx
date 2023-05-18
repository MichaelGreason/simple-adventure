import React from "react";
import { Button, Form } from "semantic-ui-react";

export default function SignUp() {
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
            <Form.Field>
              <label>First Name</label>
              <input placeholder="First Name" />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input placeholder="Last Name" />
            </Form.Field>
            <Form.Field>
              <label>Username</label>
              <input placeholder="Username" />
            </Form.Field>
            <div className="text-center">
              <Button color="black" type="submit" className="">
                <span className="font-cursive text-lg">Submit</span>
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
