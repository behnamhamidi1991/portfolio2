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
          <p>Take a look at porjects I&apos;ve done ...</p>
        </div>

        <div className={styles.body}>
          {projects.map((project) => (
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
              className={styles.items}
            >
              <Image
                src={project.imgUrl}
                alt={project.title}
                width={700}
                height={300}
              />
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
