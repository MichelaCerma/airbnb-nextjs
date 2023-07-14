import { useEffect, useState } from "react";
import { credentials } from "../mocks/credentials";
import { useRouter } from "next/router";
import "../styles/dashboard.module.scss";
export default function Dashboard() {
  const { username, age, profilePic, email } = credentials;
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(JSON.parse(localStorage.getItem("auth")));
  }, []);

  return (
    isLogged && (
      <div className="{styles.dashboard}">
        <p>{username}</p>
        <img src={profilePic} />
        <p>{email}</p>
        <p>{age}</p>
      </div>
    )
  );
}
