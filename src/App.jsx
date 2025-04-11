import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name,setName] = useState('');
  const [greeting,setGreeting] = useState('');


  const handleClick = () => {
    if (name === ''){
      setGreeting('名前を入力してください');
    }else{
      setGreeting(`こんにちは、${name}さん！`);
    }
  };

  return(
    <div>
      <h1>名前あいさつアプリ</h1>
      <input
      type="text"
      placeholder='名前を入力'
      value={name}
      onChange={(e)=> setName(e.target.value)}
      />
      <button onClick={handleClick}>送信</button>
      <p>{greeting}</p>
    </div>
  )
};
export default App
