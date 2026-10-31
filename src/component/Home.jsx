import React from 'react'
import { Link } from 'react-router-dom'
import bg from '../assets/background.png'

const Home = () => {
  return (
    <div className="relative isolate min-h-screen w-full overflow-hidden">

      <img
        src={bg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 min-h-screen w-full bg-black/30 px-6 py-20  c">

        <h1 className="text-4xl font-bold text-black/70">
          Welcome to BookNest
        </h1>

        <p className="mt-4 text-lg text-white">
          Discover, organize, and manage your library.
        </p>

        <p className="mt-4 max-w-2xl leading-7 text-white">
          BookNest is a simple and user-friendly Library Management System
          designed to make student record management easier. Create, view,
          search, sort, update, and manage student records in one place.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/login"
            className="rounded-lg bg-[#5F9EA0] px-6 py-3 font-semibold text-black/70 hover:bg-[#4d8587]"
          >
            View All Users
          </Link>

          <Link
            to="/signup"
            className="rounded-lg border border-white px-6 py-3 font-semibold text-black/70 hover:bg-white/20"
          >
            Add New User
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">

          <div className="rounded-xl bg-white/60 p-6 text-gray-800 shadow-lg">
            <h2 className="mb-3 text-xl font-bold">
              User Management
            </h2>
            <p className="leading-6">
              Create and maintain student records with ease.
            </p>
          </div>

          <div className="rounded-xl bg-white/60 p-6 text-gray-800 shadow-lg">
            <h2 className="mb-3 text-xl font-bold">
              Quick Search
            </h2>
            <p className="leading-6">
              Find student records using names, email addresses, or IDs.
            </p>
          </div>

          <div className="rounded-xl bg-white/60 p-6 text-gray-800 shadow-lg">
            <h2 className="mb-3 text-xl font-bold">
              Easy Record Updates
            </h2>
            <p className="leading-6">
              Update existing student information or remove records when needed.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Home