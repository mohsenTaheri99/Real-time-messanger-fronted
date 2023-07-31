import { useEffect, useState } from "react";

export default function useValidateUsername() {
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  useEffect(() => {
    setPasswordErr("");
    if (password === "") return setPasswordErr("");
    if (password.length <= 4)
      return setPasswordErr("Password must be at least 5 characters ");
  }, [password]);

  return [password, setPassword, passwordErr];
}
