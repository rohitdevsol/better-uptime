'use client'

import Container from "./container";
import Heading from "./heading";
import SubHeading from "./subheading";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import { Bell, ServerCrash, AlertTriangle, CheckCircle2, CloudLightning, Search, Terminal, ArrowRight, CornerDownRight, MessageSquare, Activity, Database, Cloud, Webhook, Blocks, TrendingUp, BarChart2 } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function Feature2() {
    return <section>
        <Container>
            <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 justify-center py-12 md:py-24 lg:py-36">
                <div className="flex flex-col gap-4">
                    <Heading as="h2" className="text-center mx-auto max-w-[90%] md:max-w-xl lg:max-w-3xl">Complete uptime stack in <br className="md:hidden" /> one platform</Heading>
                    <SubHeading as="p" className="max-w-[95%] md:max-w-xl lg:max-w-3xl mx-auto text-center">Monitor everything, log everything, and collaborate on incidents with a single source of truth for your entire operation.</SubHeading>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Feature2Card
                        title="Real-time Alerts"
                        description="Instant notifications when services go down, keeping your team informed and ready to respond."
                    >
                        <Card1 />
                    </Feature2Card>

                    <Feature2Card
                        title="Unified Logging"
                        description="Centralize logs from all systems, search by any field, and find answers in seconds instead of hours."
                    >
                        <Card2 />
                    </Feature2Card>

                    <Feature2Card
                        title="Universal Integration"
                        description="Connect to every monitoring tool, log aggregator, and chat platform you already use seamlessly."
                    >
                        <Card3 />
                    </Feature2Card>

                    <Feature2Card
                        title="Actionable Insights"
                        description="Transform metrics into performance trends that help you identify patterns and improve reliability."
                    >
                        <Card4 />
                    </Feature2Card>
                </div>
            </div>
        </Container>
    </section>
}


function Feature2Card({ title, description, children }: { title: string, description: string, children: React.ReactNode }) {
    return <div className="flex items-center justify-center w-full h-96 bg-gray-50 dark:bg-neutral-800 rounded-md p-2 group hover:shadow transition-all duration-300 ease-out">
        <div className="flex flex-col h-full border border-dashed rounded-sm overflow-hidden">
            <div className="flex-1 h-full w-full bg-background rounded-sm overflow-hidden">
                {children}
            </div>
            <div className="bg-muted min-h-24 p-4 border-t-2 border-dashed flex flex-col gap-1">
                <Heading as="h2" className="line-clamp-1 group-hover:translate-x-2 transition-all duration-300 ease-out" variant="small">{title}</Heading>
                <SubHeading as="p" className="line-clamp-3 group-hover:translate-x-2 transition-all duration-300 ease-out delay-100" variant="small">{description}</SubHeading>
            </div>
        </div>
    </div>
}

