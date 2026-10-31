import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import bg from '../assets/background.png'


const Alluser = () => {
    let [content, setContent] = useState([])
    let [searchTerm, setSearchTerm] = useState('')
    let [sortBy, setSortBy] = useState('')
    let [sortDirection, setSortDirection] = useState('asc')

    let handleSort = (field) => {
        if (sortBy === field) {
            setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'))
            return
        }
        setSortBy(field)
        setSortDirection('asc')
    }

    let getData = async () => {
        try {
            let response = await axios.get('http://localhost:3000/students')
            console.log(response)
            setContent(response.data)
        } catch (err) {
            console.log(err)
        }
    }
    let deleteHandle =async(id)=>{
    try{
 await axios.delete(`http://localhost:3000/students/${id}`)
 alert("User Deleted")
         await getData()

    
    }catch(err){
  console.log(err)
    }
}
    useEffect(() => {
        getData()
    }, [])

let filteredUsers = content.filter((ele) => {
    let normalizedSearchTerm = searchTerm.toLowerCase()
    return (
        String(ele.id ?? '').toLowerCase().includes(normalizedSearchTerm) ||
        String(ele.name ?? '').toLowerCase().includes(normalizedSearchTerm) ||
        String(ele.email ?? '').toLowerCase().includes(normalizedSearchTerm)
    )
})
let sortedUsers = [...filteredUsers]

if (sortBy) {
    sortedUsers.sort((a, b) => {
        let valueA = a[sortBy]
        let valueB = b[sortBy]

        if (sortBy === 'id' || sortBy === 'age') {
            valueA = Number(valueA) || 0
            valueB = Number(valueB) || 0
            return sortDirection === 'asc' ? valueA - valueB : valueB - valueA
        }

        valueA = String(valueA ?? '').toLowerCase()
        valueB = String(valueB ?? '').toLowerCase()

        return sortDirection === 'asc'
            ? valueA.localeCompare(valueB)
            : valueB.localeCompare(valueA)
    })
}

    return (
        <div
  className="relative isolate min-h-screen w-full overflow-hidden"
  
>

        <img src={bg} alt="background"
        className="absolute inset-0 w-full h-full object-cover" alt="backgroound"/>
        <div className='min-h-screen w-full relative isolate overflow-hidden max-w-6xl mx-auto p-6 bg-no-repeat'  >
            <h1 className="text-2xl font-bold text-center mb-6 ">All Users</h1>
            <div className="mb-6 rounded-xl border-2 border-white/70 p-4  ">
                <h2 className="mb-3 text-sm font-semibold text-white">
                    Search by Name / Email / ID
                </h2>
                <div className="flex flex-col gap-6 sm:flex-row">
                    <input
                        id="user-search"
                        type="text"
                        placeholder="Search by name, email or ID"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="min-w-0 flex-1 rounded-md border border-gray-300  px-3 py-2.5 text-sm text-black shadow-sm transition placeholder:text-gray-400 focus:border-[#5F9EA0] focus:outline-none focus:ring-2 focus:ring-[#5F9EA0]/30"
                    />
                    <select
                        id="user-sort"
                        value={sortBy ? (sortDirection === 'desc' && sortBy === 'id' ? 'id-desc' : sortBy) : ''}
                        onChange={(e) => {
                            let value = e.target.value
                            if (!value) {
                                setSortBy('')
                                setSortDirection('asc')
                                return
                            }
                            if (value === 'id-desc') {
                                setSortBy('id')
                                setSortDirection('desc')
                                return
                            }
                            setSortBy(value)
                            setSortDirection('asc')
                        }}
                        aria-label="Sort users"
                        className="w-full rounded-md border border-gray-300  px-3 py-2.5 text-sm text-gray-800 shadow-sm transition focus:border-[#5F9EA0] focus:outline-none focus:ring-2 focus:ring-[#5F9EA0]/30 sm:w-52"
                    >
                        <option value="">Default order</option>
                        <option value="name">Name A–Z</option>
                        <option value="id">ID ascending</option>
                        <option value="id-desc">ID descending</option>
                    </select>
                </div>
            </div>
            <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200 text-left text-sm ">
                    <thead className="">
                        <tr>
                            <th className="px-6 py-3 font-semibold">
                                <button type="button" onClick={() => handleSort('id')} className="flex items-center gap-1">
                                    ID {sortBy === 'id' ? (sortDirection === 'asc' ? '↑' : '↓') : '↕'}
                                </button>
                            </th>
                            <th className="px-6 py-3 font-semibold">
                                <button type="button" onClick={() => handleSort('name')} className="flex items-center gap-1">
                                    Name {sortBy === 'name' ? (sortDirection === 'asc' ? '↑' : '↓') : '↕'}
                                </button>
                            </th>
                            <th className="px-6 py-3 font-semibold">
                                <button type="button" onClick={() => handleSort('email')} className="flex items-center gap-1">
                                    Email {sortBy === 'email' ? (sortDirection === 'asc' ? '↑' : '↓') : '↕'}
                                </button>
                            </th>
                            <th className="px-6 py-3 font-semibold">
                                <button type="button" onClick={() => handleSort('contact')} className="flex items-center gap-1">
                                    Contact {sortBy === 'contact' ? (sortDirection === 'asc' ? '↑' : '↓') : '↕'}
                                </button>
                            </th>
                            <th className="px-6 py-3 font-semibold">
                                <button type="button" onClick={() => handleSort('age')} className="flex items-center gap-1">
                                    Age {sortBy === 'age' ? (sortDirection === 'asc' ? '↑' : '↓') : '↕'}
                                </button>
                            </th>
                            <th className="px-6 py-3 font-semibold">Action</th>
                            <th className="px-6 py-3 font-semibold">Edit</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white-400">
    {sortedUsers.length > 0 ? (
        sortedUsers.map((ele, index) => (
            <tr key={ele.id || index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-900">
                    {ele.id || index + 1}
                </td>
                <td className="px-6 py-4 text-gray-700">{ele.name}</td>
                <td className="px-6 py-4 text-gray-700">{ele.email}</td>
                <td className="px-6 py-4 text-gray-700">{ele.contact}</td>
                <td className="px-6 py-4 text-gray-700">{ele.age}</td>

                <td>
                    <button
                        className="bg-red-400 px-1.5 py-1.5 border-1 rounded"
                        onClick={() => { deleteHandle(ele.id) }}
                    >
                        delete
                    </button>
                </td>

                <td>
                    <button className="bg-green-500 border-1 px-3 py-1.5 rounded">
                        <Link to={`/edit/${ele.id}`}>Edit</Link>
                    </button>
                </td>
            </tr>
        ))
    ) : (
        <tr>
            <td colSpan="7" className="px-6 py-8 text-center text-gray-500">
                No users found
            </td>
        </tr>
    )}
</tbody>
                   
                </table>
            </div>
        </div>
        </div>
        
            
    )
}

export default Alluser