import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import bg from '../assets/background.png'

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
 
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const nameHandle = async (e) => {
    e.preventDefault();

    const payload = { name, email,  password };

    try {
      const res = await axios.get('http://localhost:4000/user');
      const exitingUser = res.data.find((user) => user.email === email);

      if (exitingUser) {
        alert('User already exists');
        return;
      }

      await axios.post('http://localhost:4000/user', payload);
      navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
  
<div
  className="min-h-screen w-full relative isolate overflow-hidden flex justify-center items-center p-4"
  
>
 <img
  src={bg}
  alt="background"
  className="absolute inset-0 w-full h-full object-cover"
/>  <div className="relative z-10 w-full max-w-md border-2 rounded-xl p-6 shadow-lg">

    <h1 className="text-3xl font-bold text-center mb-6">
      Signup
    </h1>

    <form onSubmit={nameHandle} className="flex flex-col gap-3">

      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="w-full border rounded-md p-2"
      />

      
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full border rounded-md p-2"
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your unique password"
        className="w-full border rounded-md p-2"
      />

      <button
        type="submit" 
        className="w-full bg-[#5F9EA0] text-black py-2  rounded-md mt hover:bg-gray-700"
      >
        Submit
      </button>

    </form>
  </div>
</div>
  )}

  export default Signup