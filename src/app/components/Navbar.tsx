"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // call it once

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={`navbar ${isMobile ? 'mobile' : ''}`}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/summer">Summer</Link></li>
        <li><Link href="/winter">Winter</Link></li>
        <li><Link href="/autumn">Autumn</Link></li>
        <li><Link href="/spring">Spring</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
