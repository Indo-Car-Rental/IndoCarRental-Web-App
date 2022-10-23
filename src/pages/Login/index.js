import { Container, Row, Input, Label, FormGroup, Button, Alert } from "reactstrap";
import "./style.scss";
import { AiOutlineCar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { postLogin } from "../../redux/actions/postAuth";
import { useNavigate } from "react-router-dom";
import { Link as LinkHome } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const { status } = useSelector((state) => state);
  const isLoggin = status.isLoggin;

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      email: email,
      password: password,
    };

    dispatch(postLogin(payload))
  };

  if (isLoggin) {
    navigate("/", { replace: true });
  }

  return (
    <div className="login">
      <Container>
        <Row>
          <div className="wrapper d-flex flex-lg-row flex-column">
            <div className="left-section justify-content-center d-flex align-items-center">
              <div className="form-container d-flex align-items-start flex-column">
                <AiOutlineCar size={50} />
                <h1>Welcome Back!</h1>
                <FormGroup className="login-form d-flex align-items-start flex-column">
                  <Label for="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Contoh: johndee@gmail.com"
                    onChange={(e) => handleEmail(e)}
                    required
                  ></Input>
                  <Label for="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="6+ karakter"
                    required
                    onChange={(e) => handlePassword(e)}
                  ></Input>
                </FormGroup>
                <Button
                  className="login-button"
                  color="primary"
                  onClick={(e) => handleSubmit(e)}
                >
                  Login
                </Button>
                <p className="login-button-text">
                  Don't have account?{" "}
                  <LinkHome to={"/register"}>Sign Up For Free</LinkHome>
                </p>
                {!!status.loginErrorStatus && (
                  <Alert color="danger">
                    {status.loginErrorStatus.message}
                  </Alert>
                )}
              </div>
            </div>
            <div className="right-section justify-content-center d-flex align-items-center">
              <h1 className="text-logo">Indo Car Rental</h1>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
