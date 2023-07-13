import { useEffect, useState } from "react";
import { credentials } from "../mocks/credentials";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();

  const { username, age, profilePic, email } = credentials;
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(JSON.parse(localStorage.getItem("auth")));
  }, []);

  return isLogged ? (
    <div className="Dashboard">
      <p>{username}</p>
      <img src={profilePic} />
      <p>{email}</p>
      <p>{age}</p>
      <p onClick={() => setIsLogged(false)}>Log Out</p>
    </div>
  ) : (
    router.push("/Login")
  );
}
