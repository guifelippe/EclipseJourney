import React from "react";
import '../Styles/Footer.css';

function Footer()
{
    return(
        <footer className="footer-container">
            <p className="footer-text">🚀 &copy; {new Date().getFullYear()} The Tech Titans: Eclipse Explorers 🚀</p>
        </footer>
    )
}

export default Footer