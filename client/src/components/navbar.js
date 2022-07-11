import nav from 'react-bootstrap/Nav'
import { Link } from 'react-scroll'



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <ul className="navbar-nav">
        <li className="nav-item nav-link"><Link activeClass="active" to="about" delay={0} spy={true} >0.1 About </Link></li>
        <li className="nav-item nav-link"><Link activeClass="active" to="projects" delay={0} spy={true} >0.2 Projects</Link></li>
        <li className="nav-item nav-link"><Link activeClass="active" to="experience" delay={0} spy={true} >0.3 Experience</Link></li>
        <li className="nav-item nav-link"><Link activeClass="active" to="interests" delay={0} spy={true} >0.4 Interests</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar