import React, { useEffect, useState } from "react";
import styled from "styled-components";

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  padding: 1rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  border-radius: 1rem;
`;

const GetPost = React.memo(() => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    let isMounted = true;

    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setTitle(data.title);
        }
      })
      .catch((err) => console.error(err));

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <PostWrapper>
      <h2>Fetched Title</h2>
      <p>{title}</p>
    </PostWrapper>
  );
});

export default GetPost;
