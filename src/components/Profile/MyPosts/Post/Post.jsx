/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import bg from "../../../../assets/images/bg.jpg";
import s from "./Post.module.css";
import logo2 from "../../../../assets/images/logo2.jpg";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={logo2} />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
