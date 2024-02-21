import React, { useEffect, useState } from 'react';
import './styles.css';
import MenuIcon from './hamburger-icon.png';

function Nav() {
    const [scrolling, setScrolling] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);

            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        // Initial setup

        handleResize();

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navbarClass = scrolling ? 'navbar scrolled' : 'navbar';
    const menuClass = isMobile ? `menu ${menuActive ? 'active' : ''}` : 'menu';

    return (
        <nav className={navbarClass}>
            <div className='logo'>
                <img src="images/logo.png" alt="logo"/>
            </div>
            {isMobile ? (
                <div className={menuClass} onClick={() => setMenuActive(!menuActive)}>
                <div className='mobile-menu-icon'>
                    <img src={MenuIcon} alt="menu-icon" width="30" />
                </div>
                    <ul className="dropdown">
                        <li>
                            <a href="/">HOME</a>
                        </li>
                        <li>
                            <a href="/menu">MENU</a>
                        </li>
                        <li>
                        <a href="/reservation">RESERVATION</a>
                        </li>
                        <li>
                            <a href="/contact">CONTACT</a>
                        </li>
                    </ul>
                </div>
            ) : (
            <ul>
                <li>
                    <a href="/">HOME</a>
                </li>
                <li>
                    <a href="/menu">MENU</a>
                </li>
                <li>
                    <a href="/reservation">RESERVATION</a>
                </li>
                <li>
                    <a href="/contact">CONTACT</a>
                </li>
            </ul>
            )}
        </nav>
    );
}

export default Nav;