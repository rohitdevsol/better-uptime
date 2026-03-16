'use client'

import Container from "./container";
import { motion } from "motion/react";
import { Activity } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="py-4 fixed top-0 left-0 right-0 z-50 bg-[#06080E]/80 backdrop-blur-xl border-b border-slate-800/50"
        >
            <Container>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2.5 group">
                        <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center shadow-[0_0_20px_-5px_rgba(14,165,233,0.5)]">
                            <Activity className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[15px] font-display font-bold tracking-tight text-white">
                            BetterUptime
                        </span>
                    </a>

                    {/* Nav links — pill style */}
                    <div className="hidden md:flex items-center bg-slate-900/50 border border-slate-800/50 rounded-full px-1.5 py-1">
                        {["Features", "Pricing", "FAQ"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onMouseEnter={() => setHoveredLink(item)}
                                onMouseLeave={() => setHoveredLink(null)}
                                className="relative px-4 py-1.5 text-sm font-medium transition-colors duration-200"
                            >
                                {hoveredLink === item && (
                                    <motion.span
                                        layoutId="navHover"
                                        className="absolute inset-0 bg-slate-800/60 rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                                    />
                                )}
                                <span className={`relative z-10 ${hoveredLink === item ? 'text-white' : 'text-slate-400'}`}>
                                    {item}
                                </span>
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-3">
                        <a href="/account" className="text-sm text-slate-400 hover:text-white transition-colors font-medium hidden sm:block">
                            Sign in
                        </a>
                        <a
                            href="/account"
                            className="px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-white shadow-[0_0_24px_-6px_rgba(14,165,233,0.5)] hover:shadow-[0_0_32px_-6px_rgba(14,165,233,0.7)] transition-shadow duration-300"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </Container>
        </motion.nav>
    );
}