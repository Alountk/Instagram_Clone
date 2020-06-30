import React from "react";
import { Link } from "react-router-dom";
import { PostIcon } from "../PostIcon/PostIcon";

import { faNewspaper, faUser } from "@fortawesome/free-solid-svg-icons";

const style = {
  link: { color: "#555", textDecoration: "none" },
  navbar: {
    borderBottom: "1px solid #aaa",
    display: "flex",
    padding: "10px 15px",
    width: "100% - 20px",
    justifyContent: "space-between",
  },
};
export const NavBar = () => {
  return (
    <div style={style.navbar}>
      <Link
        style={style.link}
        to="/app/newsFeed"
      >
        <PostIcon icon={faNewspaper} textFooter={"InstaClone"} />
      </Link>
      <Link style={style.link} to="/app/profile">
        <PostIcon icon={faUser} textFooter={"Perfil"} />
      </Link>
    </div>
  );
};
