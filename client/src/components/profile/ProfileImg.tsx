import React from "react";
const style = {
  img: {
    borderRadius: "100%",
  },
};
export const ProfileImg = () => {
  return (
    <>
      <div >
        <img style={style.img} src="https://placekitten.com/100/100" />
      </div>
    </>
  );
};
