"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { HiMenu, HiX } from "react-icons/hi";
import { TransitionLink } from "./misc/TransitionLayout";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full z-50 top-0 left-0 bg-transparent"
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto relative">
        {/* Logo */}
        <motion.p
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-bold tracking-tight"
        >
          Portfolio
        </motion.p>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-base items-center">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <motion.div
                key={href}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <TransitionLink
                  href={href}
                  className={
                    isActive
                      ? "text-white font-semibold"
                      : "text-[#a0a0a0] hover:text-white transition-colors"
                  }
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </TransitionLink>
                {isActive && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute left-0 -bottom-1 w-full h-[2px] rounded"
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.div>
            );
          })}
        </nav>

        {/* Desktop Button */}
        <motion.div className="hidden md:block" transition={{ duration: 0.2 }}>
          <TransitionLink href="/contact">
            <motion.button className=" text-[#181818] bg-white font-semibold px-7 py-2 rounded-2xl shadow-md transition-all duration-300 cursor-pointer border border-white ">
              Let&apos;s Talk
            </motion.button>
          </TransitionLink>
        </motion.div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center text-3xl text-white z-50"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-nav"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="top-0 right-0 w-4/5 max-w-xs h-screen bg-[#181818] shadow-2xl z-40 flex flex-col gap-10 pt-24 px-8"
            >
              <nav className="flex flex-col gap-8 text-lg">
                {navLinks.map(({ href, label }) => {
                  const isActive =
                    href === "/" ? pathname === "/" : pathname.startsWith(href);

                  return (
                    <motion.div
                      key={href}
                      whileHover={{ scale: 1.07, x: 8 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                      className="relative"
                      onClick={() => setMobileOpen(false)}
                    >
                      <TransitionLink
                        href={href}
                        className={
                          isActive
                            ? "text-white font-bold"
                            : "text-[#a0a0a0] hover:text-white transition-colors"
                        }
                        aria-current={isActive ? "page" : undefined}
                      >
                        {label}
                      </TransitionLink>
                      {isActive && (
                        <motion.span
                          layoutId="mobile-navbar-underline"
                          className="absolute left-0 -bottom-1 w-8 h-[2px] bg-gradient-to-r from-[#3c58e3] via-[#c2ebff] to-[#5ab5e2] rounded"
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </motion.div>
                  );
                })}
              </nav>
              <motion.div
                className="mt-8"
                whileHover={{ scale: 1.05, boxShadow: "0 4px 24px #3c58e355" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                onClick={() => setMobileOpen(false)}
              >
                <TransitionLink href="/contact">
                  <motion.button className="w-full bg-gradient-to-r from-[#3c58e3] via-[#c2ebff] to-[#5ab5e2] text-[#181818] font-semibold px-7 py-2 rounded-xl shadow-md transition-all duration-300 hover:from-[#5ab5e2] hover:to-[#3c58e3] hover:text-white">
                    Let&apos;s Talk
                  </motion.button>
                </TransitionLink>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
