
import { useEffect ,useState } from 'react';

import './App.css';

import Listitem from './component/Listitem';

function App() {
  const [data,setdata]=useState([])
  const[ statement, setStatement]=useState('')
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>{
      result.json().then((resp)=>{
        setdata(resp)
      })
    })
    
  },[])
 const onChangeEvent=(event)=>{
  setStatement(event.target.value)
 }
 
  return (
    <div className="App">
    <input  placeholder='enter data' onChange={onChangeEvent}/>
    <Listitem items={data} query={statement}/>
      
    </div>
  );
}

export default App;
