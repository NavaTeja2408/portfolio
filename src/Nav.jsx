import React from 'react'
import Container from './Container';
import { Route, Routes } from 'react-router-dom';
import About from './Sourcecode/About';

const Nav = () => {
  return (
    <Routes>
        <Route path="/" element={<Container />} />
        <Route path="about/*" element={<About />} />
    </Routes>
  )
}

export default Nav