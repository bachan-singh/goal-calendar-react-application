// src/Login.js
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

// Define the validation schema using Yup
const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid email address"),
  password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  // Initialize useForm with the validation schema
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      // Send a POST request to your backend API for login
      const response = await axios.post("http://localhost:5000/users/login", data);
      console.log(response.data);
      toast.success('Login successful!')
    } catch (error) {
      console.error("Error during login", error);
      alert("Login failed!");
    }
  };

  return (
    <div className="login-form-container">
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Email field */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        {/* Password field */}
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
