import { NavLink } from "react-router-dom";
import Button from "../components/Layouts";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="ver1"></div>
                <div className="f_left">
                    <div className="logo2">
                        <NavLink to="/"><img src="./Logo2.svg" alt="logo" /></NavLink>
                    </div>
                    <h1>Bespoke software solutions</h1>
                    <div className="social">
                        <a href="https://www.facebook.com/profile.php?id=100080746010504"><img src="./facebook.png" alt="Vector3.png" /></a>
                        <a href="/"><img src="./youtube.png" alt="Vector4.png" /></a>
                        <a href="https://www.instagram.com/elmurodvkh"><img src="./instagram.png" alt="Vector5.png" /></a>
                        <a href="/"><img src="./twitter.png" alt="Vector6.png" /></a>
                    </div>
                    <NavLink to="/">© All rights reserved – Finsweet</NavLink>
                </div>
                <div className="f_center">
                    <div className="f_c_left">
                        <h1>Company</h1>
                        <ul className="pages2">
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
                        </ul>
                    </div>
                    <div className="f_c_right">
                        <h1>Connect</h1>
                        <ul className="f_c_r_content">
                            <li><a href="https://elmurodvkh@gmail.com/">elmurodvkh@gmail.com</a></li>
                            <li><p>+(998) 33-004-08-04</p></li>
                        </ul>
                    </div>
                </div>
                <div className="f_right">
                    <h1>Join Newsletter</h1>
                    <input type="text" name="#" id="#" placeholder="Type email here" />
                    <Button classs="darkBtn" text="Subscribe" />
                    <div className="f_r_bottom">
                        <NavLink to="/privacy">Privacy Policy</NavLink>
                        <NavLink to="/">Terms & Conditions</NavLink>
                    </div>
                </div>
                <div className="ver2"></div>
            </div>
        </>
    )
}

export default Footer;