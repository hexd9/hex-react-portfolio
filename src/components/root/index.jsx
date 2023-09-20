import {Link, Outlet} from 'react-router-dom';

export default function Root
() {
  return (
    <div>
        <ul>
            <li>
                <Link>
                <span>Home</span>
                </Link>
            </li>
            <li>
                <Link>
                <span>About</span>
                </Link>
            </li>
            <li>
                <Link>
                <span>Contact</span>
                </Link>
            </li>
            <li>
                <Link>
                <span>Projects</span>
                </Link>
            </li>
            <li>
                <Link>
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
