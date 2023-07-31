import { useState } from "react";

export default function useRegister(url) {
  const [registerLoading, setRegisterLoading] = useState(false);
  const [registerErr, setRegisterErr] = useState("");
  const [data, setData] = useState();

  const register = (username, password) => {
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
    setRegisterLoading(true);
    fetch(`${url}/api/auth/register`, requestOptions)
      .then((response) => {
        setRegisterLoading(false);
        return response.text();
      })
      .then((result) => {
        setRegisterErr("");
        result = JSON.parse(result);
        console.log(result);
        if (result.err) setRegisterErr(result.err);
        else setData(result);
      })
      .catch((error) => {
        console.log("error", error);
        setRegisterErr("Can't reach server");
        setRegisterLoading(false);
      });
  };
  return { register, registerLoading, data, registerErr };
}
