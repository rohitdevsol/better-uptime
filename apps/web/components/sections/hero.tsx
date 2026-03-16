'use client'

import Container from "../sections/container";
import { motion } from "motion/react";
import { ArrowRight, Activity, Zap, Database, Terminal } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-24">
            {/* Background: large radial gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[1000px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.12),transparent_60%)] pointer-events-none" />
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(245,158,11,0.06),transparent_60%)] pointer-events-none" />

            <Container className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center py-20 md:py-28 lg:py-32">
                    {/* LEFT — Text content, LEFT ALIGNED */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6"
                    >
                        {/* Badge */}
                        <div className="flex items-center gap-2 w-fit px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/[0.06]">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute h-full w-full rounded-full bg-sky-400 opacity-60" />
                                <span className="relative rounded-full h-1.5 w-1.5 bg-sky-400" />
                            </span>
                            <span className="text-[11px] font-semibold text-sky-300 tracking-wider uppercase">
                                All systems operational
                            </span>
                        </div>

                        {/* Headline — left-aligned, NOT centered */}
                        <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-[-0.03em] leading-[1.08]">
                            <span className="text-white">Your infrastructure</span>
                            <br />
                            <span className="text-white">deserves a </span>
                            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                                guardian.
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-md">
                            Real-time monitoring, centralized logging, and instant alerts — 
                            the observability stack your team actually enjoys using.
                        </p>

                        {/* CTA row */}
                        <div className="flex items-center gap-4 mt-2">
                            <a
                                href="/account"
                                className="group px-7 py-3 text-sm font-bold rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-white shadow-[0_0_40px_-8px_rgba(14,165,233,0.5)] hover:shadow-[0_0_50px_-8px_rgba(14,165,233,0.7)] transition-all duration-300 flex items-center gap-2"
                            >
                                Start free
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#features" className="px-7 py-3 text-sm font-semibold rounded-full text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white transition-all duration-200">
                                See features
                            </a>
                        </div>

                        {/* Stats — horizontal, left-aligned */}
                        <div className="flex items-center gap-8 mt-4 pt-6 border-t border-slate-800/60">
                            {[
                                { value: "99.99%", label: "Uptime SLA" },
                                { value: "<30s", label: "Alert speed" },
                                { value: "10M+", label: "Events/day" },
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col gap-0.5">
                                    <span className="text-lg font-display font-bold text-white">{stat.value}</span>
                                    <span className="text-[11px] text-slate-500 uppercase tracking-wider font-medium">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT — Large dashboard preview card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30, y: 20 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl border border-slate-800/60 bg-gradient-to-br from-slate-900/80 to-[#0C1019] shadow-2xl overflow-hidden glow-cyan">
                            {/* Dashboard header */}
                            <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800/50 bg-slate-900/40">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                                    </div>
                                    <span className="text-[10px] text-slate-500 font-mono ml-2">dashboard.betteruptime.io</span>
                                </div>
                                <div className="flex items-center gap-1.5 bg-sky-500/10 border border-sky-500/20 rounded-full px-2.5 py-0.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                                    <span className="text-[9px] text-sky-300 font-bold uppercase tracking-wider">Live</span>
                                </div>
                            </div>

                            {/* Dashboard body with mini cards */}
                            <div className="p-4 space-y-3">
                                {/* Top metric row */}
                                <div className="grid grid-cols-3 gap-2.5">
                                    {[
                                        { icon: Activity, label: "Uptime", value: "99.98%", color: "sky" },
                                        { icon: Zap, label: "Avg Latency", value: "42ms", color: "amber" },
                                        { icon: Database, label: "Log Events", value: "2.4M", color: "violet" },
                                    ].map((metric, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 + i * 0.1 }}
                                            className={`rounded-xl border border-slate-800/50 bg-slate-900/50 p-3 flex flex-col gap-1.5`}
                                        >
                                            <div className="flex items-center gap-1.5">
                                                <metric.icon className={`w-3 h-3 ${metric.color === 'sky' ? 'text-sky-400' : metric.color === 'amber' ? 'text-amber-400' : 'text-violet-400'}`} />
                                                <span className="text-[9px] text-slate-500 font-medium uppercase tracking-wider">{metric.label}</span>
                                            </div>
                                            <span className="text-lg font-display font-bold text-white">{metric.value}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Chart area */}
                                <div className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-3 relative overflow-hidden">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Response Time (24h)</span>
                                        <span className="text-[10px] text-sky-400 font-semibold flex items-center gap-1">
                                            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /></svg>
                                            -12% avg
                                        </span>
                                    </div>
                                    <svg className="w-full h-16" viewBox="0 0 300 60" preserveAspectRatio="none">
                                        <defs>
                                            <linearGradient id="chartGrad" x1="0" x2="0" y1="0" y2="1">
                                                <stop offset="0%" stopColor="rgba(14,165,233,0.3)" />
                                                <stop offset="100%" stopColor="rgba(14,165,233,0)" />
                                            </linearGradient>
                                        </defs>
                                        <motion.path
                                            d="M0,50 C20,45 40,25 60,30 C80,35 100,15 120,20 C140,25 160,10 180,18 C200,26 220,8 240,15 C260,22 280,5 300,12"
                                            fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round"
                                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }}
                                        />
                                        <motion.path
                                            d="M0,50 C20,45 40,25 60,30 C80,35 100,15 120,20 C140,25 160,10 180,18 C200,26 220,8 240,15 C260,22 280,5 300,12 L300,60 L0,60 Z"
                                            fill="url(#chartGrad)"
                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
                                        />
                                    </svg>
                                </div>

                                {/* Mini log feed */}
                                <div className="rounded-xl border border-slate-800/50 bg-[#060810] p-3 font-mono text-[9px] space-y-1.5 overflow-hidden max-h-[90px]">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Terminal className="w-3 h-3 text-slate-600" />
                                        <span className="text-slate-600 uppercase tracking-wider font-sans text-[8px] font-semibold">Log Stream</span>
                                    </div>
                                    {[
                                        { time: "21:42:01", level: "INFO", color: "text-sky-400", msg: "GET /api/health 200 3ms" },
                                        { time: "21:42:03", level: "WARN", color: "text-amber-400", msg: "Rate limit 80% customer_8921" },
                                        { time: "21:42:05", level: "INFO", color: "text-sky-400", msg: "POST /webhooks/stripe 201 12ms" },
                                    ].map((log, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 1.2 + i * 0.15 }}
                                            className="flex gap-2 text-slate-500"
                                        >
                                            <span className="text-slate-600">{log.time}</span>
                                            <span className={`font-bold ${log.color}`}>[{log.level}]</span>
                                            <span className="text-slate-400 truncate">{log.msg}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Floating decorative glow */}
                        <div className="absolute -top-8 -right-8 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}