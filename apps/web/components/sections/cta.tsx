'use client'

import Container from "./container";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="relative">
            <Container className="py-12 md:py-20 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl overflow-hidden"
                >
                    {/* Background: gradient mesh */}
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-600/20 via-[#0C1019] to-amber-500/10" />
                    <div className="absolute inset-0 dot-grid opacity-50" />
                    <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[200px] bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />

                    <div className="relative p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800/40 rounded-2xl">
                        <div className="flex flex-col gap-3 max-w-md">
                            <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] text-white">
                                Start monitoring in
                                <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent"> under 2 minutes</span>
                            </h2>
                            <p className="text-sm text-slate-400">
                                Free forever for small teams. No credit card required.
                            </p>
                        </div>

                        <a
                            href="/account"
                            className="group shrink-0 px-8 py-3.5 text-sm font-bold rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-white shadow-[0_0_40px_-8px_rgba(14,165,233,0.5)] hover:shadow-[0_0_50px_-8px_rgba(14,165,233,0.7)] transition-all duration-300 flex items-center gap-2"
                        >
                            Get started free
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}