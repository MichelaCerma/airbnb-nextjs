import { useState } from "react";
import styles from "@/styles/login.module.scss";
import { credentials } from "../mocks/credentials.js";
import { useRouter } from "next/router";
function Login({ setAuthUser }) {
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
        router.push("/dashboard");
        setAuthUser(false);
        localStorage.setItem("auth", true);
      } else throw new Error("Credenziali non valide");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.overlay}> </div>
      <form onSubmit={onHandleSubmit} className={styles.form}>
        <input
          value={username}
          type="text"
          name="username"
          id="username"
          onChange={onHandleUsername}
          className={styles.userName}
          placeholder="insert username"
        />
        <input
          value={password}
          type="password"
          name="password"
          id="password"
          className={styles.password}
          onChange={onHandlePassword}
          placeholder="insert password"
        />
        <input type="submit" value="Log in" />
      </form>
    </>
  );
}
export default Login;
