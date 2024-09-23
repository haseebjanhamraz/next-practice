"use client"

import Image from "next/image"
import Link from 'next/link';
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false); // To toggle mobile menu

    const menuLinks = [
        {
            href: "/",
            label: "Home",
        },
        {
            href: "/library",
            label: "Library",
        },
        {
            href: "/about",
            label: "About",
        },
        {
            href: "/contact",
            label: "Contact",
        }
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle menu state
    };

    return (
        <nav className="bg-gray-100 p-4 sticky top-0">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo and Title */}
                <div className="flex items-center space-x-4">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={50}
                        height={50}
                        className="rounded-full p-1"
                    />
                    <h4 className="text-xl font-bold text-black">
                        Bacha Khan Research Center - BKRC
                    </h4>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6">
                    {menuLinks.map((link) => (
                        <li key={link.href} className="shadow-md shadow-zinc-400 drop-shadow-lg">
                            <Link
                                href={link.href}
                                className={`font-medium text-lg p-2 rounded-md ${pathname === link.href ? 'bg-gray-300 text-black' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-700 focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4">
                    <ul className="flex flex-col space-y-4">
                        {menuLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`block text-lg p-2 rounded-md ${pathname === link.href ? 'bg-gray-300 text-black' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
                                    onClick={() => setIsOpen(false)} // Close menu on click
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
