import React, { useState } from "react";
import ParentContainer from "./components/ParentContainer";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import './App.css'

function App() {
  const [data, setData] = useState('');

  function handleClick(val){
    if(val==='='){
        setData(eval(data));
        // Math.js
    } else if(val === 'C'){
        setData("");
    } else if(val === '<X'){
      let result = data + ''
      setData(result.slice(0,-1));
    }else{
      setData(data+val);
    }
  }

  return (
      <ParentContainer >
          {/* whatever we write here, will become a children prop for container/component  */}
          <Display data={data}/>
          <Buttons btnClick={handleClick}/>
      </ParentContainer>
  
  );
} 

export default App;
