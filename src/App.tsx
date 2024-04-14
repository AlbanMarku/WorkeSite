import { useState } from 'react';
import './App.css';
import MyNavbar from './components/MyNavbar';
import { Container } from 'react-bootstrap';

function App()
{
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <MyNavbar />
      <Container fluid="md" style={{backgroundColor: "red"}}>
        <h1>Hello World</h1>
        <p>Counter: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </Container>
    </div>
  );
}

export default App;
