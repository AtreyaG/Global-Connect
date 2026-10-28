import { FaUserCircle } from  'react-icons/fa'

type SideBarProps = {
    name: string
    title: string
}

function Sidebar({name, title}: SideBarProps) {
    return (
        <aside className="sidebar">
            <div className="profile">
                <FaUserCircle size={120} color="#0b7a3b" />
                <h2>{name}</h2>
                <p>{title}</p>
            </div>
            <nav className="sidebar-nav">
                <button>Profile</button>
                <button>Settings</button>
                <button>Logout</button>
            </nav>
        </aside>

    )
}

export default Sidebar