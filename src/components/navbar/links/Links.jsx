import Link from "next/link";
import styles from "./link.module.css";
import NavLink from "./navLink/navLink";
import { title } from "process";
import path from "path";

const Links = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  //TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.links}>
      {links.map((link, index) => (
        <NavLink item={link} key={link.title}></NavLink>
      ))}
      {session ? (
        <>
        {isAdmin && <NavLink item={{ title: "admin", path: "/admin" }} />}
        <button className={styles.logout}>Logout</button>
        </>
      ) : (
        <NavLink item={{ item: "Login", path: "/login" }} />
      )}
    </div>
  );
};
export default Links;
