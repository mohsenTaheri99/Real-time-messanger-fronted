import Cookies from "js-cookie";
import {
  AuthContainer,
  InputBox,
  Form,
  LinkTo,
} from "../styles/PageAuth.style";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import useValidateUsername from "../hook/useValidateUsername";
import useValidatePasswordAndConfirmPassword from "../hook/useValidatePasswordAndConfirmPassword";
import useRegister from "../hook/useRegister";
import { useEffect } from "react";
function Register() {
  const token = Cookies.get("token");
  if (token) return <Navigate to="/" replace={true} />;

  const [username, setUsername, usernameErr] = useValidateUsername();
  const {
    password,
    setPassword,
    passwordErr,
    confirmPassword,
    setConfirmPassword,
    confirmPasswordErr,
  } = useValidatePasswordAndConfirmPassword();
  const { register, registerLoading, data, registerErr } = useRegister(
    "http://localhost:9999"
  );
  const history = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (passwordErr !== "" || usernameErr !== "" || confirmPasswordErr !== "")
      return;
    register(username, password);
  };
  useEffect(() => {
    if (!data) return;
    if (data.token) {
      Cookies.set("token", data.token);
      history("/");
    }
  }, [data]);
  return (
    <AuthContainer>
      <h1>My chat app</h1>
      <h2>Register</h2>
      <Form onSubmit={submit}>
        <InputBox>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <label style={username !== "" ? { top: "-5px" } : {}}>Username</label>
        </InputBox>
        <span>{usernameErr}</span>
        <InputBox>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <label style={password !== "" ? { top: "-5px" } : {}}>Password</label>
        </InputBox>
        <span>{passwordErr}</span>
        <InputBox>
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          <label style={confirmPassword !== "" ? { top: "-5px" } : {}}>
            Confirm password
          </label>
        </InputBox>
        <span>{confirmPasswordErr}</span>
        <LinkTo>
          <div style={{ color: "#ff7272", fontSize: "15px" }}>
            {registerErr}
          </div>
        </LinkTo>
        <button disabled={registerLoading} type="submit">
          {registerLoading ? <Loading /> : "Register"}
        </button>
        <LinkTo>
          I have an acc <Link to={"/login"}>Login</Link>
        </LinkTo>
      </Form>
    </AuthContainer>
  );
}

export default Register;
