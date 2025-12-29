import { useEffect, useState } from "react";

const GetPost = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
      });
  }, []);

  return (
    <div>
      <h2>Fetched Title:</h2>
      <p>{title}</p>
    </div>
  );
};

export default GetPost;
