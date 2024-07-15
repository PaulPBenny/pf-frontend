import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import Profile from '../components/Profile'
import Myprojects from '../components/Myprojects'




function Dashboard() {
  const [username,setUsername]=useState("")

  useEffect(()=>{
       if(sessionStorage.getItem("exisitingUser")){
         setUsername(JSON.parse(sessionStorage.getItem('exisitingUser')).username)
      }
     },[])
  return (
    <>
      <Header insideDashboard/>
      <Row style={{marginTop:'100px'}}>
        <Col sm={12} md={8}>
          <h2>Welcome <span className='text-warning'>{username}</span></h2>

        {/* Myprojects */}

        <Myprojects/>

        </Col>

       
        <Col sm={12} md={4}>

          {/* Profile */}

          <Profile/>

        </Col>

      </Row>
    </>
  )
}

export default Dashboard