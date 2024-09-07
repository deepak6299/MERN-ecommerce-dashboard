import React from 'react'
import { useNavigate,Outlet, Navigate } from 'react-router-dom'
export default function PrivateComponent() {

    const auth=localStorage.getItem("users")
  return (
    auth?<Outlet/>:<Navigate to="/signin"/>
   
  )
}
