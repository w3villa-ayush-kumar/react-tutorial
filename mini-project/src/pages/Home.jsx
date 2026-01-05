import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [search, setSearch] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [filterUser, setFilterUser] = useState([]);

  const isFormValid =
    name.trim() !== "" && email.trim() !== "" && /^[^@]+@[^@]+$/.test(email);
  const isSearchValid = search.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { name, email };

    const emailExists = users.some(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );

    if (emailExists) {
      alert("Email already exists");
      return;
    }

    setUsers([...users, newUser]);
    setName("");
    setEmail("");
  };

  const handleSearch = () => {
    setHasSearched(true);
    setFilterUser(
      users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  const handleDelete = (deleteUser) => {
    const updatedUsers = users.filter(
      (user) => user.email !== deleteUser.email
    );
    setUsers(updatedUsers);

    if (hasSearched) {
      setFilterUser(
        updatedUsers.filter((user) =>
          user.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500">
      <div className="w-full max-w-md bg-gray-100 p-6 rounded-4xl border space-y-6 my-5">
        <h1 className="text-2xl font-bold text-center">User UI</h1>

        <div className="space-y-3">
          <h2 className="font-medium">Add User</h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded px-3 py-2 text-sm focus:bg-white"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded px-3 py-2 text-sm focus:bg-white"
            />

            <button
              type="submit"
              disabled={!isFormValid}
              className="w-full border rounded py-2 text-sm disabled:opacity-40 hover:bg-gray-300 hover:-translate-0.5"
            >
              Submit
            </button>
          </form>
        </div>
        <h2 className="font-medium">Search User</h2>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Search users"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm focus:bg-white"
          />

          <button
            onClick={handleSearch}
            disabled={!isSearchValid}
            className="w-full border rounded py-2 text-sm disabled:opacity-40 hover:bg-gray-300 hover:-translate-0.5"
          >
            Search
          </button>
        </div>

        <ul className="space-y-2 text-sm">
          {hasSearched && filterUser.length === 0 && (
            <li className="text-gray-500 text-center">User not found</li>
          )}

          {hasSearched &&
            filterUser.map((user) => (
              <li
                key={user.email}
                className="flex justify-between items-center bg-white border rounded px-3 py-2"
              >
                <span>
                  {user.name} — {user.email}
                </span>
                <button
                  onClick={() => handleDelete(user)}
                  className="text-xs underline text-red-500 font-medium cursor-pointer hover:scale-105"
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
