import React from 'react'
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import {FaSearch , FaHome ,
        FaShoppingCart,FaUser ,
        FaFacebookF,FaFacebookMessenger ,
        FaInstagram, FaApple ,FaGooglePlay} from 'react-icons/fa'
import './Header.css'
import { Link } from 'react-router-dom'

function AppHeader(){
  return (
    <>
    <header className='header-top-strip'>
      <Container className='xxl'>
        <Row>
        <Col xl={4}>
        <div className='part1'>
        <Link href="search#"><FaSearch /></Link>
        <Link href="home"><FaHome  /></Link>
        <Link href="customer"><FaUser/></Link>
        <Link href="shopping">عربة التسوق <FaShoppingCart/> <span className="num">0</span></Link>
        </div>
        </Col>
        <Col xl={4}>
        <p className='text'>التسوق اريح وارخص</p>
        </Col>
        <Col xl={4}>
          <div className='social'>
          <Link href="search#"><FaGooglePlay /></Link>
          <Link href="search#"><FaApple /></Link>
          <Link href="search#"><FaInstagram /></Link>
          <Link href="search#"><FaFacebookMessenger /></Link>
          <Link href="search#"><FaFacebookF /></Link>
        </div>
        </Col>
        </Row>
      </Container>
    </header>
    <header className='header-upper py-3'>
      <Container className='xxl'>
        <Row className='align-item-center'>
          <Col xl={6}>
        <InputGroup className="input ">
        <Form.Control
          type='text'
          className='from-control py-2'
          placeholder="ما الذي تبحث عنه؟"
          aria-label="ما الذي تبحث عنه؟"
          aria-describedby="basic-addon2"
        />
        <span
        className='input-group-text p-2 '
        id="basic-addon2">
        <Link><FaSearch  className='fs-5'/></Link>
        </span>
    </InputGroup>
        </Col>
        <Col xl={4}>
        <img
        className="d-block w-100"
        src={require('../../imge/logo.webp') }
        alt="First slide"
        />
        </Col>
            
        </Row>
    </Container>
    </header>
    <header className='header-bottom py-3 '>
    <Container>
        <Row>
        <Col xxl={12}>
        <div className=' menu-links d-flex align-items-center '>

        </div>
        </Col>
        </Row>
      </Container>
    </header>
</>
  )
}

export default AppHeader