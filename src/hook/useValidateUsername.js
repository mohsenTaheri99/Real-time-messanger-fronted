import { useEffect, useState } from "react";

export default function useValidateUsername() {
  const [username, setUsername] = useState("");
  const [usernameErr, setUsernameErr] = useState("");

  useEffect(() => {
    setUsernameErr("");
    if (username === "") return setUsernameErr("");
    if (username.length <= 3)
      return setUsernameErr("username must be at least 4 characters ");
  }, [username]);

  return [username, setUsername, usernameErr];
}
