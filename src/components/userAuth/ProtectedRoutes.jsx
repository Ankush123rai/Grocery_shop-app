import React from 'react';
import { Outlet, Navigate } from 'react-router-dom'

export default function ProtectedRoutes() {
  const isLogin = localStorage.getItem('logged')
  
  return (
    
    isLogin ? <Outlet /> :<Navigate to='/login'/>

  )

}