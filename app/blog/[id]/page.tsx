import React from "react";
import { posts } from "../../data";
import Image from "next/image";
import styles from "./single.module.css";

const singlePost = ({ params: { id } }: any) => {
  const singlePost = posts.find((item) => item.id === id);
  if (!singlePost) {
    return <div> This page does not exist! </div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.postBox}>
        <div className={styles.top}>
          <Image
            src={singlePost.imgUrl}
            width={400}
            height={300}
            alt={singlePost.title}
            className={styles.img}
          />

          <h1 className={styles.title}>{singlePost.title}</h1>
        </div>
        <div className={styles.content}>{singlePost.content}</div>
      </div>
    </div>
  );
};

export default singlePost;
