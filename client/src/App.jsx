import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";




function App() {



    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
            </Routes>

            <Analytics />
        </Router>
    );
}

export default App
