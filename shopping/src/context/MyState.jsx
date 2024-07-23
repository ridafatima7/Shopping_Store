import React,{ useState } from "react";
import myContext from "./MyContext";

const MyState = (props) => {
    const[mode,setMode]=useState('light');
    const toggle=()=>{
        if(mode==='light'){
            setMode('dark');
            document.body.style.backgroundColor='rgba(17,24,29)'
        }
        else{
            setMode('light');
            document.body.style.backgroundColor='white'
        }
    }
  return (
   <myContext.Provider value={{mode,toggle}}>
    {props.children}
   </myContext.Provider>
  )
}

export default MyState
