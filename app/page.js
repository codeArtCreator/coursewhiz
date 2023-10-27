'use client'
import './page.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collaborations from './components/Collaborations'
import StartLearning from './components/StartLearning'
import Achievements from './components/Achievements'
import Categories from './components/Categories'
import Features from './components/Features'
import BecomeInstructor from './components/BecomeInstructor'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Collaborations />
      <StartLearning />
      <Achievements />
      <Categories />
      <Features />
      <BecomeInstructor />
      {/* <Testimonials /> */}
      <Footer />
    </main>
  )
}
