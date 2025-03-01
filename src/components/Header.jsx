import React from "react";

const Header = () => {
    const handleScroll = (event, targetId) => {
        event.preventDefault();
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#home" onClick={(e) => handleScroll(e, "home")}>Home</a></li>
                    <li><a href="#about" onClick={(e) => handleScroll(e, "about")}>About</a></li>
                    <li><a href="#services" onClick={(e) => handleScroll(e, "services")}>Services</a></li>
                    <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
