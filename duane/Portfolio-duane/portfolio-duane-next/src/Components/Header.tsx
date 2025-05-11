import React from "react";
import '../App.css'; // 

export default function Header() {
    return (
        <header className="header-container">
        <div className="header-content">
                <h2>Duane Plancy</h2>
                <a href="#logo-section" className="header-link">Logo</a>
                <a href="#packaging-section" className="header-link">Packaging</a>
                <a href="#photo-section" className="header-link">Photo</a>
                <a href="#contact-section" className="header-link">Contact</a>
            </div>
        </header>
    );
}