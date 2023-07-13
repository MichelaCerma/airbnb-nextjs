import { useState } from "react";
import "../styles/Login.module.scss";
import { credentials } from "../mocks/credentials.js";
import { useRouter } from "next/router";
function Login() {
  const router = useRouter();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onHandleUsername = (e) => {
    setUserName(e.target.value);
  };
  const onHandlePassword = (e) => {
    setPassword(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    try {
      if (
        credentials.username === username &&
        credentials.password === password
      ) {
        router("/Dashboard");
        localStorage.setItem("auth", true);
      } else throw new Error("Credenziali non valide");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <input
        value={username}
        type="text"
        name="username"
        id="username"
        onChange={onHandleUsername}
      />
      <input
        value={password}
        type="password"
        name="password"
        id="password"
        onChange={onHandlePassword}
      />
      <input type="submit" value="Log in" />
    </form>
  );
}
export default Login;
