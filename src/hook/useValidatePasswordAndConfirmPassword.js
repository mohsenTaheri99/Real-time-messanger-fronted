import { useEffect, useState } from "react";

export default function useValidatePasswordAndConfirmPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");

  useEffect(() => {
    setPasswordErr("");
    setConfirmPasswordErr("");
    if (password !== confirmPassword && confirmPassword.length !== 0)
      setConfirmPasswordErr("Password and confirm password does not match");
    if (password.length <= 4 && password.length !== 0)
      setPasswordErr("Password must be at least 5 characters ");
  }, [password, confirmPassword]);

  return {
    password,
    setPassword,
    passwordErr,
    confirmPassword,
    setConfirmPassword,
    confirmPasswordErr,
  };
}
