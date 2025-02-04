"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Sayfa kaydırıldığında menüyü kapat
  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div className="nav container">
        <Link href="/" className="logo">
          Kahve Dükkanı
        </Link>
        <nav className={`navbar ${menuOpen ? "open-menu" : ""}`}>
          <Link href="#home" className="nav-link">
            Ana Sayfa
          </Link>
          <Link href="#services" className="nav-link">
            Hizmetler
          </Link>
          <Link href="#products" className="nav-link">
            Ürünler
          </Link>
          <Link href="#team" className="nav-link">
            Ekibimiz
          </Link>
          <Link href="#reviews" className="nav-link">
            Yorumlar
          </Link>
        </nav>
        <div className="nav-icons">
          <Link href="#">
            <i className="bx bx-user"></i>
          </Link>
          <Link href="#">
            <i className="bx bx-shopping-bag"></i>
          </Link>
          <div className="menu-icon" onClick={toggleMenu}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
