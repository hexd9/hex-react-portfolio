import {Link, Outlet} from 'react-router-dom';
import "./root.css"

export const Root =() =>  {
  return (
    <div>
        <ul className='Nav'>
            <li>
                <Link to="/" className='NavLink'>
                <span>Home</span>
                </Link>
            </li>
            <li>
                <Link to="/about"className='NavLink'>
                <span>About</span>
                </Link>
            </li>
            <li>
                <Link to="/contact"className='NavLink'>
                <span>Contact</span>
                </Link>
            </li>
            <li>
                <Link to="/projects"className='NavLink'>
                <span>Projects</span>
                </Link>
            </li>
            <li>
                <Link to="/resume"className='NavLink'>
                <span>Resume</span>
                </Link>
            </li>
        </ul>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}
