import { Routes, Route, NavLink } from "react-router-dom";
import Button from "../components/Layouts";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogInner from "./pages/BlogInner";
import Careers from "./pages/Careers";
import CareersInner from "./pages/CareersInner";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Services from "./pages/Services";

function Navbar(p) {
    let {generalData} = p
    // console.log(generalData);
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <NavLink to="/"><img src="./Logo.svg" alt="logo" /></NavLink>
                </div>
                <ul className="pages">
                    <li>
                        <NavLink to="/about">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/careers">Careers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact us</NavLink>
                    </li>
                    <Button classs="lightBtn" text="Clone project" />
                </ul>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About generalData={generalData} />} />
                <Route path="/careers" element={<Careers generalData={generalData} />} />
                <Route path="/services" element={<Services generalData={generalData} />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog generalData={generalData} />} />
                <Route path="/bloginner" element={<BlogInner />} />
                <Route path="/careersinner" element={<CareersInner />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default Navbar;