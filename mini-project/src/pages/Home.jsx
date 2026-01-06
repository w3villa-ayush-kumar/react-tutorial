import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");

  const [search, setSearch] = useState("");

  const [page, setPage] = useState(0);
  const usersPerPage = 5;

  const isFormValid =
    name.trim() !== "" && email.trim() !== "" && /^[^@]+@[^@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { name, email, dob };

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
    setDob("");
  };

  const filteredUsers = search.trim()
    ? users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    : users;
  const start = page * usersPerPage;
  const paginatedUsers = filteredUsers.slice(start, start + usersPerPage);

  const handleDelete = (deleteUser) => {
    setUsers(users.filter((user) => user.email !== deleteUser.email));
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div className="min-h-screen bg-linear-to-b from-purple-500 to-slate-800 flex justify-center p-16">
      <div className="w-full bg-white/80 rounded-3xl h-150">
        <div className="flex justify-between px-10 py-4 border-b rounded-t-3xl">
          <h1 className="text-2xl inline font-semibold">User Management</h1>
          <input
            type="text"
            placeholder="Search users by name"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(0);
            }}
            className="w-50 bg-white rounded-xl px-4 py-2.5 text-sm
                       shadow-md focus:shadow-lg focus:ring-2 focus:ring-slate-300 outline-none transition"
          />
        </div>

        <div className="px-10 py-4 border-b">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-17 gap-4 items-end"
          >
            <div className="col-span-12 md:col-span-5">
              <label className="text-xs font-semibold text-slate-600">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full border rounded-xl px-4 py-2.5 text-sm
                         bg-slate-50 placeholder:text-gray-400 shadow-md focus:bg-white
                         focus:ring-2 focus:ring-slate-300 focus:placeholder:text-gray-300 outline-none focus:shadow-lg transition"
              />
            </div>

            <div className="col-span-12 md:col-span-5">
              <label className="text-xs font-semibold text-slate-600">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full border rounded-xl px-4 py-2.5 text-sm
                         bg-slate-50 placeholder:text-gray-400 shadow-md focus:bg-white
                         focus:ring-2 focus:ring-slate-300 focus:placeholder:text-gray-300 outline-none focus:shadow-lg transition"
              />
            </div>
            <div className="col-span-12 md:col-span-5">
              <label className="text-xs font-semibold text-slate-600">
                Date of Birth
              </label>

              <input
                type="date"
                min="1900-01-01"
                max={new Date().toISOString().split("T")[0]}
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className={`mt-1 w-full border border-black rounded-xl px-4 py-2.5 text-sm
    bg-slate-50 shadow-md focus:bg-white
    focus:ring-2 focus:ring-slate-300 outline-none focus:shadow-lg transition
    ${dob ? "text-black" : "text-slate-400"}
  `}
              />
            </div>

            <div className="col-span-12 md:col-span-2">
              <button
                type="submit"
                disabled={!isFormValid}
                className="w-full h-10.5 bg-slate-900 text-white rounded-xl
                         text-sm font-semibold shadow-md
                         disabled:opacity-40 hover:bg-slate-800 hover:scale-105 cursor-pointer transition"
              >
                Add User
              </button>
            </div>
          </form>
        </div>

        <div className="px-10 py-6">
          <div className="overflow-hidden rounded-2xl border shadow-md bg-white">
            <table className="w-full text-sm">
              <thead className="bg-slate-100 text-slate-600">
                <tr>
                  <th className="px-5 py-3 text-left font-semibold">Name</th>
                  <th className="px-5 py-3 text-center font-semibold">Email</th>
                  <th className="px-5 py-3 text-center font-semibold">
                    Date of Birth
                  </th>
                  <th className="px-5 py-3 text-right font-semibold">Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td
                      colSpan="4"
                      className="py-10 text-center text-slate-500"
                    >
                      {search.trim()
                        ? "No users found"
                        : "No users in database"}
                    </td>
                  </tr>
                ) : (
                  paginatedUsers.map((user) => (
                    <tr
                      key={user.email}
                      className="border-t hover:bg-slate-50 transition"
                    >
                      <td className="px-5 py-4 text-slate-800 font-medium">
                        {user.name}
                      </td>
                      <td className="px-5 py-4 text-center text-slate-600">
                        {user.email}
                      </td>
                      <td className="px-5 py-4 text-center text-slate-600">
                        {user.dob}
                      </td>
                      <td className="px-5 py-4 text-right">
                        <button
                          onClick={() => handleDelete(user)}
                          className="text-red-500 hover:text-red-600 text-xs font-semibold hover:scale-110 cursor-pointer transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {users.length > usersPerPage && (
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 0}
                className="px-4 py-2 text-sm rounded-lg bg-slate-200 hover:scale-105 cursor-pointer disabled:opacity-40 transition"
              >
                Prev
              </button>

              <button
                onClick={() => setPage(page + 1)}
                disabled={start + usersPerPage >= filteredUsers.length}
                className="px-4 py-2 text-sm rounded-lg bg-slate-800 hover:scale-105 cursor-pointer text-white disabled:opacity-40 transition"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
