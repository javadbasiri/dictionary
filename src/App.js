import React,{ useState,useEffect } from "react"
import axios from "axios";
import Header from "./components/Header";
import Definition from "./components/Definition";
import './App.css';

function App() {

  const [word , setWord] = useState("")
  const [meaning , setMeaning] = useState([])

  const dictionaryApi = async()=>{
     await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(res=>setMeaning(res.data))
  }

  console.log(meaning)

  useEffect(()=>{
    dictionaryApi()
  },[word])
 
  return (
    <div className="App">
      <Header word={word} setWord={setWord}/>
      <Definition word={word} meaning={meaning}/>
    </div>
  );
}

export default App;
