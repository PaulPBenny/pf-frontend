import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link,  useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../services/allAPI'




function Auth({register}) {



  const [userData,setUserData]= useState({
    username:"",email:"",password:""
  })

  const  isRegisterForm = register?true:false

  const Navigate =useNavigate()

  //register

  const handleRegister = async (e)=>{
    e.preventDefault()
    const {username,email,password}=userData

    if( !username || !email || !password){
      alert("please fill the missing fields")
    }else{
      const result = await registerAPI(userData)
      console.log(result);
      if(result.status===200){
        console.log(result);
        alert(`${result.data.username} has registered successfully`)
      setUserData({
        username:"",email:"",password:""
      })
      Navigate('/login')
      }else{
        alert(result.response.data)
        console.log(result);
      }
    }
  }

  //login
  const handlelogin =async(e)=>{
  e.preventDefault()
  const {email,password}=userData

  if(  !email || !password){
    alert("please fill the missing fields")
  }
  else{
    const result=await loginAPI(userData)
    console.log(result)
    if(result.status===200){
      console.log(result)
      //sessionstorage for existing user and token
      sessionStorage.setItem('exisitingUser',JSON.stringify(result.data.exisitingUser))
      sessionStorage.setItem('token',result.data.token)

      setUserData({
        email:"",password:""
      })
      Navigate('/')
    }
    else{
      alert(result.response.data)
      console.log(result);
    }
  }

  }



  return (
    <div style={{width:'100',height:'100vh',marginTop:'100px'}} className='d-flex justify-content-center text-dark'>
      <div className='container w-75'>
        <Link to={'/'}  style={{textDecoration:'none',color:'black'}}><i class="fa-solid fa-arrow-left"></i>Back to home</Link>
        <div className='card shadow p-5 ' style={{backgroundColor:'beige'}}>
          
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <img src="https://adwiz.in/wp-content/uploads/2019/10/mobile-app-development-banner-1.png" alt="" className='rounded-start w-100' />

            </div>

            <div className='col-lg-6'>
              <div className='d-flex align-items-center flex-column'>
                <h1 className='fw-border text-dark mt-2'><i class="fa-solid fa-list-check fa-xs me-2 "></i>Project fair</h1>
                <h5>
                  {
                    isRegisterForm?'sign up to your account':'sign in to your account'
                  }
                </h5>
               <Form className='text-light w-100'>
                {
                  isRegisterForm && 
                  <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Enter username" value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})} />
      </Form.Group>

      
                }
<Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Enter mail" value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Enter password" value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})} />
      </Form.Group>

      {
        isRegisterForm?
        <div>
          <button className='btn btn-dark mb-2' onClick={handleRegister}>Register</button>
          <p style={{color:'black'}}>Already have an account?Click here to <Link to={'/login'} style={{color:'blue'}}>Login</Link></p>
        </div>:
        <div>
          <button className='btn btn-dark mb-2' onClick={handlelogin}>Login</button>
          <p style={{color:'black'}}>New User?Click here to <Link to={'/register'} style={{color:'blue'}}>Register</Link></p>
        </div>
      }





               </Form>
              </div>
            </div>


          </div>
        </div>

      </div>
      

    </div>
  )
}

export default Auth