import React from 'react';
import Particles from 'react-particles-js'
import ParticlesConfig from '../config/particle-config'

export default function ParticlesBackground () {
    return (
        <div style={{ backgroundColor: "#A6ABA5", position: 'absolute', width: '100%', height: '100%', top: 0, bottom: 0, zIndex: -1 }}><Particles params={ParticlesConfig}></Particles></div>
    )
}