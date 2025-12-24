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
      <h3>Fetched Title:</h3>
      <p>{title}</p>
    </div>
  );
};

export default GetPost;
