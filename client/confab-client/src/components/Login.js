import React from 'react'
import { Container } from 'react-bootstrap'
import LOGO from '../assets/logo192.png';
import './Login.css'
import { githubProvider, googleProvider } from '../config/authMethods'
import socialMediaAuth from '../service/auth'
import GithubButton from 'react-github-login-button'
import GoogleButton from 'react-google-button'


export default function Login() {
    const handleOnClick = async (provider) => {
        const res = await socialMediaAuth(provider);
        console.log(res);
    };

    return (
        <Container>
            <div class="Heading">Confab</div>
            <div class="Desc"><i>Customizable, Secure & Private</i></div>
            <img src={LOGO} alt="Confab Logo" class='LogoCenter'/>
            <div class="row">
                <GithubButton onClick={() => handleOnClick(githubProvider)} type="dark" style={{ padding: '3px', margin: '5px', width:'100vw' }} />
                <GoogleButton onClick={() => handleOnClick(googleProvider)} type="dark" style={{ padding: '3px', margin: '5px', width: '100vw' }} />
            </div>
       </Container>
    )
}
