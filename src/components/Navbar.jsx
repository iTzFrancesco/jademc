import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoScritta from '../assets/logo-scritta.png';

const Navbar = ({ serverName }) => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Staff', path: '/staff' },
        { name: 'Regole', path: '/regole' },
        { name: 'Store', path: '/store' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-jade-dark/60 backdrop-blur-xl border-b border-white/5 py-4 px-6 md:px-12">
                <div className="hidden lg:flex items-center justify-center gap-4 relative">
                    <Link to="/" className="flex items-center group cursor-pointer">
                        <img src={logoScritta} alt={`${serverName} Logo`} className="h-14 md:h-16 w-auto drop-shadow-[0_0_15px_rgba(0,255,163,0.4)]" />
                    </Link>

                    <div className="w-px h-8 bg-white/20 mx-2"></div>

                    <nav className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`transition-all font-bold uppercase tracking-[0.15em] text-lg ${location.pathname === link.path
                                    ? 'text-jade-glow scale-105'
                                    : 'text-white/80 hover:text-jade-glow'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="lg:hidden flex items-center justify-between">
                    <Link to="/" className="flex items-center group cursor-pointer">
                        <img src={logoScritta} alt={`${serverName} Logo`} className="h-12 w-auto drop-shadow-[0_0_15px_rgba(0,255,163,0.4)]" />
                    </Link>

                    <button
                        onClick={toggleMenu}
                        className="text-white p-2 hover:text-jade-glow transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                <div
                    className={`lg:hidden absolute top-full left-0 right-0 bg-jade-dark/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                >
                    <nav className="flex flex-col items-center py-6 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`transition-all font-bold uppercase tracking-[0.15em] text-lg py-2 ${location.pathname === link.path
                                    ? 'text-jade-glow scale-105'
                                    : 'text-white/80 hover:text-jade-glow'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar;
