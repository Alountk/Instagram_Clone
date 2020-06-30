import React from "react";
import { ProfileImg } from "../../components/profile/ProfileImg";
import { Button } from "../../components/button/Button";
import { Card } from "../../components/card/Card";

const style = {
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: '10px',
  },
  container: {
    padding: "15px",
  },
};

export const Profile = () => {
  return (
    <div style={style.container}>
      <div style={style.row}>
        <ProfileImg />
        <Button>Agregar</Button>
      </div>
      <div style={style.row}>
        <Card><img src="https://placekitten.com/100/100" /></Card>
        <Card><img src="https://placekitten.com/100/100" /></Card>
        <Card><img src="https://placekitten.com/100/100" /></Card>
      </div>
      <div style={style.row}>
        <Card><img src="https://placekitten.com/100/100" /></Card>
        <Card><img src="https://placekitten.com/100/100" /></Card>
        <Card><img src="https://placekitten.com/100/100" /></Card>
      </div>
    </div>
  );
};
