import React,{ useState,useEffect,useContext } from 'react'
import './Hooks.css';

export default function Hooks() {
     
     const [age,setAge] = useState(20)
  
     const [siblingsNum,setSiblingsNum] = useState(2)  
     const [count,setCount] = useState(0);
  
     const handleClick=() => setAge(age+1)

  
      const handleSiblingsNum=() => setSiblingsNum(siblingsNum+1)
 
  
      const [state,setState] = useState({age:20, siblingsNum:2})
     /* const { age,siblingsNum } = state
      const handleClick =(val) =>{
       
         setState({
             ...state,
             [val]: state[val]+1
            })*/
    
    
       useEffect(()=>{
        document.title = `Clicked ${count} times`;

      }
      )

   
        return (
            <div>
               <p> Today I am {age} years of age </p>
               <p> I have {siblingsNum} siblings </p>
               
                    <button onClick={handleClick}>Get older!</button>
                    <button onClick={handleSiblingsNum}>More siblings!</button>
               
                   <button onClick={()=>{setAge(prev=>prev+1)}}>Get older!</button>
        <button onClick={()=>{setSiblingsNum(siblingsNum+1)}}>More siblings!</button><br /> 
            
            
             <p>count value is {count}</p>
            <button onClick={()=>{setCount(0)}}>Reset</button>
            <button onClick={()=>{setCount(prev=>prev+1)}}>Plus</button>
            <button onClick={()=>{setCount(count-1)}}>Minus</button>

            
            </div>
    
        )
        }