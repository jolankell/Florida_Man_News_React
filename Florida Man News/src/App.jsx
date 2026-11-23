import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './components/Home.jsx'
import News from './components/News.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/articles">News</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<News />} />
        </Routes>
        <footer>
          <p>
            Powered by 
            <a href="https://github.com/juliayxhuang/florida-man-api" alt="github api link" target="_blank">
              github.com/juliayxhuang/florida-man-api
            </a>
          </p>
        </footer>
      </BrowserRouter>
    </>
  )
}

export default App
