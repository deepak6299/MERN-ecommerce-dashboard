import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const navigate=useNavigate()

    const handleLogin =async (e) => {
        e.preventDefault()
        console.log( email, password);

        let result=await fetch("http://localhost:5000/login",{
          method:"post",
          body:JSON.stringify({email,password}),
          headers:{
            'Content-Type':'application/json'
        }
        
        
        })
        result=await result.json()
        console.log(result)
        if(result.name){
          localStorage.setItem('users',JSON.stringify(result))
          navigate("/")
        }else{
          alert("Please enter correct details")
        }
      };

      useEffect(()=>{
        const auth=localStorage.getItem("users")
        if(auth){
          navigate("/")
        }
      },[])


  return (
    <form style={{width:"70%",margin:"auto"}} onSubmit={handleLogin}>
    <h3>Login</h3>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="email@test.com"
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleFormControlInput1"
        
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
     
      <button className="btn btn-primary" >Login</button>
   </form>
  )
}
