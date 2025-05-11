"use client";

import React from "react";
import "../App.css"; // Assure-toi que ton CSS global y est ou adapte le chemin

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2025 DUANE PLANCY STUDIO<span className="cursor">_</span></p>
            <div className="footer-links">
                <a href="#contact-section">CONTACT</a>
                <a href="mailto:duaneplancy@gmail.com">EMAIL</a>
                <a href="https://www.linkedin.com/in/duane-plancy/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                <a href="https://www.instagram.com/dwayne_toyz/" target="_blank" rel="noopener noreferrer">SOCIAL</a>
            </div>
        </footer>
    );
};

export default Footer;
