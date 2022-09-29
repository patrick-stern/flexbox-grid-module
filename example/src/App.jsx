import { useState } from 'react'
import './App.css'
import { Container, Col, Row } from '@strn_dev/flexbox-grid-module';
// import { Container, Row, Col } from '../../src/';
import '@strn_dev/flexbox-grid-module/dist/index.css';


function App() {
  return (
    <div>
        <Container className="containerPlus">
            <Row justifyContent="space-between">
                <Col sm={12} md={6} lg={3}>
                    <div className='item'></div>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <div className='item'></div>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <div className='item'></div>
                </Col>
            </Row>
         
        </Container>
      
    </div>
  )
}

export default App
