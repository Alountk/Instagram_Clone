import React from "react";
import {PostIcon} from './../PostIcon/PostIcon'

import { faThumbsUp, faRetweet } from "@fortawesome/free-solid-svg-icons";

const style = {
  footerPost: {
    display: "flex",
    backgroundColor: "#eee",
    marginLeft: "-15px",
    marginBottom: "-10px",
    width: "calc(100% + 30px)",
  },
};

export const FooterPost= () => {
  return (
      <div style={style.footerPost}>
        <PostIcon icon={faThumbsUp} textFooter={"Like"} />
        <PostIcon icon={faRetweet} textFooter={"Compartir"} />
      </div>
  );
};