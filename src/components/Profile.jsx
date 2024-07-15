import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';


function Profile() {

    const [open, setOpen] = useState(false);

  return (
    <div  className="card shadow p-5 mt-5 me-2">
        <div className="d-flex justify-content-between">
         <h1>Profile</h1>
         <button  onClick={() => setOpen(!open)} className='btn btn-outline-primary '><i class="fa-solid fa-angle-down"></i></button>
        </div>

        {/* profilecollapse */}
     
     <Collapse in={open}>
     <div>
            <label>
                <input type="file" style={{display:'none'}}/>
                <img width={'200px'} height={'200px'} className='rounded circle' src="https://image.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg" alt="" />
            </label>
     <div className='mt-3'>

        <input type="text" className='form-control' placeholder="Github"/><br />
        <input type="text" className='form-control' placeholder="Linkedin"/>

        <div className='text-center text-align d-grid'>
            <button className='mt-3 btn btn-warning'>Update</button>
        </div>

     </div>


        </div>

     </Collapse>
    </div>
  )
}

export default Profile