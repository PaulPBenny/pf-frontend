import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import projectpic from '../assets/mernp.jpg'
import { BASEURL } from '../services/BaseURL';





function ProjectCard({project}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={project?`${BASEURL}/uploads/${project?.projectImage}`:projectpic} onClick={handleShow} />
      <Card.Body>
        <Card.Title>{project?.title}</Card.Title>
        
        
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{project?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <img style={{height:'200px',width:'200px'}} src={projectpic}/>
            </Col>

            <Col md={6}>
             <h2 className='fw-bolder'>{project?.title}</h2>
             <p>{project?.overview}</p>
             <p>Language Used: <span className='fw-bolder'>{project?.languages}</span></p>
            </Col>
          </Row>

          <div>
            <a href={project?.github} className='me-3 btn text-dark'><i class="fa-brands fa-github"></i></a>
            <a href={project?.website}  className='me-3 btn text-dark'><i class="fa-solid fa-link"></i></a>
          </div>
        </Modal.Body>
        
      </Modal>
    
    </>
  )
}

export default ProjectCard