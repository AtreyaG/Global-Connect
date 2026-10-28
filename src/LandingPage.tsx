
import './LandingPage.css'
import Sidebar from "./components/Sidebar"

function LandingPage() {
    return(
    <div className="layout">
        <Sidebar name="Avatar" title="Student at University of Texas at Dallas" />
        <div className="main">
            <header className="header">Header</header>
            <main className="connections-list">ConnectionsList</main>
        </div>
    </div>
    )
}

export default LandingPage