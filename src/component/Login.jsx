import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import bg from '../assets/background.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword]=useState('');
  const [error,setError] =useState('');
  const [isloding,setIsloading]=useState('');


  const navigate = useNavigate();
  const ADMIN_EMAIL = 'admin@booknest.com';
const ADMIN_PASSWORD = 'Admin@47';

  const emailHandler = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    setError('');
  };

  

const btnHandler = async (e) => {
  e.preventDefault();
  setError('');
  setIsloading(true);

  try {
    // Admin login
    if (
      email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase() &&
      password === ADMIN_PASSWORD
    ) {
      localStorage.setItem('isAdmin', 'true');
      navigate('/all', { replace: true });
      return;
    }

    // Registered member login
    const res = await axios.get('http://localhost:4000/user');

    const user = res.data.find(
      (u) =>
        u.email?.trim().toLowerCase() === email.trim().toLowerCase() &&
        u.password === password
    );

    if (user) {
      localStorage.removeItem('isAdmin');
      navigate('/', { replace: true });
    } else {
      localStorage.removeItem('isAdmin');
      setError('Invalid Email or Password! Please verify your credentials.');
    }
  } catch (error) {
    console.error('Login error:', error);
    setError(
      'Login failed! Please check if JSON Server is running on port 4000.'
    );
  } finally {
    setIsloading(false);
  }
};


  return (
    <div className="min-h-screen w-full relative isolate overflow-hidden flex justify-center items-center p-4">
      <img src={bg} alt="background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 w-full max-w-md border-2 rounded-xl p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
        <p className="text-medium font-medium text-center mb-6">Please enter your credentials to login.</p>

        <form onSubmit={btnHandler} className="flex flex-col gap-3">
          {error && (
  <p className="text-red-600 text-center mt-3">
    {error}
  </p>
)}
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            className="w-full border rounded-md p-2"
            value={email}
            onChange={emailHandler}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full border rounded-md p-2"
            value={password}
            onChange={passwordHandler}
          />

          <button type="submit" className="w-full bg-[#5F9EA0] text-black py-2 rounded-md mt hover:bg-gray-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
