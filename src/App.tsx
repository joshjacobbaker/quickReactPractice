import React from 'react';
import ExampleComponent from './components/ExampleComponent';

const App: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Welcome to My React SPA</h1>
            <ExampleComponent title='Default Title' description='yo yo description'/>
        </div>
    );
};

export default App;