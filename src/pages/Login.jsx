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
import useValidatePassword from "../hook/useValidatePassword";
import useLogin from "../hook/useLogin";
import { useEffect } from "react";

function Login() {
  const token = Cookies.get("token");
  if (token) return <Navigate to="/" replace={true} />;

  const [username, setUsername, usernameErr] = useValidateUsername();
  const [password, setPassword, passwordErr] = useValidatePassword();
  const { Login, loginLoading, data, loginErr } = useLogin(
    "http://localhost:9999"
  );
  const history = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (passwordErr !== "" || usernameErr !== "") return;
    Login(username, password);
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
      <h2>Login</h2>
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
        <LinkTo>
          <div style={{ color: "#ff7272", fontSize: "15px" }}>{loginErr}</div>
        </LinkTo>
        <button disabled={loginLoading} type="submit">
          {loginLoading ? <Loading /> : "Login"}
        </button>
        <LinkTo>
          I don't have an acc <Link to={"/register"}>register</Link>
        </LinkTo>
      </Form>
    </AuthContainer>
  );
}

export default Login;
