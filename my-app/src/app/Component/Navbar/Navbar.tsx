'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="text-white z-20 fixed top-0 w-full">
  
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="/"
          className="text-3xl font-bold text-transparent bg-clip-text bg-white hover:scale-105 transition-transform"
        >
          Owais.
        </a>

  
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <Link
            href="/"
            className={pathname === "/" ? "nav-link active" : "nav-link"}
          >
            Home
          </Link>
          <Link
            href="/overview"
            className={pathname === "/overview" ? "nav-link active" : "nav-link"}
  
  >
            About
          </Link>
          <Link
            href="/projects"
            className={pathname === "/projects" ? "nav-link active" : "nav-link"}
          >
            Projects
          </Link>
          <Link
            href="/skills"
            className={pathname === "/skills" ? "nav-link active" : "nav-link"}
          >
            Skills
          </Link>
          <Link
            href="/contact"
            className={pathname === "/contact" ? "nav-link active" : "nav-link"}
          >
            Contact
          </Link>
        </div>


        <button
          className="md:hidden text-3xl text-teal-500 focus:outline-none menu-button"
          aria-label="Menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className="fa fa-bars"></i>
        </button>
      </div>


      {isMobileMenuOpen && (
        <div className="mobile-menu open bg-gray-800 text-lg font-medium text-center p-4">
          <Link
            href="/"
            className={pathname === "/" ? "nav-link active" : "nav-link"}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/overview"
            className={pathname === "/overview" ? "nav-link active" : "nav-link"}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={pathname === "/projects" ? "nav-link active" : "nav-link"}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/skills"
            className={pathname === "/skills" ? "nav-link active" : "nav-link"}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            href="/contact"
            className={pathname === "/contact" ? "nav-link active" : "nav-link"}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
