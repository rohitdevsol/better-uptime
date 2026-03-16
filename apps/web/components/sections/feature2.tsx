'use client'

import Container from "./container";
import { motion } from "motion/react";
import {
    Bell, ServerCrash, AlertTriangle, CheckCircle2, CloudLightning,
    Search, Terminal, Activity, Database, Cloud, Webhook, Blocks,
    MessageSquare
} from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";

export default function Feature2() {
    return (
        <section className="relative">
            <div className="absolute inset-0 grid-bg" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/[0.04] rounded-full blur-[150px] pointer-events-none" />

            <Container className="py-20 md:py-32 lg:py-40 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <span className="text-xs font-semibold text-emerald-400 tracking-[0.2em] uppercase mb-4 block">
                        Deep Dive
                    </span>
                    <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em] text-white mb-4">
                        Complete observability stack
                        <br />
                        <span className="text-zinc-500">in one platform</span>
                    </h2>
                    <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto">
                        Monitor everything, log everything, and collaborate on incidents with a single source of truth.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    <FeatureDetailCard
                        title="Smart Alert Routing"
                        description="Multi-channel notifications with intelligent deduplication and escalation policies."
                    >
                        <AlertRoutingCard />
                    </FeatureDetailCard>

                    <FeatureDetailCard
                        title="Unified Log Search"
                        description="Full-text search across all your log sources with real-time streaming."
                    >
                        <LogSearchCard />
                    </FeatureDetailCard>

                    <FeatureDetailCard
                        title="Universal Integrations"
                        description="Connect with every tool in your stack — from Slack to AWS to Datadog."
                    >
                        <IntegrationsCard />
                    </FeatureDetailCard>

                    <FeatureDetailCard
                        title="Incident Intelligence"
                        description="Auto-detect patterns, correlate events, and suggest resolutions from historical data."
                    >
                        <InsightsCard />
                    </FeatureDetailCard>
                </div>
            </Container>
        </section>
    );
}


