import React from "react";
import { posts } from "../../data";
import Image from "next/image";
import styles from "./single.module.css";
import Link from "next/link";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { FaBlog } from "react-icons/fa";

const singlePost = ({ params: { id } }: any) => {
  const singlePost = posts.find((item) => item.id === id);
  if (!singlePost) {
    return <div> This page does not exist! </div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.postBox}>
        <div className={styles.top}>
          <div className={styles.imageContainer}>
            <Image
              src={singlePost.imgUrl}
              width={400}
              height={300}
              alt={singlePost.title}
              className={styles.img}
            />
            <ul className={styles.hashtags}>
              {singlePost.hashtags.map((hashtag) => (
                <li key={singlePost.id}># {hashtag}</li>
              ))}
            </ul>
          </div>

          <h1 className={styles.title}>{singlePost.title}</h1>
        </div>
        <div className={styles.content}>{singlePost.content}</div>
        <div className={styles.btnContainer}>
          <Link href="/" className={styles.buttomBtn1}>
            <BiSolidHomeAlt2 /> Back To Homepage
          </Link>
          <Link href="/blog" className={styles.buttomBtn2}>
            <FaBlog />
            Back To Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default singlePost;
