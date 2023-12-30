import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { BiLogoMicrosoft } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.navItem}>
        <BiSolidHomeAlt2 />
      </Link>
      <Link href="/about" className={styles.navItem}>
        <BiSolidUser />
      </Link>
      <Link href="/projects" className={styles.navItem}>
        <BiLogoMicrosoft />
      </Link>
    </div>
  );
};

export default Navbar;
