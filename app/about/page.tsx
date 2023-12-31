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
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
          About Me
        </h1>
        <p className={styles.descriptionText}>
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
            src="/1.jpg"
            height={200}
            width={200}
            alt="profile"
            className={styles.img}
          />

          <Image
            src="/2.jpg"
            height={200}
            width={200}
            alt="profile"
            className={styles.img}
          />

          <Image
            src="/3.jpg"
            height={200}
            width={200}
            alt="profile"
            className={styles.img}
          />

          <Image
            src="/4.jpg"
            height={200}
            width={200}
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
        <p className={styles.description}>
          I work as a frontend developer and these are the main technologies I
          work with. All of these technologies are great and actually the most
          interesting ones as my opinion, but what I enjoy the most is working
          with next.js because it has the most powerful tools and as a developer
          you feel so much comfortable working with it.
        </p>
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

      <motion.div className={styles.learnMore}>
        <div className={styles.header}>
          <h2>Learn More About Me</h2>
        </div>
        <div className={styles.body}>
          <div className={styles.box}>
            <h3 className={styles.boxTitle}>Why I love my job?</h3>
            <p>
              I&apos;ve always enjoyed working on the computer and I can say,
              that I&apos;ve grown up with computers. I did different jobs in my
              life before, but only 2-3 hours of working those jobs could be
              very frustrating for me. But working on computers? Although it may
              seem weird, I can work more than 14 hours on my computer and I
              never get tired. It&apos;s very important, to be passionate about
              something.
            </p>
          </div>
          <div className={styles.box1}>
            <h3 className={styles.boxTitle}>
              Why I chose to be a frontend developer?
            </h3>
            <p>
              Technically I&apos;m a fullstack developer because I learned PHP,
              MySQL, Laravel and some other backend technologies. But to be
              honest, with all these vast various technologies that are there
              today, you can be a fullstack, but it&apos;s better to focus on
              one of them more. If you decide to be a fullstack, I suggest you
              do it, but learn one of them either front or back better and spend
              more time learning it.
            </p>
          </div>
          <div className={styles.box2}>
            <h3 className={styles.boxTitle}>What are my hobbies?</h3>
            My most favourite hobby is reading books, because I&apos;m not even
            able to count the books that changed my path in life in a good way.
            I also love watching movies, and I love listening to music.
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default page;
