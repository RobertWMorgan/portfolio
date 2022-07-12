import React from 'react'
import linkedin from '../images/linkedin_logo.png'
import github from '../images/github_logo.png'

const Sidebar = () => {

  return (
    <section id='sidebar'>
      <button className='logo_buttons' id='mail' onClick={() => {
        window.location = 'mailto:robert.morgan0703@gmail.com'
      }}>
      </button>
      <button className='logo_buttons' id='github' onClick={() => window.open('https://github.com/RobertWMorgan')}>
      </button>
      <button className='logo_buttons' id='linkedin' onClick={() => window.open('https://www.linkedin.com/in/robertwmorgan-73/')}>
      </button>

    </section>

  )
}
export default Sidebar