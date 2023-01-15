import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import TrainingSection from '../components/Training'
function Training() {
  return (
    <div>
        <Navbar />
        <HeroImage heading='TRAINING.' text='Pre-Flight & In-Flight Trainings.'/>
        <TrainingSection/>
        <Footer/>
    </div>
  )
}

export default Training