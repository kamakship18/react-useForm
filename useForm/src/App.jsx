import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
import { useState } from 'react';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    setSubmitted(true);
    console.log(data);
  };

  console.log(errors.email); 

  return (
    <>
      <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
        {submitted && <div className="SUCCESS-MESSAGE">Registration successful</div>}
        <div>
          <label htmlFor="username">First Name</label>
          <input type="text" placeholder="Enter First Name" {...register('username', { required: "Enter the first name" })} />
        </div>

        <span>{errors.username?.message}</span>

        <div>
          <label htmlFor="lastname">Last Name</label>
          <input type="text" placeholder="Enter last Name" {...register('lastname', { required: "Enter the last name" })} />
        </div>

        <span>{errors.lastname?.message}</span>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter email" {...register('email', { required: "Enter the email", pattern:{value:/^\S+@\S+$/i, message:"Invalid email"} })} />
        </div>

        <span>{errors.email?.message}</span>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter Password" {...register('password', { required: "Enter the password",
        minLength:{value:4,message:"Password must be more than 4 characters"},
        maxLength:{value:20,message:"Password must be less than 20 characters"} })} />
        </div>

        <span>{errors.password?.message}</span>

        <button type="submit">Registration</button>
      </form>
    </>
  );
}

export default App;
