"use client"
import React, { useState, useEffect } from 'react'
import { IoMoonSharp } from "react-icons/io5";
import { HiSearch } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import { PiFediverseLogoBold } from "react-icons/pi";
import { useTheme } from 'next-themes';
import { IoSunnySharp } from "react-icons/io5";



interface NavbarProps {
  onSearch: (query: string) => void;
}

const Nav: React.FC<NavbarProps> = ({ onSearch }) => {
  const [menu, setMenu] = useState(false)
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState("");
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!search.trim())
        return
      onSearch(search); 
      setSearch("")
      };

  useEffect(() => setMounted(true), []);

  if (!mounted) return null
  return (
    <div className={`block ${theme=== "dark" ? "bg-gray-900" : "bg-white"} ${theme=== "dark" ? "border-b-none" : "border-b"} md:hidden border-b-gray-300 px-4 py-4`}>
      <div className='flex items-center justify-between'>
        <div className='flex items-center text-2xl font-bold gap-2'>
          <div className={`border rounded-full bg-blue-700  p-1`}>
              <PiFediverseLogoBold className={`${theme=== "dark" ? "bg-gray-900" : "bg-white"} rounded-full`}/>
          </div>
          <span className=''>Multiplex</span>
        </div>
        <div className='flex flex-row gap-4'>
          <button type='button' className={`border p-2 border-gray-200 text-sm  ${theme=== "dark" ? "text-white" : "text-blue-700"} ${theme=== "dark" ? "bg-gray-800" : "bg-gray-200"} rounded-lg`} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme === "dark" ? <IoSunnySharp /> : <IoMoonSharp />}</button>
          <button type='button' className='text-2xl text-gray-500'><HiSearch /></button>
          <button type='button' className={`border p-2 border-gray-200 ${theme=== "dark" ? "bg-transparent" : "bg-gray-100"} text-2xl rounded-lg`} onClick={() => setMenu(!menu)}><FiMenu /></button>
        </div>
      </div>
      <form onSubmit={handleSubmit} className={`${menu ? 'block' : 'hidden'}`}>
        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search...' className={`w-full mt-3 border pl-10 py-1 rounded-lg ${theme=== "dark" ? "bg-gray-700" : "bg-gray-50"} ${theme=== "dark" ? "border-gray-600" : "border-gray-300"} ${theme=== "dark" ? "placeholder-gray-400" : "placeholder-gray-300"} ${theme=== "dark" ? "text-white" : "text-black"} ${theme=== "dark" ? "focus:ring-blue-500" : "focus:ring-blue-400"} placeholder:text-sm ${theme=== "dark" ? "focus:border-blue-500" : "focus:border-blue-400"}`} />
        <button type='submit' className='relative left-3 -top-[26px] text-lg text-gray-400 '><HiSearch /></button>
        <div className={`flex flex-col p-4 border rounded-lg ${theme=== "dark" ? "bg-gray-800" : "bg-gray-100"} ${theme=== "dark" ? "border-gray-700" : "border-gray-50"}`}>
          <a href='/' className='py-2 pl-3 pr-4 rounded text-white bg-blue-700 font-bold'>Home</a>
          <a href='#' className={`py-2 pl-3 pr-4 ${theme=== "dark" ? "text-white" : "text-gray-900"} rounded hover:bg-gray-100 font-bold`}>Popular</a>
          <a href='#' className={`py-2 pl-3 pr-4 ${theme=== "dark" ? "text-white" : "text-gray-900"} rounded hover:bg-gray-100 font-bold`}>Top Rated</a>
          <a href='#' className={`py-2 pl-3 pr-4 ${theme=== "dark" ? "text-white" : "text-gray-900"} rounded hover:bg-gray-100 font-bold`}>Upcoming</a>
        </div>
      </form>
    </div>
  )
}

export default Nav
