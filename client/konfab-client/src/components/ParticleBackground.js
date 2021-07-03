import React from 'react';
import Particles from 'react-particles-js'
import ParticlesConfig from '../config/particle-config'
import './reset.css'

export default function ParticlesBackground () {
    return (
        <div style={{ backgroundColor: "#A6ABA5", position: 'absolute', width: '100vw', height: '100vh', top: 0, bottom: 0, right:0, left:0, zIndex: -1 }}><Particles params={ParticlesConfig}></Particles></div>
    )
}