import React, { useRef } from 'react'
import { Button, Container } from 'react-bootstrap'
import Hr from './Hr/Hr'
import './reset.css'
import './KonfabID_Login.css'
import LOGO from '../assets/logo.svg';
import LoginIMG from '../assets/Login.svg'
import signUpIMG from '../assets/signUp.svg'


export default function KonfabID_Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const LuserRef = useRef()
    const LpasswordRef = useRef()

    return (
        <Container>
            <div class="Heading_ID">Konfab ID</div>
            <img src={LOGO} alt="Konfab Logo" class='Logo' style={{ height: "80px" }} />
            <div class="forms-container">
                <div class="signin-signup">
                    <form action="" class="signin-form">
                        <h2 class="Status">Log In</h2>
                        <div class="input-field"><input ref={LuserRef} type="text" placeholder="Konfab ID" /></div>
                        <div class="input-field"><input ref={LpasswordRef} type="password" placeholder="Password" /></div>
                        <Button type="submit" className="w-100 btn btn-dark btnStyle" style={{ fontSize: '30px'}}> Log In</Button>
                    </form>

                    <form action="" class="signup-form">
                        <h2 class="Status">Sign Up</h2>
                        <div class="input-field"><input ref={emailRef} type="email" placeholder="Email ID" /></div>
                        <div class="input-field"><input ref={passwordRef} type="password" placeholder="Password" /></div>
                        <div class="input-field"><input ref={passwordConfirmRef} type="password" placeholder="Confirm Password" /></div>
                        <Button type="submit" className="w-100 btn btn-dark btnStyle" style={{ fontSize: '30px' }}> Sign Up</Button>
                        <p style={{ fontSize: '18px' }}>*Please note that your KonfabID will be created on first Log In.</p>
                    </form>
                    <Hr text="OR" />
                    <Button className="w-100 btn-secondary btn-outline-dark btnStyle" style={{ fontSize: '30px', color: 'white' }}>New? Click here to SignUp.</Button>
                </div>
            </div>
        </Container>
    )
}