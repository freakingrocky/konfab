import React, { useRef } from 'react'
import { Button, Container } from 'react-bootstrap'
import Hr from './Hr/Hr'
import './reset.css'
import './KonfabID_Login.css'
import Back from '../assets/Back.svg';
import { Link } from 'react-router-dom'


export default function KonfabID_Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    return (
        <Container>
            <div class="Heading_ID">Konfab ID</div>
            <Link to='/'><img src={Back} alt="Back Button" class='Back' style={{ height: "80px" }} /></Link>
            <div class="forms-container">
                <div class="signin-signup">
                    <form action="" class="signup-form">
                        <h2 class="Status">Sign Up</h2>
                        <div class="input-field"><input ref={emailRef} type="email" placeholder="Email ID" /></div>
                        <div class="input-field"><input ref={passwordRef} type="password" placeholder="Password" /></div>
                        <div class="input-field"><input ref={passwordConfirmRef} type="password" placeholder="Confirm Password" /></div>
                        <Button type="submit" className="w-100 btn btn-dark btnStyle" style={{ fontSize: '30px' }}> Sign Up</Button>
                        <p style={{ fontSize: '18px' }}>*Please note that your KonfabID will be created on first Log In.</p>
                    </form>
                    <Hr text="OR" />
                    <Link to='/KonfabID_Login' style={{textDecoration: 'none'}}><Button className="w-100 btn-secondary btn-outline-dark btnStyle" style={{ fontSize: '30px', color: 'white' }}>Already Have An Account? Click Here To Login.</Button></Link>
                </div>
            </div>
        </Container>
    )
}