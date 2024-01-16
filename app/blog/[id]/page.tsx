import React from "react";
import { posts } from "../../data";
import Image from "next/image";

const singlePost = ({ params: { id } }: any) => {
  const singlePost = posts.find((item) => item.id === id);
  if (!singlePost) {
    return <div> This page does not exist! </div>;
  }

  return (
    <div>
      <div>
        <Image
          src={singlePost.imgUrl}
          width={400}
          height={300}
          alt="singlePost.title"
        />
      </div>
    </div>
  );
};

export default singlePost;
