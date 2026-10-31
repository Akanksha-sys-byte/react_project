import React from 'react'
import {useState} from 'react';
import axios from 'axios'
import { useNavigate} from 'react-router-dom';
import bg from '../assets/background.png'


const CreateUser = () => {
  let [name,setName]= useState("")
  let [age,setAge]= useState("")
  let [email,setEmail]= useState("")
  let [contact,setContact]= useState("")
  let navigate = useNavigate()
  let nameHandler =(e)=>{
    e.preventDefault();
    setName(e.target.value);
  }
  let ageHandler=(e)=>{
    e.preventDefault();
    setAge(e.target.value)
  }
  let emailHandler=(e)=>{
    e.preventDefault();
    setEmail(e.target.value);
  }
  let contactHandler=(e)=>{
    e.preventDefault();
    setContact(e.target.value);
  }
  let btnHandler=async(e)=>{
    e.preventDefault();
    let payload={name,email,contact,age};
    try{
      await axios.post('http://localhost:3000/students',payload);
    }catch (err){
      console.log(err);
    }
  
    setName("");
    setContact("");
    setAge("");
    setEmail("");
    navigate('/all')
  };


  return (
    <div
  className="min-h-screen w-full relative isolate overflow-hidden flex justify-center items-center p-4"
  
>
    <img src ={bg}
    className="absolute inset-0 w-full h-full object-cover" alt="backgroound"/>
<div className="relative z-10 w-full max-w-md border-2 rounded-xl p-6 shadow-lg">
        <h1 className ='font-bold text-center text-3xl '>Create User </h1>    
    <form onSubmit={nameHandler} className="flex flex-col gap-3">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Please enter your name " className="w-full border rounded-md p-2" value={name} onChange={nameHandler} />
          
            <label  htmlFor="email">Email</label>
            <input type="email" placeholder="Email" value={email} className="w-full border rounded-md p-2"onChange={emailHandler} />
           
            <label  htmlFor="contact">contact</label>
            <input type="contact" placeholder='your contact number'className="w-full border rounded-md p-2" value={contact}  onChange={contactHandler}></input>
            <label  htmlFor="age">Age</label>
            <input type="text" placeholder="Age" className="w-full border rounded-md p-2" value={age} onChange={ageHandler}/>
            <div className="text-center">
            <button  className="w-full bg-[#5F9EA0] text-black py-2  rounded-md mt hover:bg-gray-700" type="submit" onClick={btnHandler}>Submit</button></div>
        </form>
        </div>
  
    </div>
  )
}

export default CreateUser
