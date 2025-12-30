import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const UserWrapper = styled.div`
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

const GetUser = React.memo(() => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    console.log("Mounted");

    const controller = new AbortController();

    const handleFetch = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await axios.get(url, {
          signal: controller.signal,
        });
        setUsers(res.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          setError("Request cancelled");
        } else {
          setError(err.message || "Something went wrong");
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
    <UserWrapper>
      <h2>Fetched Users</h2>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} — {user.email}
            </li>
          ))}
        </ul>
      )}
    </UserWrapper>
  );
});

export default GetUser;
