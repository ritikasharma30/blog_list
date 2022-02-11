import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback,
} from "reactstrap";
import useAuth from "../../hooks/useAuth";
const SignupPage = () => {
  const {
    validateEmail,
    handleChange,
    userDetail,
    validateConfirmPassword,
    handleSubmitRegister,
  } = useAuth();

  return (
    <div className="authInner">
      <h2>Sign Up</h2>
      <Form className="form">
        <FormGroup>
          <Label className="authInnerlabel" for="examplePassword">
            First Name
          </Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="first name"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label className="authInnerlabel" for="examplePassword">
            Last Name
          </Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="last name"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label className="authInnerlabel" for="exampleEmail">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="example@example.com"
            valid={userDetail.validate.emailState === "has-success"}
            invalid={userDetail.validate.emailState === "has-danger"}
            value={userDetail.email}
            onChange={(e) => {
              validateEmail(e);
              handleChange(e);
            }}
          />
          <FormFeedback>
            Uh oh! Looks like there is an issue with your email. Please input a
            correct email.
          </FormFeedback>
          <FormFeedback valid>
            That's a good looking email you've got there.
          </FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label className="authInnerlabel" for="examplePassword">
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="********"
            value={userDetail.password}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label className="authInnerlabel" for="examplePassword">
            Confirm Password
          </Label>
          <Input
            type="password"
            name="confirmPassoword"
            id="confirmPassoword"
            placeholder="********"
            valid={userDetail.validate.passwordState === "has-success"}
            invalid={userDetail.validate.passwordState === "has-danger"}
            value={userDetail.confirmPassoword}
            onChange={(e) => {
              validateConfirmPassword(e);
              handleChange(e);
            }}
          />
          <FormFeedback>Password Doesn't Match</FormFeedback>
          <FormFeedback valid>Password Matched!</FormFeedback>
        </FormGroup>
        <div className="SubmitBtn">
          <Button
            color="primary"
            type="button"
            onClick={() => handleSubmitRegister()}
          >
            Submit
          </Button>
          <div>
            Already a user <a href="/login">Login</a>
          </div>
        </div>
      </Form>
    </div>
  );
};
export default SignupPage;
