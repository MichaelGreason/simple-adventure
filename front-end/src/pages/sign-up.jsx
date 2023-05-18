import React from "react";
import { Button, Form } from "semantic-ui-react";

export default function SignUp() {
  return (
    <>
      <Form>
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
