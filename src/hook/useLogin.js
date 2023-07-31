import { useState } from "react";

export default function useLogin(url) {
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginErr, setLoginErr] = useState("");
  const [data, setData] = useState();

  const Login = (username, password) => {
    if (username === "" || password === "")
      return setLoginErr("Please fill all inputs");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: username,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    setLoginLoading(true);
    fetch(`${url}/api/auth/login`, requestOptions)
      .then((response) => {
        setLoginLoading(false);
        return response.text();
      })
      .then((result) => {
        setLoginErr("");
        result = JSON.parse(result);
        console.log(result);
        if (result.err) setLoginErr(result.err);
        else setData(result);
      })
      .catch((error) => {
        console.log("error", error);
        setLoginErr("Can't reach server");
        setLoginLoading(false);
      });
  };
  return { Login, loginLoading, data, loginErr };
}
