import React, { useState, useCallback, useMemo } from "react";
import styled from "styled-components";
import useFormInput from "hooks/useFormInput";

const FormWrapper = styled.form`
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

const Form = React.memo(() => {
  const { reset: resetFirstName, ...firstName } = useFormInput("");
  const { reset: resetLastName, ...lastName } = useFormInput("");
  const { reset: resetEmail, ...email } = useFormInput("");
  const { reset: resetPassword, ...password } = useFormInput("");

  const [gender, setGender] = useState("");
  const [state, setState] = useState("");
  const [error, setError] = useState("");

  const progLang = useMemo(
    () => ["React", "JavaScript", "Tailwind CSS", "Bootstrap"],
    []
  );

  const [selected, setSelected] = useState([]);

  const handleCheckboxChange = useCallback((lang) => {
    setSelected((prev) =>
      prev.includes(lang)
        ? prev.filter((item) => item !== lang)
        : [...prev, lang]
    );
  }, []);

  const handleSubmit = useCallback(
    (e) => {
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
    },
    [
      firstName.value,
      lastName.value,
      email.value,
      password.value,
      gender,
      state,
      selected,
    ]
  );

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <label>
        <p>First Name</p>
        <input type="text" placeholder="First Name" {...firstName} />
      </label>

      <label>
        <p>Last Name</p>
        <input type="text" placeholder="Last Name" {...lastName} />
      </label>

      <label>
        <p>Email</p>
        <input type="email" placeholder="Email" {...email} />
      </label>

      <label>
        <p>Password</p>
        <input type="password" placeholder="Password" {...password} />
      </label>

      {error && <p>{error}</p>}

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

      <button type="submit">Submit</button>
    </FormWrapper>
  );
});

export default Form;
