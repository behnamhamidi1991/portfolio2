"use client";
import React from "react";
import styles from "./contact.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BiLogoLinkedin,
  BiLogoGithub,
  BiMailSend,
  BiMobileVibration,
  BiLogoFacebookCircle,
  BiLogoTwitter,
} from "react-icons/bi";

const Page = () => {
  return (
    <div className={styles.contactPageContainer}>
      <motion.div>
        <div className={styles.contactHeader}>
          <h1>Contact Me</h1>
          <p>Here&apos;s how you can find me</p>
        </div>

        <div className={styles.contactBody}>
          <a
            className={styles.item}
            href="https://github.com/behnamhamidi1991"
            target="_blank"
          >
            <BiLogoGithub className={styles.icon} />
            Github
          </a>
          <a
            className={styles.item}
            href="www.linkedin.com/in/behnamhamidi688"
            target="_blank"
          >
            <BiLogoLinkedin className={styles.icon} />
            Linkedin
          </a>
          <a
            className={styles.item}
            href="https://www.facebook.com/profile.php?id=100081294337315"
            target="_blank"
          >
            <BiLogoFacebookCircle className={styles.icon} />
            Facebook
          </a>
          <a
            className={styles.item}
            href="https://twitter.com/Behnam365857187"
            target="_blank"
          >
            <BiLogoTwitter className={styles.icon} />
            Twitter
          </a>
        </div>
      </motion.div>
      <motion.div className={styles.telEmail}>
        <div className={styles.telEmailHeader}>
          <h2>Contact Me Via Email and Phone Number</h2>
        </div>
        <div className={styles.telEmailBody}>
          <div className={styles.telEmailItem}>
            <p>
              {" "}
              <BiMailSend /> behnamhamidi1991@gmail.com{" "}
            </p>
          </div>
          <div className={styles.telEmailItem}>
            <p>
              {" "}
              <BiMobileVibration /> +989372700732{" "}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
