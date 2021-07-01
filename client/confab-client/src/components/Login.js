import React from 'react'
import { Container } from 'react-bootstrap'
import LOGO from '../assets/logo192.png';
import './Login.css'
import { githubkProvider, googleProvider } from '../config/authMethods'
import socialMediaAuth from '../service/auth'


export default function Login() {
    const handleOnClick = async (provider) => {
        const res = await socialMediaAuth(provider);
        console.log(res);
    };

    return (
        <Container>
            <div class="Heading"><h1 >Confab</h1></div>
            <img src={LOGO} alt="Confab Logo" class='LogoCenter'/>
            <div class="row">
                <button onClick={() => handleOnClick(githubkProvider)} type="button" class="btnGithub" style={{ padding: '3px', margin: '5px' }}>Login with Github</button>
                <button onClick={() => handleOnClick(googleProvider)} type="button" class="btnGoogle" style={{ padding: '3px', margin: '5px' }}>Login with Google</button>
            </div>
       </Container>
    )
}
