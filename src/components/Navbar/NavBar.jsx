import Link from "next/link";
import styles from "./NavBar.module.scss";
// import Logo from "next/Logo";
const NavBar = () => {
  return (
    <>
      <nav className={styles.Navbar}>
        <div className={styles.logo}></div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/About">About</Link>
          </li>

          <li>
            <Link href="/Contacts">Contacts</Link>
          </li>
          <li>
            <Link href="/locations">Locations</Link>
          </li>
        </ul>
        <div className={styles.SignUp}>
          <Link href="/Login">Login</Link>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
