import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { BiLogoMicrosoft } from "react-icons/bi";
import { FaBlog } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/about" className={styles.navItem}>
        <BiSolidUser className={styles.icon} />
        <span className={styles.navTitle}>About</span>
      </Link>
      <Link href="/about" className={styles.navItem}>
        <FaBlog className={styles.icon} />
        <span className={styles.navTitle}>Blog</span>
      </Link>
      <Link href="/" className={styles.navItem}>
        <BiSolidHomeAlt2 className={styles.icon} />
        <span className={styles.navTitle}>Home</span>
      </Link>
      <Link href="/projects" className={styles.navItem}>
        <BiLogoMicrosoft className={styles.icon} />
        <span className={styles.navTitle}>Projects</span>
      </Link>
      <Link href="/projects" className={styles.navItem}>
        <IoLogoWhatsapp className={styles.icon} />
        <span className={styles.navTitle}>Contact</span>
      </Link>
    </div>
  );
};

export default Navbar;
