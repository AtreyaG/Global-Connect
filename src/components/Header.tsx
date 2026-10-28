import {MdSearch } from 'react-icons/md'

function Header() {
    return(
        <header className="header">Global-Connect
            <div className="search-bar">
                <input type="text" placeholder='Search recruiters and jobs'/>
                <MdSearch size={20} />
            </div>
        </header>
    )
}

export default Header