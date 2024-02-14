import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
function Home() {
  return <h1> Home Component </h1>
}
function About() {
  return <h1> About Component </h1>
}
function Blog() {
  return <h1> Blog Component</h1>
}
function NotFound(){
  return <h1> Not Found Component </h1>
}
function NavBar(){
   return (
    <nav>
      <Link to="/"> Home </Link><br/>
      <Link to="/about"> About </Link><br/>
      <Link to="/blog"> Blog </Link><br/>
    </nav>
   )
}
export default function ReactRouterExample() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element = {<About/>}/>
        <Route path="/blog" element = {<Blog/>}/>
        <Route path="*" element = {<NotFound/>}/>
      </Routes>

    </div>
  )
}
