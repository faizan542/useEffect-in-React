import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(0);


  useEffect(() => {
    alert("count was changed");
    setColor(color + 1);
  }, [count]);



  return (
    <>
      <Navbar color={"blue" + color} />
      <div>
        {count}
        <button onClick={() => { setCount(count + 1) }}>click me</button>
      </div>
    </>
  )
}

export default App