function Card1() {
    const allAlerts = [
        { icon: CloudLightning, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20", title: "API Gateway Down", desc: "Latency spike detected", chartValue: 95 },
        { icon: AlertTriangle, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20", title: "High CPU Usage", desc: "Worker Node 3 at 98%", chartValue: 98 },
        { icon: ServerCrash, color: "text-rose-500", bg: "bg-rose-500/10", border: "border-rose-500/20", title: "Database Timeout", desc: "Replication lag > 30s", chartValue: 100 },
        { icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20", title: "System Recovered", desc: "All services back to normal", chartValue: 20 },
        { icon: CloudLightning, color: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-indigo-500/20", title: "Cache Miss Spike", desc: "Redis cache hit rate < 50%", chartValue: 80 },
        { icon: AlertTriangle, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20", title: "Payment Gateway", desc: "503 Error from Stripe API", chartValue: 90 },
    ];

    const [slots, setSlots] = useState([0, 1, 2, 3]);
    const [pulse, setPulse] = useState(false);

    useEffect(() => {
        let cycleCount = 0;
        const interval = setInterval(() => {
            setPulse(true);
            setTimeout(() => setPulse(false), 500);

            setSlots((prev) => {
                const nextSlots = [...prev];
                const slotToUpdate = cycleCount % 4;
                const randomNextAlert = Math.floor(Math.random() * allAlerts.length);
                nextSlots[slotToUpdate] = randomNextAlert;
                cycleCount++;
                return nextSlots;
            });
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center p-4 relative w-full h-full overflow-hidden group/card1 gap-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.08),rgba(255,255,255,0))]" />

            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-full rounded-full opacity-0 group-hover/card1:opacity-20 transition-opacity duration-700 pointer-events-none"
                style={{
                    background: "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 270deg, rgba(99, 102, 241, 0.15) 360deg)"
                }}
            />

            <div className="relative mt-4 z-10 shrink-0">
                <motion.div
                    animate={{ scale: pulse ? 1.05 : 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative z-10 w-12 h-12 bg-muted border border-border/50 rounded-full flex items-center justify-center shadow-md group/pulse"
                >
                    <Bell className={`w-5 h-5 transition-colors ${pulse ? 'text-indigo-500' : 'text-muted-foreground group-hover/pulse:text-indigo-400'}`} />
                    <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
                </motion.div>
                {pulse && (
                    <motion.div
                        initial={{ scale: 1, opacity: 0.5 }}
                        animate={{ scale: 3.5, opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute inset-0 rounded-full bg-indigo-500 pointer-events-none"
                    />
                )}
            </div>

            <div className="grid grid-cols-2 gap-4 z-10 w-full px-2 mt-auto pb-2">
                {slots.map((alertIdx, slotIndex) => {
                    const alert = allAlerts[alertIdx];
                    const Icon = alert.icon;
                    return (
                        <div
                            key={`slot-${slotIndex}`}
                            className={`flex flex-col p-3 rounded-2xl border ${alert.border} bg-muted shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden group/notif h-full justify-center`}
                        >
                            <AnimatePresence mode="popLayout" initial={false}>
                                <motion.div
                                    key={alertIdx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.2 } }}
                                    transition={{ duration: 0.4 }}
                                    className="flex items-start gap-2.5 w-full h-full"
                                >
                                    <div className={`p-2 rounded-lg ${alert.bg} shrink-0`}>
                                        <Icon className={`w-4 h-4 ${alert.color}`} />
                                    </div>
                                    <div className="flex flex-col min-w-0 flex-1 justify-center">
                                        <span className="text-xs font-semibold text-foreground leading-tight truncate">{alert.title}</span>
                                        <span className="text-[10px] text-muted-foreground font-medium truncate mt-0.5">{alert.desc}</span>
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

function Card2() {
    type LogEntry = {
        id: number;
        level: 'info' | 'error' | 'warn' | 'success';
        service: string;
        message: string;
        time: string;
    };

    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    const logTemplates = [
        { level: 'info', service: 'auth-svc', message: 'User authenticated successfully session_id=x92...' },
        { level: 'success', service: 'payments-api', message: 'Stripe webhook received config.charge.succeeded' },
        { level: 'info', service: 'db-cluster-1', message: 'Automated backup completed in 4.2s size=1.2GB' },
        { level: 'info', service: 'worker-node-2', message: 'Batch job scheduling task queue processing' },
        { level: 'warn', service: 'api-gateway', message: 'Rate limit approaching for customer_id=8921...' },
        { level: 'error', service: 'search-svc', message: 'ElasticSearch connection timeout retrying in 5s...' },
        { level: 'success', service: 'frontend-app', message: 'Deployment triggered via CI/CD pipeline' },
    ];

    useEffect(() => {
        let count = 0;
        const baseLogs: LogEntry[] = [
            { id: 1001, level: 'info', service: 'system', message: 'Log aggregator initialized. Tail starting...', time: '10:41:22' },
            { id: 1002, level: 'success', service: 'db-cluster-1', message: 'Connection established to main DB', time: '10:41:25' }
        ];

        for (let i = 0; i < 14; i++) {
            const randomLog = logTemplates[Math.floor(Math.random() * logTemplates.length)];
            baseLogs.push({
                id: 1003 + i,
                level: randomLog.level as 'info' | 'error' | 'warn' | 'success',
                service: randomLog.service,
                message: randomLog.message,
                time: `10:41:${(26 + i).toString().padStart(2, '0')}`
            });
        }
        setLogs(baseLogs);

        const interval = setInterval(() => {
            const now = new Date();
            const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

            if (count % 8 === 0) {
                setIsSearching(true);
                setTimeout(() => setIsSearching(false), 2000);
            }

            setLogs((prev) => {
                const randomLog = logTemplates[Math.floor(Math.random() * logTemplates.length)];
                const newLog: LogEntry = {
                    id: Date.now(),
                    level: randomLog.level as 'info' | 'error' | 'warn' | 'success',
                    service: randomLog.service,
                    message: randomLog.message,
                    time: timeStr
                };

                if (prev.length >= 16) {
                    return [...prev.slice(1), newLog];
                }
                return [...prev, newLog];
            });
            count++;
        }, 1200);

        return () => clearInterval(interval);
    }, []);

    const getLogColor = (level: string) => {
        switch (level) {
            case 'error': return 'text-red-500 bg-red-500/10 border-red-500/20';
            case 'warn': return 'text-amber-500 bg-amber-500/10 border-amber-500/20';
            case 'success': return 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20';
            default: return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-4 relative w-full h-full overflow-hidden group/card2">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[16px_16px] opacity-50" />
            <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" />

            <div className="w-full h-full rounded-xl border border-border bg-background shadow-md overflow-hidden flex flex-col relative z-10">

                <div className="h-10 border-b border-border bg-muted/50 flex items-center px-3 gap-2 shrink-0">
                    <div className="flex gap-1.5 shrink-0 mr-2 group/win">
                        <div className="w-2.5 h-2.5 rounded-full bg-border group-hover/card2:bg-red-500 transition-colors" />
                        <div className="w-2.5 h-2.5 rounded-full bg-border group-hover/card2:bg-yellow-500 transition-colors" />
                        <div className="w-2.5 h-2.5 rounded-full bg-border group-hover/card2:bg-green-500 transition-colors" />
                    </div>

                    <div className="flex-1 h-6 bg-background rounded-md border border-border flex items-center px-2 relative overflow-hidden">
                        <Search className={`w-3 h-3 transition-colors duration-300 ${isSearching ? 'text-indigo-500' : 'text-muted-foreground'}`} />

                        <div className="ml-2 flex flex-1 items-center h-full relative">
                            <AnimatePresence mode="wait">
                                {isSearching ? (
                                    <motion.span
                                        key="searching"
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -5 }}
                                        className="text-[10px] text-foreground font-mono"
                                    >
                                        level:"error" OR "timeout"
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="idle"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-[10px] text-muted-foreground font-mono"
                                    >
                                        Search all logs... (Cmd+K)
                                    </motion.span>
                                )}
                            </AnimatePresence>

                            {isSearching && (
                                <motion.div
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                    className="w-1 h-3 bg-indigo-500 ml-1"
                                />
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex-1 p-2 overflow-hidden flex flex-col justify-end bg-[#0A0A0A] dark:bg-black font-mono relative">

                    <div className="absolute inset-0 bg-linear-to-t from-transparent to-[#0A0A0A] opacity-20 pointer-events-none z-10" />

                    <div className="flex flex-col gap-1.5 justify-end w-full">
                        <AnimatePresence initial={false}>
                            {logs.map((log) => {
                                const activeStyle = getLogColor(log.level);
                                const isHighlighted = isSearching && (log.level === 'error' || log.level === 'warn');

                                return (
                                    <motion.div
                                        key={log.id}
                                        layout
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                            scale: isHighlighted ? 1.02 : 1,
                                            backgroundColor: isHighlighted ? 'rgba(79, 70, 229, 0.1)' : 'transparent'
                                        }}
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        className={`flex items-start gap-2 text-[10px] leading-tight group/log px-1 rounded-sm ${isHighlighted ? 'border-l-2 border-indigo-500' : 'border-l-2 border-transparent'}`}
                                    >
                                        <span className="text-neutral-500 shrink-0 select-none hidden sm:inline">{log.time}</span>
                                        <Terminal className="w-3 h-3 text-neutral-600 shrink-0 mt-px group-hover/log:text-neutral-400 transition-colors" />

                                        <div className="flex flex-wrap gap-x-2 gap-y-0.5 items-center flex-1">
                                            <span className={`px-1 rounded-[3px] border text-[8px] font-bold tracking-wider uppercase ${activeStyle}`}>
                                                {log.level}
                                            </span>
                                            <span className="text-neutral-400 font-semibold">{log.service}</span>
                                            <span className={`text-neutral-300 break-all ${log.level === 'error' ? 'text-red-300' : ''}`}>
                                                {log.message}
                                            </span>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <motion.div
                className="absolute bottom-5 right-5 bg-background border border-border shadow-lg rounded-full px-3 py-1.5 flex items-center gap-2 z-20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-xs font-semibold text-foreground">32M events/day</span>
            </motion.div>
        </div>
    );
}

function Card3() {
    const integrations = [
        { icon: MessageSquare, color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20', particle: 'bg-blue-500', name: 'Slack' },
        { icon: Activity, color: 'text-purple-500', bg: 'bg-purple-500/10', border: 'border-purple-500/20', particle: 'bg-purple-500', name: 'Datadog' },
        { icon: Database, color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', particle: 'bg-emerald-500', name: 'MongoDB' },
        { icon: Cloud, color: 'text-sky-500', bg: 'bg-sky-500/10', border: 'border-sky-500/20', particle: 'bg-sky-500', name: 'AWS' },
        { icon: Webhook, color: 'text-pink-500', bg: 'bg-pink-500/10', border: 'border-pink-500/20', particle: 'bg-pink-500', name: 'Webhooks' },
        { icon: Terminal, color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/20', particle: 'bg-orange-500', name: 'Sentry' },
    ];

    return (
        <div className="flex flex-col items-center justify-center p-4 relative w-full h-full overflow-hidden group/card3">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.08),transparent_70%)] opacity-50 block dark:hidden" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.08),transparent_70%)] opacity-50 hidden dark:block" />

            <div className="relative w-64 h-64 flex items-center justify-center -mt-6">

                <div className="absolute z-20 w-16 h-16 rounded-2xl bg-background border-2 border-indigo-500/30 shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)] flex items-center justify-center">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center relative">
                        <Blocks className="w-5 h-5 text-indigo-500 z-10" />
                        <motion.div
                            animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.2, 0.8] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-indigo-500/30 rounded-xl blur-md"
                        />
                    </div>
                </div>

                {integrations.map((item, i) => {
                    const angle = (i * 360) / integrations.length;
                    const radian = (angle * Math.PI) / 180;
                    const radius = 105;
                    const x = Math.cos(radian) * radius;
                    const y = Math.sin(radian) * radius;

                    return (
                        <div key={i} className="absolute top-1/2 left-1/2 w-0 h-0 flex items-center justify-center pointer-events-none">
                            <motion.div
                                className="absolute h-px origin-left opacity-30 bg-linear-to-r from-transparent via-border to-transparent"
                                style={{
                                    width: radius - 20,
                                    rotate: `${angle}deg`,
                                    left: 20
                                }}
                            />

                            <motion.div
                                className={`absolute w-1.5 h-1.5 rounded-full z-10 ${item.particle} shadow-[0_0_8px_rgba(255,255,255,0.5)]`}
                                animate={{
                                    x: [x * 0.9, x * 0.2],
                                    y: [y * 0.9, y * 0.2],
                                    opacity: [0, 1, 0],
                                    scale: [0.5, 1, 0.5]
                                }}
                                transition={{
                                    duration: 1.5 + (i % 2) * 0.3,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                    ease: "circIn"
                                }}
                            />

                            <motion.div
                                className="absolute flex flex-col items-center justify-center pointer-events-auto"
                                style={{ x, y }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                            >
                                <div className={`w-[38px] h-[38px] rounded-full border bg-background flex items-center justify-center shadow-sm relative transition-all duration-300 hover:scale-110 hover:shadow-md hover:z-30 cursor-pointer group/node ${item.border}`}>
                                    <item.icon className={`w-4 h-4 transition-colors ${item.color}`} />
                                    <div className={`absolute inset-0 rounded-full border-2 border-transparent transition-colors opacity-0 group-hover/node:opacity-30 ${item.bg.replace('/10', '')}`} />
                                </div>
                            </motion.div>
                        </div>
                    );
                })}

                <motion.div
                    className="absolute z-0 w-32 h-32 border border-indigo-500/20 rounded-full pointer-events-none"
                    animate={{ scale: [1, 2], opacity: [0.6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.div
                    className="absolute z-0 w-32 h-32 border border-indigo-500/20 rounded-full pointer-events-none"
                    animate={{ scale: [1, 2], opacity: [0.6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5, ease: "easeOut" }}
                />
            </div>

            <motion.div
                className="absolute bottom-5 right-5 bg-background border border-border shadow-lg rounded-full px-3 py-1.5 flex items-center gap-2 z-20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
            >
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-foreground">80+ Integrations</span>
            </motion.div>
        </div>
    );
}

function Card4() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % 4);
        }, 2000);

        return () => clearInterval(interval);
    }, [isHovered]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, { damping: 20, stiffness: 80 });
    const smoothY = useSpring(mouseY, { damping: 20, stiffness: 80 });

    const rotateX = useTransform(smoothY, [-150, 150], [5, -5]);
    const rotateZ = useTransform(smoothX, [-150, 150], [-3, 3]);

    function handleMouseMove(e: React.MouseEvent) {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
    }

    function handleMouseLeave() {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
    }

    const insights = [
        {
            icon: AlertTriangle,
            iconColor: "text-amber-500",
            iconBg: "bg-amber-500/20",
            iconBorder: "border-amber-500/30",
            title: "API Latency Spike",
            service: "Payment Gateway",
            action: "scale_nodes(3)",
        },
        {
            icon: Database,
            iconColor: "text-blue-500",
            iconBg: "bg-blue-500/20",
            iconBorder: "border-blue-500/30",
            title: "High Query Load",
            service: "User DB Primary",
            action: "enable_replica()",
        },
        {
            icon: ServerCrash,
            iconColor: "text-rose-500",
            iconBg: "bg-rose-500/20",
            iconBorder: "border-rose-500/30",
            title: "Pod CrashLoop",
            service: "Auth Service",
            action: "rollback_deploy()",
        },
        {
            icon: CloudLightning,
            iconColor: "text-emerald-500",
            iconBg: "bg-emerald-500/20",
            iconBorder: "border-emerald-500/30",
            title: "Traffic Surge",
            service: "Frontend Edge",
            action: "cache_bumping(true)",
        }
    ];

    return (
        <div
            ref={containerRef}
            className="flex flex-col items-center justify-center p-4 relative w-full h-[320px] overflow-hidden group/card4 dark:bg-black/20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.08),transparent_70%)] opacity-50 block" />

            <div className="relative w-full h-full flex items-center justify-center -mt-8 -ml-8 pointer-events-none">

                <motion.div
                    className="relative w-[300px] h-[160px]"
                    style={{
                        rotateX,
                        rotateZ
                    }}
                >
                    {insights.map((insight, originalIndex) => {
                        const visualIndex = (originalIndex - activeIndex + 4) % 4;
                        const zIndex = 10 - visualIndex;

                        const hoverY = (3 - visualIndex) * -10;
                        const hoverX = (3 - visualIndex) * -15;

                        const restY = visualIndex * 20;
                        const restX = visualIndex * 20;
                        const isCyclingBack = visualIndex === 3 && !isHovered;

                        const animX = isCyclingBack ? restX + 60 : (isHovered ? hoverX : restX);
                        const animY = isCyclingBack ? restY - 30 : (isHovered ? hoverY : restY);
                        const animOpacity = isCyclingBack ? 0.4 : 1;

                        return (
                            <motion.div
                                key={originalIndex}
                                className="absolute inset-0 bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl flex flex-col items-start justify-between p-4"
                                animate={{
                                    y: animY,
                                    x: animX,
                                    scale: isHovered ? 1.05 : 1,
                                    opacity: animOpacity,
                                }}
                                transition={{
                                    duration: isCyclingBack ? 0.4 : 0.6,
                                    type: "spring",
                                    bounce: 0.3
                                }}
                                style={{ zIndex }}
                            >
                                <div className="flex items-center gap-3 w-full">
                                    <div className={`w-9 h-9 rounded-full ${insight.iconBg} flex items-center justify-center shrink-0 border ${insight.iconBorder}`}>
                                        <insight.icon className={`w-4 h-4 ${insight.iconColor} ${visualIndex === 0 ? 'animate-pulse' : ''}`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-sm font-bold text-foreground leading-tight truncate">{insight.title}</h4>
                                        <p className="text-xs text-muted-foreground leading-tight truncate">Service: {insight.service}</p>
                                    </div>
                                </div>

                                <div className="w-full h-px bg-border my-2" />

                                <div className="w-full">
                                    <p className="text-[10px] text-foreground mb-1.5 uppercase tracking-wider font-semibold">Auto-Resolution Triggered:</p>
                                    <div className="flex items-center justify-between bg-muted rounded-md px-3 py-1.5 border border-border">
                                        <span className="text-xs font-mono text-muted-foreground mr-2 truncate">{insight.action}</span>
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}

                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-5 bg-background border border-border shadow-lg rounded-full px-4 py-1.5 flex items-center gap-2 z-20 pointer-events-none"
                animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? 10 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="w-2 h-2 rounded-full bg-amber-500/50 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-amber-500 animate-ping" />
                </div>
                <span className="text-xs font-semibold text-foreground">Hover to Unpack Feed</span>
            </motion.div>
        </div>
    );
}