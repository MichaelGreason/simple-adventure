import React from "react";
import { Button, Form } from "semantic-ui-react";

export default function SignUp() {
  return (
    <>
      <div>
        <h1 className="">Sign Up!</h1>
      </div>
      <Form className=" mx-5 mt-20 w-2/5">
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
        <Button inverted color="blue" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
