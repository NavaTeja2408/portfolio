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
        <div><Intro /></div>
        <div><Skills  /></div>
        <div><Projects /></div>
        <div><Education /></div>
        <div><Contacts /></div>
        
        
        
        
        
    </div>
  )
}

export default Container