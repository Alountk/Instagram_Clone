import React from "react";
import { Post } from "../../components/post/Post";
import { Container } from "../../components/container/Container";

const style = { margin: "0 auto" };

export const NewsFeed = () => {
  return (
    <Container>
      <div style={style}>
        <Post image="https://placekitten.com/408/287" />
      </div>
      <div style={style}>
        <Post image="https://placekitten.com/408/287" />
      </div>
    </Container>
  );
};
