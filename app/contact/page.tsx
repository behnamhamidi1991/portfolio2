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

const page = () => {
  return (
    <motion.div
      className={styles.contactPageContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.contactPageHeader}>
        <h1>Contact Me</h1>
        <p>Here&apos;s how you can get in touch with me</p>
      </div>

      <div className={styles.contactPageBody}>
        <div className={styles.socialBox}>
          <div className={styles.socialItem}>
            <a href="https://github.com/behnamhamidi1991" target="_blank">
              <BiLogoGithub className={styles.icon} />
              gitbut
            </a>
          </div>
          <div className={styles.socialItem}>
            <a href="www.linkedin.com/in/behnamhamidi688" target="_blank">
              <BiLogoLinkedin className={styles.icon} />
              linkdin
            </a>
          </div>
          <div className={styles.socialItem}>
            <a
              href="https://www.facebook.com/profile.php?id=100081294337315"
              target="_blank"
            >
              <BiLogoFacebookCircle className={styles.icon} />
              facebook
            </a>
          </div>
          <div className={styles.socialItem}>
            <a href="https://twitter.com/Behnam365857187" target="_blank">
              <BiLogoTwitter className={styles.icon} />
              twitter
            </a>
          </div>
        </div>

        <div className={styles.secondContact}>
          Feel free to contact me via email or cellphone
          <li className={styles.secondContactItem}>
            <BiMailSend className={styles.secondIcon} />{" "}
            behnamhamidi688@gmail.com
          </li>
          <li className={styles.secondContactItem}>
            <BiMobileVibration className={styles.secondIcon} /> +989372700732
          </li>
        </div>
      </div>
    </motion.div>
  );
};

export default page;
