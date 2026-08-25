import React from 'react'
import FAQ from './components/FAQ'

function App() {
  return (
    <div>
      <h1>FAQ Accordion</h1>
      <FAQ que="What is FAQ?" ans="Frequently Ask Questions"/>
      <FAQ que="What is Your Skils" ans="I am Full Stack Developer"/>
      <FAQ que="Where do I consuming my Degree" ans="Swaminarayan University x Coding Gita"/>
      <FAQ que="In which Course" ans="CSE-Computer Science Engineering"/>
    </div>
  )
}

export default App