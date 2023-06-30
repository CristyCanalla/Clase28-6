import {useState, useRef, useEffect} from 'react'

const Contador = () => {

 const timer = useRef(null);
 const [cont, setCont]=useState(0);

 useEffect(()=>{
 timer.current= setInterval(()=>{
    setCont((prevCont)=> prevCont +1);
 }, 3000);

 return()=>{
    clearInterval(timer.current)
 };
 
 }, []);
console.log("me renderize");
 const handleClick=()=>{
    clearInterval(timer.current);
 };


  return (
    <div>
      <h3>Contador: {cont}</h3>
      <button onClick={handleClick}>STOP!</button>
    </div>
  )
}

export default Contador
