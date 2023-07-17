import Link from "next/link";
import styles from "./NavBar.module.scss";
import { FaRegUser, FaRegBell } from "react-icons/fa6";
import { LuLogIn } from "react-icons/lu";
import { useRouter } from "next/router";
import { createContext } from "react";

export const animal = createContext("elefante");
const NavBar = ({ setAuthUser, AuthUser }) => {
  const onHandleClick = () => {
    router.push("/login");
    setAuthUser(false);
  };
  const router = useRouter();
  return (
    <>
      <nav className={styles.Navbar}>
        <div className={styles.logo}>
          <img src="/logo.svg" alt="blue logo" />
        </div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>

          <li>
            <Link href="/contacts">Contacts</Link>
          </li>
          <li>
            <Link href="/locations">Locations</Link>
          </li>
          <li>
            <Link href="/products">products</Link>
          </li>
        </ul>
        <div className={styles.userActions}>
          <div className={styles.Notification}>
            <FaRegBell />
          </div>
          <div className={styles.SignUp}>
            <Link href="/login">
              {AuthUser ? <FaRegUser /> : <LuLogIn onClick={onHandleClick} />}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
