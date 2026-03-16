"use client";

import { Activity, Database, Bell, Zap, CloudLightning, AlertTriangle, ServerCrash, CheckCircle2, MessageSquare, Cloud, Webhook, Terminal as TerminalIcon, Blocks } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Container from "./container";
import { useState, useEffect } from "react";

export default function Features() {
    return (
        <section id="features" className="relative">
            <Container className="py-20 md:py-28 lg:py-36 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 md:mb-16"
                >
                    <span className="text-[11px] font-semibold text-sky-400 tracking-[0.2em] uppercase mb-3 block">
                        Platform
                    </span>
                    <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] text-white max-w-lg">
                        Built for teams who
                        <br />
                        <span className="text-slate-500">ship with confidence</span>
                    </h2>
                </motion.div>

                {/* BENTO GRID — asymmetric, varied sizes */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
                    {/* ROW 1: Large monitoring card + tall logging card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-7 group rounded-2xl border border-slate-800/50 bg-gradient-to-br from-slate-900/60 to-[#0C1019] overflow-hidden hover:border-slate-700/60 transition-all duration-500"
                    >
                        <div className="h-72 md:h-80 relative overflow-hidden">
                            <MonitoringCard />
                        </div>
                        <div className="p-5 border-t border-slate-800/30">
                            <div className="flex items-center gap-2 mb-1.5">
                                <Activity className="w-4 h-4 text-sky-400" />
                                <h3 className="font-display font-bold text-base text-white group-hover:text-sky-300 transition-colors">Real-time Monitoring</h3>
                            </div>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Sub-second health checks with global edge nodes. Know before your users know.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-5 md:row-span-2 group rounded-2xl border border-slate-800/50 bg-gradient-to-br from-slate-900/60 to-[#0C1019] overflow-hidden hover:border-slate-700/60 transition-all duration-500 flex flex-col"
                    >
                        <div className="flex-1 relative overflow-hidden min-h-[320px]">
                            <LoggingCard />
                        </div>
                        <div className="p-5 border-t border-slate-800/30">
                            <div className="flex items-center gap-2 mb-1.5">
                                <Database className="w-4 h-4 text-violet-400" />
                                <h3 className="font-display font-bold text-base text-white group-hover:text-violet-300 transition-colors">Centralized Logging</h3>
                            </div>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Unified log streams from every service. Search, filter, and correlate in seconds.
                            </p>
                        </div>
                    </motion.div>

                    {/* ROW 2: Small alerts + small integrations */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-3 group rounded-2xl border border-slate-800/50 bg-gradient-to-br from-slate-900/60 to-[#0C1019] overflow-hidden hover:border-slate-700/60 transition-all duration-500"
                    >
                        <div className="h-56 relative overflow-hidden">
                            <AlertsCard />
                        </div>
                        <div className="p-4 border-t border-slate-800/30">
                            <div className="flex items-center gap-2 mb-1">
                                <Bell className="w-3.5 h-3.5 text-amber-400" />
                                <h3 className="font-display font-bold text-sm text-white group-hover:text-amber-300 transition-colors">Instant Alerts</h3>
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed">Multi-channel notifications.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-4 group rounded-2xl border border-slate-800/50 bg-gradient-to-br from-slate-900/60 to-[#0C1019] overflow-hidden hover:border-slate-700/60 transition-all duration-500"
                    >
                        <div className="h-56 relative overflow-hidden">
                            <IntegrationsCard />
                        </div>
                        <div className="p-4 border-t border-slate-800/30">
                            <div className="flex items-center gap-2 mb-1">
                                <Blocks className="w-3.5 h-3.5 text-sky-400" />
                                <h3 className="font-display font-bold text-sm text-white group-hover:text-sky-300 transition-colors">80+ Integrations</h3>
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed">Slack, PagerDuty, AWS, and more.</p>
                        </div>
                    </motion.div>

                    {/* ROW 3: Full width incident intelligence */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="md:col-span-12 group rounded-2xl border border-slate-800/50 bg-gradient-to-br from-slate-900/60 to-[#0C1019] overflow-hidden hover:border-slate-700/60 transition-all duration-500"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-8 md:p-10 flex flex-col justify-center">
                                <span className="text-[10px] text-amber-400 font-semibold uppercase tracking-[0.2em] mb-3">AI-Powered</span>
                                <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">
                                    Incident Intelligence
                                </h3>
                                <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
                                    Auto-detect patterns, correlate events across services, and get resolution suggestions from historical data. Less noise, faster fixes.
                                </p>
                                <div className="flex items-center gap-6">
                                    {[
                                        { value: "73%", label: "Faster MTTR" },
                                        { value: "4x", label: "Less noise" },
                                        { value: "Auto", label: "Escalation" },
                                    ].map((stat, i) => (
                                        <div key={i} className="flex flex-col gap-0.5">
                                            <span className="text-xl font-display font-bold text-sky-400">{stat.value}</span>
                                            <span className="text-[10px] text-slate-500 uppercase tracking-wider">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="h-64 md:h-auto relative overflow-hidden border-t md:border-t-0 md:border-l border-slate-800/30">
                                <InsightsCard />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}

/* ── CARD VISUALIZATIONS ────────────────────────────────── */

function MonitoringCard() {
    const bars = Array.from({ length: 20 }, (_, i) => ({
        h: [`${20 + Math.random() * 40}%`, `${40 + Math.random() * 50}%`, `${20 + Math.random() * 40}%`],
        delay: i * 0.08,
    }));

    return (
        <div className="relative w-full h-full flex flex-col p-5">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/[0.04] to-transparent" />
            <div className="relative flex items-center justify-between mb-4 z-10">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute h-full w-full rounded-full bg-sky-400 opacity-60" />
                        <span className="relative rounded-full h-2 w-2 bg-sky-400" />
                    </span>
                    <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">System Health</span>
                </div>
                <div className="flex items-center gap-1 bg-sky-500/10 border border-sky-500/20 text-sky-300 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider">
                    <Zap className="w-3 h-3" />
                    Healthy
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-4 relative z-10">
                {[
                    { label: "Requests/s", value: "1,248", change: "+12%", color: "text-sky-400" },
                    { label: "P95 Latency", value: "42ms", change: "-8%", color: "text-sky-400" },
                    { label: "Error Rate", value: "0.02%", change: "-23%", color: "text-sky-400" },
                ].map((m, i) => (
                    <div key={i} className="bg-slate-900/40 border border-slate-800/40 rounded-lg p-2.5">
                        <span className="text-[8px] text-slate-500 uppercase tracking-wider block">{m.label}</span>
                        <div className="flex items-baseline gap-1 mt-0.5">
                            <span className="text-sm font-bold text-white">{m.value}</span>
                            <span className={`text-[8px] font-semibold ${m.color}`}>{m.change}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex-1 flex items-end gap-[3px] relative z-10">
                {bars.map((bar, i) => (
                    <div key={i} className="relative flex-1 bg-slate-900/30 rounded-t-sm h-full overflow-hidden">
                        <motion.div
                            className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-sky-600 to-sky-400 rounded-t-sm"
                            animate={{ height: bar.h }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: bar.delay }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

function LoggingCard() {
    const logs = [
        { type: "info", text: "GET /api/v1/users 200 12ms", time: "21:42:01" },
        { type: "info", text: "POST /api/v1/auth 201 45ms", time: "21:42:03" },
        { type: "warn", text: "Rate limit approaching threshold", time: "21:42:08" },
        { type: "error", text: "Database connection timeout (30s)", time: "21:42:14" },
        { type: "info", text: "Initiating failover sequence...", time: "21:42:15" },
        { type: "info", text: "Failover complete. Primary: node-b", time: "21:42:18" },
        { type: "info", text: "GET /api/v1/dashboard 200 18ms", time: "21:42:22" },
        { type: "warn", text: "Memory usage at 85%", time: "21:42:25" },
        { type: "info", text: "Auto-scaling triggered +2 pods", time: "21:42:28" },
    ];

    return (
        <div className="relative w-full h-full flex flex-col bg-[#050810]">
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-slate-800/30">
                <div className="w-2 h-2 rounded-full bg-red-500/40" />
                <div className="w-2 h-2 rounded-full bg-amber-500/40" />
                <div className="w-2 h-2 rounded-full bg-green-500/40" />
                <span className="ml-2 text-[9px] text-slate-600 font-mono">log-stream</span>
            </div>
            <div className="flex-1 relative overflow-hidden">
                <motion.div
                    className="flex flex-col gap-1.5 p-3 font-mono text-[10px]"
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                >
                    {[...logs, ...logs].map((log, i) => (
                        <div key={i} className="flex items-start gap-2 px-1 py-0.5 hover:bg-slate-800/20 rounded-sm transition-colors">
                            <span className="text-slate-700 shrink-0">{log.time}</span>
                            <span className={`shrink-0 font-bold ${log.type === 'info' ? 'text-sky-400' : log.type === 'warn' ? 'text-amber-400' : 'text-red-400'}`}>
                                [{log.type.toUpperCase()}]
                            </span>
                            <span className={`${log.type === 'error' ? 'text-red-300/70' : log.type === 'warn' ? 'text-amber-200/50' : 'text-slate-400'}`}>
                                {log.text}
                            </span>
                        </div>
                    ))}
                </motion.div>
                <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-[#050810] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#050810] to-transparent z-10 pointer-events-none" />
            </div>
        </div>
    );
}

function AlertsCard() {
    const alerts = [
        { title: "API Down", severity: "critical" },
        { title: "High CPU", severity: "warning" },
        { title: "Recovered", severity: "resolved" },
    ];
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-4 gap-3">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.03] to-transparent" />
            <motion.div animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 2, repeat: Infinity }} className="relative w-12 h-12 bg-slate-900/60 border border-slate-700/50 rounded-2xl flex items-center justify-center z-10 mb-2">
                <Bell className="w-5 h-5 text-amber-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#06080E] text-[6px] text-white font-bold flex items-center justify-center">3</div>
            </motion.div>
            <div className="flex flex-col gap-1.5 w-full z-10">
                {alerts.map((a, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 + 0.3 }}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-[11px] font-medium
                        ${a.severity === 'critical' ? 'bg-red-500/[0.06] border-red-500/15 text-red-300' :
                          a.severity === 'warning' ? 'bg-amber-500/[0.06] border-amber-500/15 text-amber-300' :
                          'bg-sky-500/[0.06] border-sky-500/15 text-sky-300'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${a.severity === 'critical' ? 'bg-red-500' : a.severity === 'warning' ? 'bg-amber-500' : 'bg-sky-400'}`} />
                        {a.title}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

function IntegrationsCard() {
    const items = [
        { icon: MessageSquare, color: 'text-sky-400' },
        { icon: Activity, color: 'text-violet-400' },
        { icon: Database, color: 'text-sky-300' },
        { icon: Cloud, color: 'text-amber-400' },
        { icon: Webhook, color: 'text-rose-400' },
        { icon: TerminalIcon, color: 'text-orange-400' },
    ];
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.04),transparent_70%)]" />
            <div className="relative w-44 h-44 flex items-center justify-center">
                <div className="absolute z-20 w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/10 border border-sky-500/20 flex items-center justify-center shadow-[0_0_20px_-5px_rgba(14,165,233,0.3)]">
                    <Blocks className="w-5 h-5 text-sky-400" />
                </div>
                {items.map((item, i) => {
                    const angle = (i * 360) / items.length;
                    const r = (angle * Math.PI) / 180;
                    const radius = 70;
                    const x = Math.cos(r) * radius;
                    const y = Math.sin(r) * radius;
                    return (
                        <motion.div key={i} className="absolute" style={{ left: `calc(50% + ${x}px - 14px)`, top: `calc(50% + ${y}px - 14px)` }}
                            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.08, type: "spring" }}>
                            <div className="w-7 h-7 rounded-full border border-slate-700/50 bg-slate-900/60 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                                <item.icon className={`w-3 h-3 ${item.color}`} />
                            </div>
                        </motion.div>
                    );
                })}
                <motion.div className="absolute w-20 h-20 border border-sky-500/10 rounded-full" animate={{ scale: [1, 1.8], opacity: [0.4, 0] }} transition={{ duration: 2.5, repeat: Infinity }} />
            </div>
        </div>
    );
}

function InsightsCard() {
    const [idx, setIdx] = useState(0);
    useEffect(() => { const iv = setInterval(() => setIdx(p => (p + 1) % 3), 2500); return () => clearInterval(iv); }, []);
    const cards = [
        { icon: AlertTriangle, color: "text-amber-400", title: "Latency Spike", action: "scale_nodes(3)" },
        { icon: ServerCrash, color: "text-red-400", title: "Pod CrashLoop", action: "rollback_deploy()" },
        { icon: CloudLightning, color: "text-sky-400", title: "Traffic Surge", action: "cache_warm(true)" },
    ];
    return (
        <div className="relative w-full h-full flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.04),transparent_60%)]" />
            <div className="relative w-full max-w-[260px] h-[160px]">
                {cards.map((c, i) => {
                    const vi = (i - idx + 3) % 3;
                    return (
                        <motion.div key={i} className="absolute inset-0 bg-slate-900/70 backdrop-blur border border-slate-800/50 rounded-xl p-4 flex flex-col justify-between"
                            animate={{ y: vi * 16, x: vi * 16, scale: 1 - vi * 0.03, opacity: vi === 2 ? 0.3 : 1 }}
                            transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                            style={{ zIndex: 10 - vi }}>
                            <div className="flex items-center gap-2">
                                <c.icon className={`w-4 h-4 ${c.color} ${vi === 0 ? 'animate-pulse' : ''}`} />
                                <span className="text-sm font-bold text-white">{c.title}</span>
                            </div>
                            <div>
                                <span className="text-[9px] text-slate-500 uppercase tracking-wider block mb-1">Auto-Resolution</span>
                                <div className="flex items-center justify-between bg-slate-800/40 rounded px-2.5 py-1 border border-slate-700/30">
                                    <span className="text-[10px] font-mono text-slate-400">{c.action}</span>
                                    <CheckCircle2 className="w-3 h-3 text-sky-400" />
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}