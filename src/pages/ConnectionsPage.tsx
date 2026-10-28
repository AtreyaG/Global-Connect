import "./LandingPage.css"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"


function ConnectionsPage() {
    return (
    <div className="layout">
        <Sidebar name="Avatar" title="Student at University of Texas at Dallas" />
        <div className="main">
            <Header />
            <main className="content">
                <h1 className="page-title">Connections</h1>
            </main>
        </div>
    </div>
    )
}

export default ConnectionsPage