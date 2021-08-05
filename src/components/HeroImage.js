import React from 'react'
import heroImage from '../images/futurama-title.jpeg'

export default function HeroImage() {
    return (
        <img className="hero-image" src={heroImage} alt="Futurama" />
    )
}