import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./blog.module.css";
import { posts } from "../data";
import singlePost from "./[id]/page";

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>blog</h1>
      </div>

      <div className={styles.postBox}>
        {posts.map((post) => (
          <div key={post.id} className={styles.postContainer}>
            <div className={styles.post}>
              <div className={styles.postImg}>
                <Image
                  src={post.imgUrl}
                  width={500}
                  height={350}
                  alt={post.title}
                  className={styles.img}
                />
              </div>

              <div className={styles.postContent}>
                <h2 className={styles.postHeader}>{post.title}</h2>
                <p className={styles.postText}>
                  {post.content.substring(0, 270)} ...
                </p>
                <Link href={`/blog/${post.id}`} className={styles.readBtn}>
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
