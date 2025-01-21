import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import ExamplePage from './pages/ExamplePage'
import RecursionFileStructurePage from './pages/RecursionFileStructurePage'
import './styles/reset.css'
import './styles/tailwind.css'

const Home: React.FC = () => (
  <div>
    <h1>Welcome to My React SPA</h1>
  </div>
)

const App: React.FC = () => {
  return (
    <Router>
      <div
        style={{
          background: 'teal',
          textAlign: 'center',
          height: '100%',
          width: '100%',
          padding: '0px',
          margin: '0px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <nav>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ margin: '10px' }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ margin: '10px' }}>
              <Link to="/example">Example</Link>
            </li>
            <li style={{ margin: '10px' }}>
              <Link to="/recursion">Recursion</Link>
            </li>
          </ul>
        </nav>
        {/* TODO */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/example" element={<ExamplePage />} />
          <Route path="/recursion" element={<RecursionFileStructurePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
