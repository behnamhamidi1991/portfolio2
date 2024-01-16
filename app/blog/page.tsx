import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./blog.module.css";
import { posts } from "../data";

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>BLOG</h1>
        <p>This is the blog page</p>
      </div>

      <div className={styles.postBox}>
        {posts.map((post) => (
          <div key={post.id} className={styles.postContainer}>
            <div className={styles.post}>
              <div className={styles.postImg}>
                <Image src={post.imgUrl} width={500} height={350} alt="" />
              </div>

              <div className={styles.postContent}>
                <h2 className={styles.postHeader}>{post.title}</h2>
                <p className={styles.postText}>{post.content}</p>
                <button>Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
