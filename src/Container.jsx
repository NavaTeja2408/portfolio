import React from 'react'
import Header from './Sourcecode/Header';
import Intro from './Sourcecode/Intro';
import Skills from './Sourcecode/Skills';

import Projects from './Sourcecode/Projects';
import Contacts from './Sourcecode/Contacts';
import Education from './Sourcecode/Education';

const Container = () => {
  return (
    <div>
        <Header />
        <Intro />
        <Skills  />
        <Projects />
        <Education />
        <Contacts />
    </div>
  )
}

export default Container