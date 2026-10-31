import React from 'react'
import bg from '../assets/background.png'

const About = () => {
  return (
    <div className="relative isolate min-h-screen w-full overflow-hidden">

      <img
        src={bg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 min-h-screen w-full bg-black/30 px-6 py-16">

        <h1 className="text-4xl font-bold text-center text-black/70">
          About BookNest
        </h1>

        <p className="mt-4 text-lg text-center text-white">
          Making Library Management Simpler
        </p>

        <div className="mx-auto mt-10 max-w-5xl space-y-8">

          <section className="rounded-xl bg-white/70 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-[#5F9EA0]">
              Who We Are
            </h2>

            <p className="leading-7 text-gray-700">
              BookNest is a web-based Library Management System designed
              to simplify student record management. It provides a
              user-friendly platform to create, view, search, sort,
              update, and delete student records in one place.
            </p>
          </section>

          <section className="rounded-xl bg-white/70 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-[#5F9EA0]">
              Our Objectives
            </h2>

            <ul className="list-disc space-y-2 pl-6 leading-7 text-gray-700">
              <li>Organize student information in one place.</li>
              <li>Make searching and sorting records easier.</li>
              <li>Allow users to create and update student details.</li>
              <li>Reduce the effort involved in managing records manually.</li>
              <li>Provide a simple and responsive user interface.</li>
            </ul>
          </section>

          <section className="rounded-xl bg-white/70 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-[#5F9EA0]">
              Technologies Used
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              <div className="rounded-lg border border-gray-200 p-4">
                <h3 className="font-bold text-gray-800">React.js</h3>
                <p className="mt-1 text-gray-600">
                  To build the user interface.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 p-4">
                <h3 className="font-bold text-gray-800">JavaScript</h3>
                <p className="mt-1 text-gray-600">
                  To implement application logic.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 p-4">
                <h3 className="font-bold text-gray-800">Tailwind CSS</h3>
                <p className="mt-1 text-gray-600">
                  To style the pages and make them responsive.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 p-4">
                <h3 className="font-bold text-gray-800">Axios & JSON Server</h3>
                <p className="mt-1 text-gray-600">
                  To send API requests and manage student records.
                </p>
              </div>

            </div>
          </section>

          <section className="rounded-xl bg-[#5F9EA0]/95 p-6 text-center text-black/80 shadow-lg">
            <h2 className="mb-3 text-2xl  text-black/90 font-bold">
              Our Vision
            </h2>

            <p className="leading-7">
              To make library record management more organized,
              convenient, and accessible through a simple digital solution.
            </p>

            <p className="mt-5 text-lg font-semibold">
              BookNest — Organize Better. Manage Smarter.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}

export default About