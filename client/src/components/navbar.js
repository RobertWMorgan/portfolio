import nav from 'react-bootstrap/Nav'
import { Link } from 'react-scroll'



const Navbar = () => {
  return (
    <nav className="navbar-custom navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <ul className="navbar-nav">
        <li className="nav-item nav-link"><Link activeClass="active" to="about" delay={0} spy={true} ><span className='nav-num'>0.1</span> About </Link></li>
        <li className="nav-item nav-link"><Link activeClass="active" to="projects" delay={0} spy={true} ><span className='nav-num'>0.2</span> Projects</Link></li>
        <li className="nav-item nav-link"><Link activeClass="active" to="experience" delay={0} spy={true} ><span className='nav-num'>0.3</span> Experience</Link></li>
        <li className="nav-item nav-link"><Link activeClass="active" to="interests" delay={0} spy={true} ><span className='nav-num'>0.4</span> Interests</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar