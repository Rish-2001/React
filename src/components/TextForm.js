import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpclick=()=>{
    // console.log("Uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    
  }
  const handleLoclick=()=>{
    // console.log("Uppercase was clicked");
    let newText=text.toLowerCase();
    setText(newText);
    
  }
  const handleClearclick=()=>{
    // console.log("Uppercase was clicked");
    let newText="";
    setText(newText);
    
  }
  const handleCopy=()=>{
    // console.log("Uppercase was clicked");
    let newText=document.getElementById("mybox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    
    
  }
  const handleExtraspace=()=>{
    // console.log("Uppercase was clicked");
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    
  }

  const handleOnchange=(event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }

  const[text,setText]=useState("Enter text here..");
//   text="new text" //wrong way to change the state
//   setText("new text")  //correct way to change the state
  return (
    <>
    
    <div>
   <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnchange} id="mybox" rows="8"></textarea>
</div>
  <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
  <button className="btn btn-primary" onClick={handleLoclick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleClearclick}>Clear Text</button>
  <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary mx-2" onClick={handleExtraspace}>Remove Extra space</button>
    </div>

    <div className="container my-3">
         <h1>Your Text Summary </h1>
         <p>{text.split(" ").length} and {text.length} Characters</p>
         <p>{0.008 * text.split(" ").length} Minutes Read</p>
         <h2>Preview</h2>
         <p>{text}</p>
    </div>
    </>
  )
}

