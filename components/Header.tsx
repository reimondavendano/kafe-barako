'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

type HeaderProps = {
    branch: 'malolos' | 'talisay';
};

export default function Header({ branch }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const logoSrc = branch === 'malolos' ? '/assets/kape barako.jpg' : '/assets/kape_talisay.jpg';
    const branchName = branch === 'malolos' ? 'Malolos Branch' : 'Talisay Branch';
    const basePath = branch === 'malolos' ? '/kafe-barako-malolos' : '/kafe-barako-talisay';

    const NAV_LINKS = [
        { name: 'Home', href: '#home' },
        { name: 'Why Us', href: '#story' },
        { name: 'Menu', href: '#menu' },
        { name: 'Packages', href: '#packages' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href={basePath} className="flex items-center gap-3">
                    <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-primary">
                        <Image
                            src={logoSrc}
                            alt={`Kafe Barako ${branchName}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className={`font-bold text-xl font-[family-name:var(--font-bebas)] tracking-wide ${isScrolled ? 'text-primary' : 'text-white drop-shadow-md'}`}>
                        Kafe Barako <span className="text-sm font-normal block">{branchName}</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-8 items-center">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={`${basePath}${link.href}`}
                            className={`font-medium hover:text-accent transition-colors ${isScrolled ? 'text-dark' : 'text-white drop-shadow-md'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href={`${basePath}#contact`}
                        className="bg-accent text-white font-bold px-6 py-2 rounded-full hover:bg-primary transition-colors shadow-lg"
                    >
                        Book Now
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-3">
                    <Link
                        href={`${basePath}#contact`}
                        className="bg-accent text-white font-bold px-4 py-2 rounded-full text-sm"
                    >
                        Book
                    </Link>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`${isScrolled ? 'text-primary' : 'text-white'}`}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 py-4 px-6 flex flex-col gap-4 animate-fade-in-up">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={`${basePath}${link.href}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-dark font-medium py-2 border-b border-gray-50 last:border-0 hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
