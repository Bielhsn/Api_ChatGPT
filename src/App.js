import {useState} from 'react';
import './App.css';
import axios from 'axios';
function App() {

  const [result, setResult] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleClick = async () => {
    const response = await axios.post('http://localhost:3333/api/call', {prompt: prompt});

    setResult(response.data)
  };

  return (
<div>
  <input type="text" name="" id="" onChange={(e) => setPrompt(e.target.value)}/>
  <button onClick={handleClick}>Enviar</button>
  <div>
    Resultado: {result}
  </div> 
</div>
  );
}

export default App;
