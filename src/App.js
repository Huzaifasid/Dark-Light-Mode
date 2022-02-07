
import { useState } from 'react';
import './App.css';
import Bulb from './Components/Bulb';
import Button from './Components/Button';



function App() {
  const [mode, setMode] = useState('light');
  const [modetxt, setModetxt] = useState('Enable Dark Mode');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setModetxt('Enable Light Mode');
      document.body.style.backgroundColor = '#191919'
    } else {
      setMode('light')
      setModetxt('Enable Dark Mode');
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <Button mode={mode} modetxt={modetxt} toggleMode={toggleMode} />
      <Bulb />

    </>
  );
}

export default App;
