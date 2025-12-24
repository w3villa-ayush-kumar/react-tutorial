import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormFormik = () => {
  const progLang = ["React", "JavaScript", "Tailwind CSS", "Bootstrap"];

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "",
      state: "",
      progLang: [],
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().min(6, "Min 6 characters").required("Required"),
      gender: Yup.string().required("Required"),
      state: Yup.string().required("Required"),
      progLang: Yup.array().min(1, "Select one"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Registration Form</h2>

      <input
        name="firstName"
        placeholder="First Name"
        value={formik.values.firstName}
        onChange={formik.handleChange}
      />
      <p>{formik.errors.firstName}</p>

      <input
        name="lastName"
        placeholder="Last Name"
        value={formik.values.lastName}
        onChange={formik.handleChange}
      />
      <p>{formik.errors.lastName}</p>

      <input
        name="email"
        placeholder="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <p>{formik.errors.email}</p>

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <p>{formik.errors.password}</p>

      <div>
        <p>Gender</p>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={formik.handleChange}
        />{" "}
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={formik.handleChange}
        />{" "}
        Female
        <p>{formik.errors.gender}</p>
      </div>

      <select
        name="state"
        value={formik.values.state}
        onChange={formik.handleChange}
      >
        <option value="">Select State</option>
        <option value="Delhi">Delhi</option>
        <option value="UP">UP</option>
        <option value="Noida">Noida</option>
      </select>
      <p>{formik.errors.state}</p>

      <div>
        <p>Programming Languages</p>
        {progLang.map((lang) => (
          <label key={lang}>
            <input
              type="checkbox"
              name="progLang"
              value={lang}
              onChange={formik.handleChange}
            />
            {lang}
          </label>
        ))}
        <p>{formik.errors.progLang}</p>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormFormik;
