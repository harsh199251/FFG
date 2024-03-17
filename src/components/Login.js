import React from "react";
import css from "./Login.css";
import Button from "./Button";
import { useState } from 'react'

export default function Login() {


    const [data,setdata]=useState({email:"",password:""});
    const handlechange=(e)=>{
        const name = e.target.name;
        const value=e.target.value;
        setdata({...data,[name] : value});
    }
    const handlesubmit = async (e) => {

        e.preventDefault();
    
        try {
          const response = await fetch('https://ffg-z4nr.onrender.com/api/admin-login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: data.email,
              password: data.password,
            }),
          });
    
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Login failed');
          }
    
          const token = await response.json();
          localStorage.setItem('token', token.token);
          alert("ok");
          window.location.href="/adminbaaji"
          // Redirect to the admin dashboard or another page upon successful login
          // You can use React Router for this purpose
          // For example: history.push('/admin-dashboard');
        } catch (error) {
          console.log(error);
          // Handle login failure, show an error message to the user, etc.
        }
      };
  return (
    <>
      <section id="home-l">
        <div class="container">
          <h1>login as Admin</h1>
          <form onSubmit={handlesubmit}>
            <div class="formgrp">
              <input type="text" name="email" onChange={handlechange} value={data.email} placeholder="Enter your UserName" />
            </div>
            <div class="formgrp">
              <input type="text" name="password" onChange={handlechange}  value={data.password} placeholder="enter your password" />
            </div>
            <a href="/log">
              <div>
                <button className='btn'  type="sumit">Login</button>
              </div>
            </a>
          </form>
        </div>
      </section>
    </>
  );
}
