import React, { useState ,useEffect} from "react";
import axios from "axios";
import Alert from "../Alert"
import "./Prediction.css";
export default function TodoForm(props) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const [count,setCount]=useState(0);
  const [warning,setWarning]=useState(null);


  // useEffect(() => {
    
  //   if(count >=15)
  //   {
  //     setWarning(3);
  //     <Alert warning={3}/>  
  //   }else if(count >=8)
  //   {
  //     setWarning(2);
  //     <Alert warning={3}/> 
  //   }
  //   else if(count>=3)
  //   {
  //     setWarning(1);
  //      <Alert warning={3}/> 
  //   }
   
  //   // const handleWarning=()=>{

  //   // }

  //   // handleWarning();
  // })
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello world");
    axios.post("http://127.0.0.1:5000/predict",input).then(res=>
    {
      setCount(count+res.data.count);
      console.log(res.data.count);
    })
    if(count >=15)
    {
      setWarning(3);
      // return <Alert warning={3}/>  
    }else if(count >=8)
    {
      setWarning(2);
      // return  <Alert warning={3}/> 
    }
    else if(count>=3)
    {
      setWarning(1);
      //  return <Alert warning={3}/> 
    }
    props.addTodo(input);
    setInput("");
  };

  return (<>
    {warning && <Alert warning={warning}/>}
    <form onSubmit={handleSubmit} className="todo-form">
      
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
        placeholder="Write Comment"
      />
      <button type="submit" className="todo-button">
        Add Comment
      </button>
      <h1>{count}</h1>
      



    </form>
    </>
  );
}
