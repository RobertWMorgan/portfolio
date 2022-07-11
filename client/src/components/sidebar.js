const Sidebar = () => {
  return (
    <section id='sidebar'>
      <button className='logo_buttons' onClick={() => window.open('https://github.com/RobertWMorgan')}>
        <img src='/images/github_logo.png' />
      </button>
      <button className='logo_buttons' onClick={() => window.open('https://www.linkedin.com/in/robertwmorgan-73/')}>
        <img src='/images/linkedin_logo.png' />
      </button>
    </section>

  )
}
export default Sidebar