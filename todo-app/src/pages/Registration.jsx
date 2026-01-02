import React, { useState } from "react";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [open, setOpen] = useState(false);
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setFirstName("");
    setLastName("");
    setGender("");
    setContact("");
    setEmail("");
    setPassword("");
  };

  return (
    // Added 'main' instead of 'div' for 100 score in Accessibility
    <main>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <br />
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <br />
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        {/* <div>
          <label htmlFor="gender">Gender:</label>
          <br />
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div> */}

        <div>
          <label id="gender">Gender</label>
          <br />
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-labelledby="gender"
            onClick={() => setOpen(!open)}
          >
            {gender || "Select"}
          </button>

          {open && (
            <ul role="listbox">
              {["Male", "Female", "Other"].map((option) => (
                <li
                  key={option}
                  role="option"
                  aria-selected={gender === option}
                  tabIndex={0}
                  onClick={() => {
                    setGender(option);
                    setOpen(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setGender(option);
                      setOpen(false);
                    }
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <label htmlFor="contact">Contact:</label>
          <br />
          <input
            id="contact"
            type="tel"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <br />
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit">Register</button>
      </form>
    </main>
  );
};

export default Registration;
