"use client"
import { useState } from 'react'
import Display from '@/components/Display'
import Navbar from '@/components/Navbar'
import Nav from '@/components/Nav'
import { useTheme } from 'next-themes'


const Home = () => {
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <div className={`${theme === "dark" ? "bg-slate-800" : "bg-white"}`}>
      <Navbar onSearch={setSearchTerm}/>
      <Nav onSearch={setSearchTerm}/>
      <Display searchTerm={searchTerm}/>
    </div>
  )
}

export default Home 
