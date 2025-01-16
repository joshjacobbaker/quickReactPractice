import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ExampleComponent from './components/ExampleComponent';

const Home: React.FC = () => (
    <div>
        <h1>Welcome to My React SPA</h1>
    </div>
);

const App: React.FC = () => {
    return (
        <Router>
            <div style={{ background: "teal",textAlign: 'center', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <nav>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li style={{ margin: '10px' }}>
                            <Link to="/">Home</Link>
                        </li>
                        <li style={{ margin: '10px' }}>
                            <Link to="/example">Example</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/example" element={<ExampleComponent title="Default Title" description="yo yo description" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;