import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Hobbies from "./components/Hobbies";
import People from "./components/People";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link> | <Link to="/hobbies">Hobbies</Link> | <Link to="/people">People</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hobbies" element={<Hobbies />} />
                    <Route path="/people" element={<People />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
