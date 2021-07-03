import React from 'react'
import { Container } from 'react-bootstrap'
import LOGO from '../assets/logo.svg';
import './Login.css'
import './reset.css'
import { githubProvider, googleProvider } from '../config/authMethods'
import socialMediaAuth from '../service/auth'
import GithubButton from 'react-github-login-button'
import GoogleButton from 'react-google-button'
import KonfabButton from './KonfabButton/KonfabButton'
import AnonButton from './AnonButton/AnonButton'



export default function Login() {
    const handleOnClick = async (provider) => {
        const res = await socialMediaAuth(provider);
        console.log(res);
    };

    return (
        <Container>
            <div class="Heading">Konfab</div>
            <div class="Desc"><i>Customizable, Secure & Private</i></div>
            <img src={LOGO} alt="Konfab Logo" class='LogoCenter' style={{ height: "192px" }}/>
            <div class="row" style={{ padding: '5px' }}><KonfabButton onClick={console.log("Clicked")} type="dark" style={{ width: '100vw' }} label="Use Konfab ID (Login/Register)" /></div>  {/* Konfab Login Setup */}
            <div class="row" style={{ padding:'5px' }}><GithubButton onClick={() => handleOnClick(githubProvider)} type="dark" style={{ width:'100vw' }} label="Login with Github" /></div>
            <div class="row" style={{ padding: '5px' }}><GoogleButton onClick={() => handleOnClick(googleProvider)} type="dark" style={{ width: '100vw' }} label="Login with Google" /></div>
            <div class="row" style={{ padding: '5px' }}><AnonButton onClick={() => handleOnClick('Anonymous')} type="dark" style={{ width: '100vw' }} label="Encrypted Anonymous Chatroom" /></div>
       </Container>
    )
}
