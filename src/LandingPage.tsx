
import './LandingPage.css'
import Sidebar from "./components/Sidebar"
import Header from './components/Header'

function LandingPage() {
    return(
    <div className="layout">
        <Sidebar name="Avatar" title="Student at University of Texas at Dallas" />
        <div className="main">
            <Header />
            <main className="connections-list">ConnectionsList</main>
        </div>
    </div>
    )
}

export default LandingPage