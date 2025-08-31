"use client"
import React from 'react'
import { useState } from 'react';
import { PiFediverseLogoBold } from "react-icons/pi";
import { IoMoonSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { useTheme } from 'next-themes';
import { IoSunnySharp } from "react-icons/io5";
import Link from 'next/link';



interface NavbarProps {
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const { theme, setTheme } = useTheme();
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search.trim())
      return
    onSearch(search); 
    setSearch("")
  };
  
  return (
    <div className={`hidden ${theme === "dark" ? "bg-gray-900" : "bg-white"} md:block ${theme === "dark" ? "border-b-gray-900" : "border-b-gray-300"} border-b py-4`}>
      <div className='flex flex-row justify-between  items-center max-w-7xl mx-auto'>
        <div className='flex items-center text-2xl font-bold gap-2'>
          <div className={`border rounded-full bg-blue-700  p-1`}>
              <PiFediverseLogoBold className={`${theme=== "dark" ? "bg-gray-900" : "bg-white"} rounded-full`}/>
          </div>
          <span className={`${theme === "dark" ? "text-white" : "text-black"}`}>Multiplex</span>
        </div>
        <div className={`${theme === "dark" ? "text-white" : "text-gray-900"} gap-10 flex`}>
          <Link className='text-blue-700 font-semibold' href="/">Home</Link>
          <a className='hover:text-blue-700 font-semibold'  href="">Popular</a>
          <a className='hover:text-blue-700 font-semibold' href="">Top Rated</a>
          <a className='hover:text-blue-700 font-semibold' href="">Upcoming</a>
        </div>
        <form onSubmit={handleSubmit} className='flex items-center gap-2'>
          <button type='button' className={`border-3 py-3 px-2  rounded-lg text-sm  focus:z-10 focus:ring-2 ${theme === "dark" ? "focus:ring-gray-500" : "focus:ring-gray-300"} ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"} ${theme === "dark" ? "text-gray-400" : "text-blue-700"} focus:outline-none ${theme === "dark" ? "border-gray-600" : "border-gray-200"} ${theme === "dark" ? "hover:text-white" : "hover:text-blue-700"} ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"}`} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme === "dark" ? <IoSunnySharp /> : <IoMoonSharp />}</button>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search...' className={`w-full border pl-10 py-2 rounded-lg   ${theme === "dark" ? "bg-gray-700" : "bg-gray-50"} ${theme === "dark" ? "border-gray-600" : "border-gray-300"} ${theme === "dark" ? "placeholder-gray-400" : "placeholder-gray-300"} ${theme === "dark" ? "text-white" : "text-black"} ${theme === "dark" ? "focus:ring-blue-500" : "focus:ring-blue-500"} ${theme === "dark" ? "focus:border-blue-500" : "focus:border-blue-500"}`} />
          <button type='submit' className='relative right-60 '><IoIosSearch /></button>
        </form>
    </div>
    </div>
    
  )
}

export default Navbar
