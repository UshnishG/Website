"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Futurix
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="#gallery" className="hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link href="#team" className="hover:text-primary transition-colors">
                Our Team
              </Link>
              <Link href="#contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary-foreground hover:bg-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md hover:bg-primary hover:text-primary-foreground"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#gallery"
              className="block px-3 py-2 rounded-md hover:bg-primary hover:text-primary-foreground"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="#team"
              className="block px-3 py-2 rounded-md hover:bg-primary hover:text-primary-foreground"
              onClick={() => setIsOpen(false)}
            >
              Our Team
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 rounded-md hover:bg-primary hover:text-primary-foreground"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;