import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

function LogIn(){
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    },[])

    async function getData(){
      // console.log({email,password})
      let user = await fetch("http://localhost:5000/login",{
        method:"post",
        body:JSON.stringify({email,password}),
        headers:{
            'Content-type':'application/json'
        }
      });
      let response = await user.json();
      console.log("respose",response)
      if(response.name){
        localStorage.setItem('user',JSON.stringify(response));
           navigate('/');
      }else{
        alert("Please Enter Correct Details")
      }
      console.log(response)
    }
    return(
        <div className="login">
        <h1>Nice To See You Again :)</h1> 
        <input className="inputField" type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
        <input className="inputField" type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
        <button className="btn-style" type="button" onClick={getData} > LogIn</button>
        </div>
    )
}
export default LogIn;