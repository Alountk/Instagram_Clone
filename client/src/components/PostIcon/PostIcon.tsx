import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const style = {
  cursor: "pointer",
  flex: 1,
  padding: "10px 15px",
  textAlign: "center",
} as React.CSSProperties

interface IPostIconProps {
  textFooter: string
  icon: any
}

export const PostIcon: FC<IPostIconProps> = (
    props:any
) => {
    const {icon,textFooter} = props

  return (
      <div style={style}><FontAwesomeIcon icon={icon} />{textFooter}</div>
  );
};
