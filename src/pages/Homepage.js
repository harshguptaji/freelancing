import React from 'react'
import About from '../Components/About';
import Application from '../Components/Application';
import Blog from '../Components/Blog';
import Company from '../Components/Company';
import Contact from '../Components/Contact';
import Distribution from '../Components/Distribution';
import Distributors from '../Components/Distributors';
import FAQ from '../Components/FAQ';
import Feedback from '../Components/Feedback';
import Finder from '../Components/Finder';
// import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Key from '../Components/Key';
// import Navbar from '../Components/Navbar';

const Homepage = () => {
  return (
    <>
    <Header/>
    <About/>
    <Distributors/>
    <Finder/>
    <Application/>
    <Company/>
    <Distribution/>
    <Key/>
    <Blog/>
    <Contact/>
    <FAQ/>
    <Feedback/>
    </>
  )
}

export default Homepage
