import useFormInput from "hooks/useFormInput";
import React, { useState } from "react";

const Form = () => {
  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const email = useFormInput("");
  const password = useFormInput("");

  const [gender, setGender] = useState("");
  const [state, setState] = useState("");
  const [error, setError] = useState("");

  const progLang = ["React", "JavaScript", "Tailwind CSS", "Bootstrap"];
  const [selected, setSelected] = useState([]);

  const handleCheckboxChange = (lang) => {
    setSelected((prev) =>
      prev.includes(lang)
        ? prev.filter((item) => item !== lang)
        : [...prev, lang]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
      gender,
      state,
      progLang: selected,
    };

    if (password.value.length < 6) {
      setError("Password is short");
      return;
    }

    setError("");
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>
      <label>
        <p>First Name</p>
        <input type="text" placeholder="First Name" {...firstName} />
      </label>
      <br />
      <label>
        <p>Last Name</p>
        <input type="text" placeholder="Last Name" {...lastName} />
      </label>
      <br />
      <label>
        <p>Email</p>
        <input type="email" placeholder="Email" {...email} />
      </label>
      <br />

      <label>
        <p>Password</p>
        <input type="password" placeholder="Password" {...password} />
      </label>
      {error && <p>{error}</p>}
      <br />

      <div>
        <p>Gender</p>
        <label>
          <input
            type="radio"
            value="Male"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </label>
      </div>

      <label>
        <p>Select your location</p>
        <select value={state} onChange={(e) => setState(e.target.value)}>
          <option value="">Select State</option>
          <option value="Delhi">Delhi</option>
          <option value="UP">UP</option>
          <option value="Noida">Noida</option>
        </select>
      </label>
      <br />

      <div>
        <p>Programming Languages</p>
        {progLang.map((lang) => (
          <label key={lang}>
            <input
              type="checkbox"
              checked={selected.includes(lang)}
              onChange={() => handleCheckboxChange(lang)}
            />
            {lang}
          </label>
        ))}
      </div>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
