import React from "react";
import { post } from "../../data";

const singlePost = ({ params: { id } }: any) => {
  const singlePost = post.find((item) => item.id === id);
  if (!singlePost) {
    return <div> This page does not exist! </div>;
  }

  return (
    <div>
      <div>{singlePost.imgUrl}</div>
    </div>
  );
};

export default singlePost;
