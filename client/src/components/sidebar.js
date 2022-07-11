import React from 'react'
import linkedin from '../images/linkedin_logo.png'
import github from '../images/github_logo.png'

const Sidebar = () => {
  return (
    <section id='sidebar'>
      <button className='logo_buttons' onClick={() => window.open('https://github.com/RobertWMorgan')}>
        <img src={github} alt='github' />
      </button>
      <button className='logo_buttons' onClick={() => window.open('https://www.linkedin.com/in/robertwmorgan-73/')}>
        <img src={linkedin} alt='linkedin' />
      </button>
    </section>

  )
}
export default Sidebar