import {MdSearch, MdOutlineHome} from 'react-icons/md'
import { BsGlobe } from 'react-icons/bs'

function Header() {
    return(
        <header className="header">Global-Connect
            <div className="search-bar">
                <input type="text" placeholder='Search recruiters and jobs'/>
                <MdSearch size={20} />
            </div>

            <a href="/" className='home-link'>
                <MdOutlineHome size={32} />
            </a>

            <a href='/connections' className="connections-link">
                Connections <BsGlobe size={28} />
            </a>
        </header>
    )
}

export default Header