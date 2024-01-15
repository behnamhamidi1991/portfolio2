"use client";
import React from "react";
import { projects } from "../data";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./projects.module.css";
import Link from "next/link";

const Page = () => {
  return (
    <div className={styles.pageContainer}>
      <motion.div
        className={styles.pageTopContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className={styles.header}>
          <h1>Projetcts</h1>
          <p>These are some sample projects I&apos;ve done</p>
        </div>

        <div className={styles.body}>
          {projects.map((project) => (
            <div key={project.id} className={styles.items}>
              <Link href={`/projects/${project.id}`}>
                <Image
                  src={project.imgUrl}
                  width={600}
                  height={400}
                  alt={project.title}
                  className={styles.projectImg}
                />
              </Link>
              <div className={styles.projectContent}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <Link
                  href={`/projects/${project.id}`}
                  className={styles.readBtn}
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
