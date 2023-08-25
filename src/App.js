
// import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';




function App() {
  const [mode,setMode]= useState('light');
   const [alert,setalert]=useState(null);

   const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setalert(null);
    },1500);
   }
  
  const toggleMode=()=>{
    if(mode === 'light'){

      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has Enabled","success");
    }
  }
  return (
    <>
  
<Navbar title="Textutils"  Home="Home us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>




<div className="container my-3">

<TextForm  showAlert={showAlert} heading="Enter the text to analyze " mode={mode}/>
{/* <About/> */}
</div>
</>
  );
}

export default App;
