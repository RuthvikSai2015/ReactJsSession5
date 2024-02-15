import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useNavigate, useParams, Outlet } from 'react-router-dom'
function Home() {
  return <h1> Home Component </h1>
}
function About() {
  return <h1> About Component </h1>
}
function Blog() {
  return <h1> Blog Component</h1>
}
function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      {/* <Link to="/" > Go Back to Home </Link> */}
      <button onClick={() => navigate('/')} > Go Back to Home </button>
      <h1> Not Found Component </h1>
    </>
  )
}
function NavBar() {
  return (
    <nav>
      <Link to="/"> Home |</Link>
      <Link to="/about"> About |</Link>
      <Link to="/blog"> Blog |</Link>
      <Link to="/posts"> Posts </Link>
    </nav>
  )
}
function Posts() {
  const [content, setContent] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(resp => resp.json())
      .then(json => setContent(json))
  }, []);
  return (
    <>
      <Outlet />
      <ul>
        {
          content.map((post) =>
            <>
              <li> <Link to={`/posts/${post.id}`}>{post.id}</Link></li>
              {/* <li> <Link to={`${post.id}`}> {post.id}</Link></li > */}
            </>
          )
        }
      </ul >
    </>
  )
}
function Post() {
  const [content, setContent] = useState([]);
  const { id } = useParams();
  console.log(`id in post component ----${id}`);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(resp => resp.json())
      .then(json => setContent(json))
  }, [id]);
  return (
    <>
      <p>{content.id}</p>
      <p>{content.body}</p>
    </>
  )
}
export default function ReactRouterExample() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/posts" element={<Posts />} >
          <Route path=":id" element={<Post />} />
        </Route>
      </Routes>

    </div>
  )
}
