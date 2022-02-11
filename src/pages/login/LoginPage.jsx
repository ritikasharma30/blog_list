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
import { PasswordInvisible } from "../../components/assets/PasswordInvisible";
import { PasswordVisible } from "../../components/assets/PasswordVisible";
const LoginPage = () => {
  const {
    validateEmail,
    handleChange,
    userDetail,
    handleSubmitLogin,
    showPassowrd,
    handleShowPassword,
    validatePassword,
  } = useAuth();
  return (
    <div className="authInner">
      <h2>Log In</h2>
      <Form className="form">
        <FormGroup>
          <Label className="authInnerlabel" for="exampleEmail">
            Username
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
          <div>
            <Input
              type={showPassowrd ? "text" : "password"}
              name="password"
              id="examplePassword"
              placeholder="********"
              valid={userDetail.validate.passwordState === "has-success"}
              invalid={userDetail.validate.passwordState === "has-danger"}
              value={userDetail.password}
              onChange={(e) => {
                validatePassword(e);
                handleChange(e);
              }}
            />
            <div>
            <i
              style={{
                float: "right",
                marginRight: "40px",
                marginTop: "-30px",
                cursor: "pointer",
              }}
              onClick={handleShowPassword}
            >
              {showPassowrd ? <PasswordVisible /> : <PasswordInvisible />}
            </i>
            </div>
            <FormFeedback>Password should be 8 digits</FormFeedback>
            <FormFeedback valid>That's correct!</FormFeedback>
          </div>
        </FormGroup>
        <div className="SubmitBtn">
          <Button
            type="button"
            color="primary"
            onClick={() => handleSubmitLogin()}
          >
            Submit
          </Button>
          <div>
            First time user <a href="/sign-up">SignUp</a>
          </div>
        </div>
      </Form>
    </div>
  );
};
export default LoginPage;
