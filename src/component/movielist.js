import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Moviecard from './moviecard'

const Movielist = ({list}) => {
    return (
       <Container>
       
       <Row>
           {list.map((elm,index)=><Col md={4} xs={12}><Moviecard  key={index} movie={elm}></Moviecard></Col>)}</Row>
       
       
       </Container>
            
       
    )
}

export default Movielist
