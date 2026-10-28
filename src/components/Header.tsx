import {MdSearch, MdOutlineHome} from 'react-icons/md'
import { BsGlobe } from 'react-icons/bs'
import { Link } from 'react-router'

function Header() {
    return(
        <header className="header">Global-Connect
            <div className="search-bar">
                <input type="text" placeholder='Search recruiters and jobs'/>
                <Link to="/Global-Connect" className="home-link">
                    <MdSearch size={20} />
                </Link>
            </div>

            <Link to="/Global-Connect" className="home-link">
                <MdOutlineHome size={32} />
            </Link>

            <Link to="/Global-Connect/connections" className="connections-link">
                Connections <BsGlobe size={28} />
            </Link>
        </header>
    )
}

export default Header