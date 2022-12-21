import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
            <div className="footer">
                <footer>
                        <a href="https://www.linkedin.com/in/kevin-cain-38161151/" target="blank" rel="noopener noreferrer">
                            <li className="logo">
                                <FaLinkedin />
                            </li>
                        </a>
                        <a href="https://github.com/Arthur528" target="blank" rel="noopener noreferrer">
                            <li className="logo">
                                <FaGithub />
                            </li>
                        </a>
                </footer>
            </div>
        );
    }

export default Footer;