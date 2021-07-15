import React, { useRef } from 'react'
import { Button, Container } from 'react-bootstrap'
import Hr from './Hr/Hr'
import './reset.css'
import './KonfabID_Login.css'
import Back from '../assets/Back.svg';
import { Link } from 'react-router-dom'


export default function KonfabID_Login() {
    const LuserRef = useRef()
    const LpasswordRef = useRef()

    return (
        <Container>
            <div class="Heading_ID">Konfab ID</div>
            <Link to='/'><img src={Back} alt="Back Button" class='Back' style={{ height: "80px" }} /></Link>
            <div class="forms-container">
                <div class="signin-signup">
                    <form action="" class="signin-form">
                        <h2 class="Status">Log In</h2>
                        <div class="input-field"><input ref={LuserRef} type="text" placeholder="Konfab ID" /></div>
                        <div class="input-field"><input ref={LpasswordRef} type="password" placeholder="Password" /></div>
                        <Button type="submit" className="w-100 btn btn-dark btnStyle" style={{ fontSize: '30px'}}> Log In</Button>
                    </form>
                    <Hr text="OR" />
                    <Link to='/KonfabID_SignUp' style={{textDecoration: 'none'}}><Button className="w-100 btn-secondary btn-outline-dark btnStyle" style={{ fontSize: '30px', color: 'white' }}>New? Click here to SignUp.</Button></Link>
                </div>
            </div>
        </Container>
    )
}