import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'




function Header({insideDashboard}) {
  return (
    <div>
        <Navbar className="bg-body-tertiary  top-0 w-100">   
        <Container>
          <Navbar.Brand>
          <Link to={'/'} style={{textDecoration:"none",color:'black',fontSize:'30px'}}><i class="fa-solid fa-list-check fa-xs me-2 "></i> Project Fair</Link>
           
          </Navbar.Brand>
          {
            insideDashboard && 
            <button className='btn btn-outline align-items-right border'>Logout</button>
          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header