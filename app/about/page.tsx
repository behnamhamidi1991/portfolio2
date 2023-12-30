"use client";
import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className={styles.aboutPage}>
      <motion.div
        className={styles.aboutContianer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1>About Me</h1>
        <p>
          I work as a frontend developer, and I&apos;ve been working as a
          freelancer since 2022. I did a few projects in this field and also
          gained experience working with different teams. I&apos;m always open
          to learn new technologies and I&apos;m ready to face any challenges in
          the process of work and learning. I&apos;ve got also ample ability in
          teamwork and always worked as an active team member. I also like
          teaching what I know; so it&apos;s easy for me to support my teammates
          and teach them if they need help. What is for me the most important is
          the discipline, time management and efficient work.
        </p>
        <div className={styles.imageContainer}>
          <Image
            src="/profile.jpg"
            height={300}
            width={300}
            alt="profile"
            className={styles.img}
          />
          <Image
            src="/profile2.jpg"
            height={300}
            width={300}
            alt="profile"
            className={styles.img}
          />
          <Image
            src="/profile3.jpg"
            height={300}
            width={300}
            alt="profile"
            className={styles.img}
          />
        </div>
      </motion.div>

      <motion.div
        className={styles.skillsContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h2 className={styles.skillsTitle}>My Skills</h2>
        <div className={styles.skillItemsContainer}>
          <div className={styles.skillItem}>
            <Image
              src="/html.jpg"
              width={45}
              height={45}
              alt="html"
              className={styles.imgPic}
            />
          </div>
          <div className={styles.skillItem}>
            <Image
              src="/css.jpg"
              width={45}
              height={45}
              alt="html"
              className={styles.imgPic}
            />
          </div>
          <div className={styles.skillItem}>
            <Image
              src="/js.png"
              width={45}
              height={45}
              alt="javascript"
              className={styles.imgPic}
            />
          </div>
          <div className={styles.skillItem}>
            <Image
              src="/typescript.png"
              width={45}
              height={45}
              alt="html"
              className={styles.imgPic}
            />
          </div>
          <div className={styles.skillItem}>
            <Image
              src="/react.png"
              width={45}
              height={45}
              alt="html"
              className={styles.imgPic}
            />
          </div>
          <div className={styles.skillItem}>
            <Image
              src="/next.jpg"
              width={45}
              height={45}
              alt="html"
              className={styles.imgPic}
            />
          </div>
          <div className={styles.skillItem}>
            <Image
              src="/redux.png"
              width={45}
              height={45}
              alt="html"
              className={styles.imgPic}
            />
          </div>
          <div className={styles.skillItem}>
            <Image
              src="/dlframer.jpg"
              width={45}
              height={45}
              alt="html"
              className={styles.imgPic}
            />
          </div>
          <div className={styles.skillItem}>
            <Image
              src="/figma.jpg"
              width={45}
              height={45}
              alt="html"
              className={styles.imgPic}
            />
          </div>
          <div className={styles.skillItem}>
            <Image
              src="/npm.jpg"
              width={45}
              height={45}
              alt="html"
              className={styles.imgPic}
            />
          </div>
          <div className={styles.skillItem}>
            <Image
              src="/yarn.jpg"
              width={45}
              height={45}
              alt="html"
              className={styles.imgPic}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default page;
