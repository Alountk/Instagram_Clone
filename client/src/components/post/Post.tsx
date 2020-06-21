import React, { FC } from "react";
import { FooterPost } from "../footerPost/FooterPost";

const style = {
  post: {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    padding: "10px 15px",
    marginBottom: '10px'
  },
  footerPost: {
    display: "flex",
    backgroundColor: "#eee",
    // marginLeft: "-15px",
    // marginBottom: "-10px",
    width: "calc(100% + 15px)",
  },
};
interface IPostProps {
  image: string
}
export const Post: FC<IPostProps> = ({ image }) => {
  console.log(image);
  return (
    <div style={style.post}>
      <img src={image} />
      <div style={style.footerPost}>
          <FooterPost />
      </div>
    </div>
  );
};
