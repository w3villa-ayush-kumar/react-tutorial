import axios from "axios";
import React, { useEffect, useState } from "react";

const GetUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    console.log("Mounted");
    const controller = new AbortController();
    const handleFetch = async () => {
      try {
        const res = await axios.get(url, {
          signal: controller.signal,
        });
        setUsers(res.data);
      } catch (err) {
        if (err.name === "CanceledError") {
          setError("Request Cancel");
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    handleFetch();
    return () => {
      controller.abort();
      console.log("Unmounted");
    };
  }, []);

  return (
    <div>
      <h2>Fetched Users:</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetUser;
