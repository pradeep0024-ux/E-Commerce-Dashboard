import React,{useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'
function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate  = useNavigate();


    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    })
    
    async function getData(){
        console.log("data",name,email,password)
        let result = await fetch('http://localhost:5000/register',{
            method:"post",
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-type':'application/json'
            },
        })
        let response = await result.json();
        console.log(response)
        localStorage.setItem('user',JSON.stringify(response ))
        navigate('/');

    }

    return(
        <div className="signup">
            <h2 className='header'>Nice To Meet You!!</h2>
            <input className="inputField" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
            <input className="inputField" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="inputField" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
            <button className="btn-style" type="button" onClick={getData}>Sign Up</button>
        </div>
    )
}
export default SignUp;