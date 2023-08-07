import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpclick=()=>{
    // console.log("Uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    
  }

  const handleOnchange=(event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }

  const[text,setText]=useState("Enter text here..");
//   text="new text" //wrong way to change the state
//   setText("new text")  //correct way to change the state
  return (
    <div>
   <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnchange} id="mybox" rows="8"></textarea>
</div>
  <button className="btn btn-primary" onClick={handleUpclick}>Convert to Uppercase</button>
    </div>
  )
}

