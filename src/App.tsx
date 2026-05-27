import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Ftc from "./pages/Ftc";
import Wip from "./pages/wip";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/wip" element={<Wip />} />
            <Route path="/about-ftc" element={<Ftc />} />
        </Routes>
    );
}