function FeatureDetailCard({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500 overflow-hidden flex flex-col"
        >
            <div className="h-72 md:h-80 relative overflow-hidden border-b border-white/[0.04]">
                {children}
            </div>
            <div className="p-5 md:p-6">
                <h3 className="font-display font-bold text-lg text-white mb-1.5 group-hover:text-emerald-300 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
}


function AlertRoutingCard() {
    const allAlerts = [
        { icon: CloudLightning, color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/15", title: "API Gateway Down", desc: "Latency spike detected" },
        { icon: AlertTriangle, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/15", title: "High CPU Usage", desc: "Worker Node 3 at 98%" },
        { icon: ServerCrash, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/15", title: "Database Timeout", desc: "Replication lag > 30s" },
        { icon: CheckCircle2, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/15", title: "System Recovered", desc: "All services normal" },
    ];

    const [slots, setSlots] = useState([0, 1, 2, 3]);
    const [pulse, setPulse] = useState(false);

    useEffect(() => {
        let count = 0;
        const interval = setInterval(() => {
            setPulse(true);
            setTimeout(() => setPulse(false), 500);
            setSlots((prev) => {
                const next = [...prev];
                next[count % 4] = Math.floor(Math.random() * allAlerts.length);
                count++;
                return next;
            });
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center p-5 relative w-full h-full overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.04),transparent)]" />

            {/* Bell icon with pulse */}
            <div className="relative mt-2 mb-4 z-10">
                <motion.div
                    animate={{ scale: pulse ? 1.08 : 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-12 h-12 bg-white/[0.04] border border-white/[0.08] rounded-full flex items-center justify-center"
                >
                    <Bell className={`w-5 h-5 transition-colors duration-300 ${pulse ? 'text-emerald-400' : 'text-zinc-400'}`} />
                    <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-[#0A0A0B]" />
                </motion.div>
                {pulse && (
                    <motion.div
                        initial={{ scale: 1, opacity: 0.4 }}
                        animate={{ scale: 3, opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 rounded-full bg-emerald-500 pointer-events-none"
                    />
                )}
            </div>

            {/* Alert grid */}
            <div className="grid grid-cols-2 gap-2.5 z-10 w-full mt-auto px-1 pb-1">
                {slots.map((alertIdx, slotIdx) => {
                    const alert = allAlerts[alertIdx];
                    const Icon = alert.icon;
                    return (
                        <div key={`slot-${slotIdx}`} className={`flex items-start gap-2 p-3 rounded-xl border ${alert.border} bg-white/[0.02] h-full`}>
                            <AnimatePresence mode="popLayout" initial={false}>
                                <motion.div
                                    key={alertIdx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    className="flex items-start gap-2 w-full"
                                >
                                    <div className={`p-1.5 rounded-lg ${alert.bg} shrink-0`}>
                                        <Icon className={`w-3.5 h-3.5 ${alert.color}`} />
                                    </div>
                                    <div className="flex flex-col min-w-0 flex-1">
                                        <span className="text-[11px] font-semibold text-white truncate">{alert.title}</span>
                                        <span className="text-[9px] text-zinc-500 truncate">{alert.desc}</span>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}


function LogSearchCard() {
    type LogEntry = { id: number; level: 'info' | 'error' | 'warn' | 'success'; service: string; message: string; time: string; };

    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    const templates = [
        { level: 'info' as const, service: 'auth-svc', message: 'User authenticated successfully' },
        { level: 'success' as const, service: 'payments', message: 'Webhook received charge.succeeded' },
        { level: 'info' as const, service: 'db-primary', message: 'Backup completed 4.2s size=1.2GB' },
        { level: 'warn' as const, service: 'api-gw', message: 'Rate limit approaching threshold' },
        { level: 'error' as const, service: 'search-svc', message: 'Connection timeout retrying...' },
        { level: 'info' as const, service: 'worker-2', message: 'Batch job processing queue' },
    ];

    useEffect(() => {
        let count = 0;
        const initial: LogEntry[] = templates.slice(0, 4).map((t, i) => ({
            id: 1000 + i, ...t, time: `10:41:${(22 + i).toString().padStart(2, '0')}`
        }));
        setLogs(initial);

        const interval = setInterval(() => {
            if (count % 8 === 0) {
                setIsSearching(true);
                setTimeout(() => setIsSearching(false), 2000);
            }
            const t = templates[Math.floor(Math.random() * templates.length)];
            const now = new Date();
            setLogs(prev => {
                const newLog: LogEntry = {
                    id: Date.now(), ...t,
                    time: `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`
                };
                return prev.length >= 12 ? [...prev.slice(1), newLog] : [...prev, newLog];
            });
            count++;
        }, 1200);
        return () => clearInterval(interval);
    }, []);

    const getColor = (level: string) => {
        switch (level) {
            case 'error': return 'text-red-400';
            case 'warn': return 'text-amber-400';
            case 'success': return 'text-emerald-400';
            default: return 'text-blue-400';
        }
    };

    return (
        <div className="flex flex-col w-full h-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.03] to-transparent" />

            {/* Search bar */}
            <div className="h-10 border-b border-white/[0.04] bg-white/[0.02] flex items-center px-3 gap-2 relative z-10">
                <Search className={`w-3.5 h-3.5 transition-colors ${isSearching ? 'text-blue-400' : 'text-zinc-600'}`} />
                <div className="flex items-center flex-1">
                    <AnimatePresence mode="wait">
                        {isSearching ? (
                            <motion.span key="s" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} className="text-[10px] text-white font-mono">
                                level:&quot;error&quot; OR &quot;timeout&quot;
                            </motion.span>
                        ) : (
                            <motion.span key="i" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-[10px] text-zinc-600 font-mono">
                                Search all logs... (⌘K)
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Logs */}
            <div className="flex-1 overflow-hidden bg-[#050508] font-mono text-[10px] flex flex-col justify-end p-2 relative">
                <div className="flex flex-col gap-1 w-full">
                    <AnimatePresence initial={false}>
                        {logs.map((log) => (
                            <motion.div
                                key={log.id}
                                layout
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0, backgroundColor: isSearching && (log.level === 'error' || log.level === 'warn') ? 'rgba(59,130,246,0.06)' : 'transparent' }}
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                className="flex items-start gap-2 px-1 rounded-sm"
                            >
                                <span className="text-zinc-600 shrink-0">{log.time}</span>
                                <span className={`shrink-0 font-bold ${getColor(log.level)} uppercase`}>[{log.level}]</span>
                                <span className="text-zinc-500 font-semibold">{log.service}</span>
                                <span className="text-zinc-400 truncate">{log.message}</span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}


function IntegrationsCard() {
    const integrations = [
        { icon: MessageSquare, color: 'text-blue-400', bg: 'bg-blue-500/10', particle: 'bg-blue-500', name: 'Slack' },
        { icon: Activity, color: 'text-purple-400', bg: 'bg-purple-500/10', particle: 'bg-purple-500', name: 'Datadog' },
        { icon: Database, color: 'text-emerald-400', bg: 'bg-emerald-500/10', particle: 'bg-emerald-500', name: 'MongoDB' },
        { icon: Cloud, color: 'text-sky-400', bg: 'bg-sky-500/10', particle: 'bg-sky-500', name: 'AWS' },
        { icon: Webhook, color: 'text-pink-400', bg: 'bg-pink-500/10', particle: 'bg-pink-500', name: 'Webhooks' },
        { icon: Terminal, color: 'text-orange-400', bg: 'bg-orange-500/10', particle: 'bg-orange-500', name: 'Sentry' },
    ];

    return (
        <div className="flex flex-col items-center justify-center p-4 relative w-full h-full overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.04),transparent_70%)]" />

            <div className="relative w-56 h-56 flex items-center justify-center">
                {/* Center hub */}
                <div className="absolute z-20 w-14 h-14 rounded-2xl bg-white/[0.04] border border-emerald-500/20 shadow-[0_0_30px_-5px_rgba(16,185,129,0.2)] flex items-center justify-center">
                    <Blocks className="w-6 h-6 text-emerald-400 z-10" />
                    <motion.div
                        animate={{ opacity: [0, 0.4, 0], scale: [0.8, 1.2, 0.8] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        className="absolute inset-0 bg-emerald-500/20 rounded-2xl blur-md"
                    />
                </div>

                {/* Orbiting integrations */}
                {integrations.map((item, i) => {
                    const angle = (i * 360) / integrations.length;
                    const radian = (angle * Math.PI) / 180;
                    const radius = 90;
                    const x = Math.cos(radian) * radius;
                    const y = Math.sin(radian) * radius;

                    return (
                        <div key={i} className="absolute top-1/2 left-1/2 w-0 h-0 flex items-center justify-center pointer-events-none">
                            {/* Connection line */}
                            <motion.div
                                className="absolute h-px origin-left opacity-20 bg-gradient-to-r from-transparent via-zinc-500 to-transparent"
                                style={{ width: radius - 20, rotate: `${angle}deg`, left: 20 }}
                            />

                            {/* Particle */}
                            <motion.div
                                className={`absolute w-1 h-1 rounded-full z-10 ${item.particle}`}
                                animate={{
                                    x: [x * 0.9, x * 0.2],
                                    y: [y * 0.9, y * 0.2],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2, ease: "circIn" }}
                            />

                            {/* Node */}
                            <motion.div
                                className="absolute flex flex-col items-center justify-center pointer-events-auto"
                                style={{ x, y }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                            >
                                <div className={`w-9 h-9 rounded-full border border-white/[0.08] bg-white/[0.03] flex items-center justify-center hover:scale-110 hover:bg-white/[0.06] transition-all duration-300 cursor-pointer`}>
                                    <item.icon className={`w-4 h-4 ${item.color}`} />
                                </div>
                            </motion.div>
                        </div>
                    );
                })}

                {/* Ripple effect */}
                <motion.div
                    className="absolute z-0 w-28 h-28 border border-emerald-500/15 rounded-full pointer-events-none"
                    animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
            </div>

            {/* Badge */}
            <motion.div
                className="absolute bottom-4 right-4 bg-white/[0.04] border border-white/[0.08] rounded-full px-3 py-1.5 flex items-center gap-2 z-20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
            >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-semibold text-zinc-300">80+ Integrations</span>
            </motion.div>
        </div>
    );
}


function InsightsCard() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % 4);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const insights = [
        { icon: AlertTriangle, iconColor: "text-amber-400", title: "API Latency Spike", service: "Payment Gateway", action: "scale_nodes(3)" },
        { icon: Database, iconColor: "text-blue-400", title: "High Query Load", service: "User DB Primary", action: "enable_replica()" },
        { icon: ServerCrash, iconColor: "text-rose-400", title: "Pod CrashLoop", service: "Auth Service", action: "rollback_deploy()" },
        { icon: CloudLightning, iconColor: "text-emerald-400", title: "Traffic Surge", service: "Frontend Edge", action: "cache_bumping(true)" },
    ];

    return (
        <div className="flex flex-col items-center justify-center p-5 relative w-full h-full overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.04),transparent_70%)]" />

            <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-[280px] h-[160px]">
                    {insights.map((insight, i) => {
                        const visualIndex = (i - activeIndex + 4) % 4;
                        const zIndex = 10 - visualIndex;

                        return (
                            <motion.div
                                key={i}
                                className="absolute inset-0 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl flex flex-col items-start justify-between p-4"
                                animate={{
                                    y: visualIndex * 18,
                                    x: visualIndex * 18,
                                    scale: 1 - visualIndex * 0.02,
                                    opacity: visualIndex === 3 ? 0.3 : 1,
                                }}
                                transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                                style={{ zIndex }}
                            >
                                <div className="flex items-center gap-3 w-full">
                                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">
                                        <insight.icon className={`w-4 h-4 ${insight.iconColor} ${visualIndex === 0 ? 'animate-pulse' : ''}`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-sm font-bold text-white truncate">{insight.title}</h4>
                                        <p className="text-[10px] text-zinc-500 truncate">Service: {insight.service}</p>
                                    </div>
                                </div>

                                <div className="w-full h-px bg-white/[0.06] my-2" />

                                <div className="w-full">
                                    <p className="text-[9px] text-zinc-400 mb-1.5 uppercase tracking-wider font-semibold">Auto-Resolution:</p>
                                    <div className="flex items-center justify-between bg-white/[0.03] rounded-md px-3 py-1.5 border border-white/[0.06]">
                                        <span className="text-[11px] font-mono text-zinc-400 truncate">{insight.action}</span>
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}