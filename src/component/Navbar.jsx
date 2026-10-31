
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import logo from '../assets/Logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-blue-50 sticky top-0 z-50 w-full">

      <div className="flex gap-8 items-center border-0 py-1 px-1 bg-[#5F9EA0] p-4">

        <img
          src={logo}
          alt="logo"
          className="h-15 w-20 shrink-0"
        />

        {/* Desktop navbar - existing design */}
        <ul className="hidden md:flex w-full h-full text-2x font-bold mb-1 justify-evenly">
          <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
          <li><Link to="/createUser" className="hover:text-gray-200">CreateUser</Link></li>
          <li><Link to="/all" className="hover:text-gray-200">All Users</Link></li>
        </ul>

        <div className="hidden md:block shrink-0">
          <div className="flex items-center gap-3 font-bold">
            <Link to="/login" className="text-black hover:text-gray-200">
              Login
            </Link>

            <Link
              to="/signup"
              className="rounded-md border px-1 py-1 text-[#5F9EA0] hover:bg-gray-100"
            >
              Signup
            </Link>
          </div>
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden ml-auto text-black text-3xl px-2"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#5F9EA0] text-black font-bold p-4">
          <ul className="flex flex-col gap-4">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/createUser" onClick={() => setMenuOpen(false)}>CreateUser</Link></li>
            <li><Link to="/all" onClick={() => setMenuOpen(false)}>All Users</Link></li>
            <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
            <li><Link to="/signup" onClick={() => setMenuOpen(false)}>Signup</Link></li>
          </ul>
        </div>
      )}

    </div>
  );
};

export default Navbar;
