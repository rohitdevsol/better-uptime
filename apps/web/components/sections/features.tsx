"use client";

import { Activity, Brain, Database, LucideIcon, Users } from "lucide-react";
import { motion } from "motion/react";
import Container from "./container";
import Heading from "./heading";
import SubHeading from "./subheading";

export const FEATURES = [
    {
        title: "Real-time monitoring",
        description:
            "Track uptime and performance metrics across all your services with instant alerts.",
        card: Card1
    },
    {
        title: "Centralized logging",
        description:
            "Aggregate and search logs from all systems in one unified dashboard for faster debugging.",
        card: Card2
    },
    {
        title: "Team mentoring",
        description:
            "Collaborate on incidents and share knowledge with your team for continuous improvement.",
        card: Card3
    },
];

export default function Features() {
    return <section>
        <Container className="py-12 md:py-24 lg:py-36">
            <div className="flex flex-col md:flex-row items-stretch gap-4 justify-center">
                {FEATURES.map((feature, index) => (
                    <FeatureCard key={index} {...feature}>
                        <feature.card />
                    </FeatureCard>
                ))}
            </div>
        </Container>
    </section>
}

function FeatureCard({ title, description, children }: { title: string, description: string, children: React.ReactNode }) {
    return <div className="flex flex-col gap-4 h-120 rounded-2xl md:rounded-md group hover:shadow transition-all duration-300 ease-out">

        <div className="flex-1 p-1 overflow-hidden rounded-xl md:rounded-md bg-gray-50 dark:bg-neutral-700 w-full group-hover:shadow transition-all duration-300 ease-out">
            {children}
        </div>

        <div className="flex flex-col gap-1 min-h-24">
            <Heading variant="small" as="h2" className="group-hover:translate-x-2 transition-all duration-300 ease-out">
                {title}
            </Heading>
            <SubHeading variant="small" as="p" className="line-clamp-3 group-hover:translate-x-2 transition-all duration-300 ease-out delay-100">
                {description}
            </SubHeading>
        </div>
    </div>
}

function Card1() {
    const hardcodedBars = [
        { h: ["30%", "60%", "40%", "30%"], delay: 0 },
        { h: ["40%", "80%", "50%", "40%"], delay: 0.1 },
        { h: ["20%", "50%", "30%", "20%"], delay: 0.2 },
        { h: ["60%", "90%", "60%", "60%"], delay: 0.3 },
        { h: ["35%", "70%", "45%", "35%"], delay: 0.4 },
        { h: ["50%", "85%", "55%", "50%"], delay: 0.5 },
        { h: ["25%", "55%", "35%", "25%"], delay: 0.6 },
        { h: ["45%", "75%", "50%", "45%"], delay: 0.7 },
        { h: ["30%", "65%", "40%", "30%"], delay: 0.8 },
        { h: ["55%", "90%", "65%", "55%"], delay: 0.9 },
        { h: ["20%", "45%", "25%", "20%"], delay: 1.0 },
        { h: ["40%", "80%", "50%", "40%"], delay: 1.1 },
        { h: ["35%", "65%", "45%", "35%"], delay: 1.2 },
        { h: ["60%", "95%", "70%", "60%"], delay: 1.3 },
        { h: ["25%", "50%", "30%", "25%"], delay: 1.4 },
        { h: ["50%", "85%", "60%", "50%"], delay: 1.5 },
    ];

    return (
        <div className="relative w-full h-full bg-background rounded-md md:rounded-md border border-dashed overflow-hidden group/monitoring shadow-sm flex flex-col min-h-[300px] z-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[16px_16px] opacity-40"></div>

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl group-hover/monitoring:bg-emerald-500/20 transition-colors duration-700"></div>

            <div className="relative flex items-center justify-between p-4 border-b rounded-t-sm border-neutral-100/80 dark:border-neutral-800/80 bg-foreground/10 backdrop-blur-sm z-10">
                <div className="flex items-center gap-2.5">
                    <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground tracking-tight">System Status</span>
                </div>
                <div className="flex items-center gap-1 bg-background text-emerald-600 px-2 py-1 rounded-md border text-[10px] font-medium uppercase tracking-wider">
                    <Activity className="w-3 h-3" />
                    <span>Healthy</span>
                </div>
            </div>

            <div className="relative flex-1 p-4 flex flex-col gap-4 z-10">

                <div className="grid grid-cols-2 gap-3">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-muted border shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] rounded-lg p-3 flex flex-col gap-1 relative overflow-hidden"
                    >
                        <span className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider">Requests / s</span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-xl font-bold text-foreground">1,248</span>
                            <span className="text-[9px] text-emerald-500 font-medium">↑ 12%</span>
                        </div>
                        <svg className="w-full h-6 mt-1" viewBox="0 0 100 24" preserveAspectRatio="none">
                            <motion.path
                                d="M0,20 L10,15 L20,18 L30,10 L40,12 L50,5 L60,15 L70,8 L80,12 L90,4 L100,10"
                                fill="none"
                                stroke="#10b981"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                            />
                        </svg>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-muted border shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] rounded-lg p-3 flex flex-col gap-1 relative overflow-hidden"
                    >
                        <span className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider">Avg Latency</span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-xl font-bold text-neutral-800">42</span>
                            <span className="text-[9px] text-neutral-500 font-medium">ms</span>
                        </div>

                        <div className="flex items-end gap-1 h-6 mt-1 w-full opacity-60">
                            {[40, 70, 45, 90, 65, 30, 80, 50].map((h, i) => (
                                <motion.div
                                    key={i}
                                    className="flex-1 bg-neutral-200 rounded-t-[1px]"
                                    animate={{ height: [`${h}%`, `${h * 0.5}%`, `${h}%`] }}
                                    transition={{ duration: 2 + i * 0.1, repeat: Infinity, ease: "easeInOut" }}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="flex flex-col gap-2 mt-auto">
                    <div className="flex items-center justify-between">
                        <span className="text-[10px] text-neutral-500 font-medium uppercase tracking-wider">Live Traffic Hub</span>
                        <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                    </div>
                    <div className="flex items-end justify-between h-[72px] gap-1 opacity-80 group-hover/monitoring:opacity-100 transition-opacity duration-500">
                        {hardcodedBars.map((bar, i) => (
                            <div key={i} className="relative w-full bg-accent rounded-t-sm h-full overflow-hidden">
                                <motion.div
                                    className="absolute bottom-0 left-0 w-full bg-linear-to-t from-emerald-600 to-emerald-400 rounded-t-sm"
                                    animate={{ height: bar.h }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: bar.delay
                                    }}
                                />
                                <motion.div
                                    className="absolute bottom-0 left-0 w-full bg-foreground/10 backdrop-blur-[1px] rounded-t-sm"
                                    animate={{ height: bar.h }}
                                    transition={{
                                        duration: 3.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: bar.delay + 0.5
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

function Card2() {
    const logs = [
        { type: "info", text: "GET /api/v1/users 200 12ms", time: "10:42:01" },
        { type: "info", text: "POST /api/v1/auth 201 45ms", time: "10:42:03" },
        { type: "warn", text: "Rate query latency spike detected", highlight: true, time: "10:42:08" },
        { type: "error", text: "Database connection timeout (30s)", typeColor: "text-red-400", time: "10:42:14" },
        { type: "info", text: "Initiating failover sequence...", time: "10:42:15" },
        { type: "info", text: "Failover complete. Primary: node-b", highlight: true, time: "10:42:18" },
        { type: "info", text: "GET /api/v1/dashboard 200 18ms", time: "10:42:22" },
    ];

    return (
        <div className="relative w-full h-full bg-background rounded-xl md:rounded-md border border-dashed overflow-hidden group/logging shadow-sm flex flex-col min-h-[300px]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[16px_16px] opacity-40"></div>

            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover/logging:bg-blue-500/20 transition-colors duration-700"></div>


            <div className="relative flex items-center justify-between p-4 border-b rounded-t-sm border-neutral-100/80 dark:border-neutral-800/80 bg-foreground/10 backdrop-blur-sm z-10">
                <div className="flex items-center gap-2.5">
                    <Database className="w-4 h-4 text-blue-500" />
                    <span className="text-xs font-semibold text-muted-foreground tracking-tight">Log Stream</span>
                </div>

                <div className="flex bg-background border rounded-md px-2 py-1 items-center gap-2 w-32 shadow-xs">
                    <span className="text-[10px] text-neutral-400">Search "error"...</span>
                    <motion.div
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-0.5 h-3 bg-blue-500 ml-auto"
                    />
                </div>
            </div>


            <div className="relative flex-1 p-3 flex flex-col gap-2 z-10 m-4 bg-neutral-950 rounded-lg border border-neutral-800 shadow-[0_8px_16px_-6px_rgba(0,0,0,0.4)] font-mono text-[10px] overflow-hidden">

                <div className="flex gap-1.5 mb-1 ml-1 z-20 relative">
                    <div className="w-2 h-2 rounded-full bg-red-500/40 group-hover/logging:bg-red-500 transition-colors duration-300"></div>
                    <div className="w-2 h-2 rounded-full bg-amber-500/40 group-hover/logging:bg-amber-500 transition-colors duration-300 delay-75"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/40 group-hover/logging:bg-green-500 transition-colors duration-300 delay-150"></div>
                </div>

                <div className="flex flex-col gap-1.5 relative h-full flex-1 overflow-hidden">

                    <motion.div
                        className="flex flex-col gap-2 relative mt-2 shrink-0"
                        animate={{ y: ["0%", "-50%"] }}
                        transition={{
                            duration: 15,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {[...logs, ...logs].map((log, i) => (
                            <div
                                key={i}
                                className={`flex items-start gap-2 relative ${log.highlight ? 'bg-blue-500/10 -mx-3 px-3 py-0.5 border-l-2 border-blue-500/50' : 'px-0 border-l-2 border-transparent'} group-hover/logging:opacity-100 opacity-80 transition-opacity`}
                            >
                                <span className="text-neutral-500 shrink-0">{log.time}</span>
                                <span className={`shrink-0 ${log.type === 'info' ? 'text-blue-400' :
                                    log.type === 'warn' ? 'text-amber-400' :
                                        'text-red-400'
                                    }`}>
                                    [{log.type.toUpperCase()}]
                                </span>
                                <span className={`${log.type === 'error' ? 'text-red-300' :
                                    log.type === 'warn' ? 'text-amber-200' : 'text-neutral-300'
                                    }`}>
                                    {log.text}
                                </span>
                            </div>
                        ))}
                    </motion.div>


                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,#0a0a0a_0%,transparent_15%,transparent_85%,#0a0a0a_100%)] z-10"></div>
                </div>
            </div>


            <div className="absolute bottom-4 right-4 flex gap-1 z-10">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-1.5 h-1.5 rounded-[1px] bg-blue-500/40"
                        animate={{
                            opacity: [0.4, 1, 0.4],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2
                        }}
                    />
                ))}
            </div>

        </div>
    );
}

function Card3() {
    const cursors = [
        {
            x: ["20%", "50%", "35%", "20%"],
            y: ["30%", "60%", "25%", "30%"],
            color: "text-purple-500",
            bg: "bg-purple-500",
            name: "Sarah (DevOps)",
            delay: 0
        },
        {
            x: ["70%", "40%", "60%", "70%"],
            y: ["60%", "20%", "50%", "60%"],
            color: "text-orange-500",
            bg: "bg-orange-500",
            name: "Alex (Backend)",
            delay: 1.5
        },
    ];

    const timeline = [
        { user: "Sarah", text: "Investigating API latency...", time: "2m ago" },
        { user: "Alex", text: "Found a bottleneck in DB query.", time: "1m ago" },
        { user: "Sarah", text: "Applying index optimization", time: "Just now" },
    ];

    return (
        <div className="relative w-full h-full bg-background rounded-xl md:rounded-md border overflow-hidden group/mentoring shadow-sm flex flex-col min-h-[300px]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[16px_16px] opacity-40"></div>

            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover/mentoring:bg-purple-500/20 transition-colors duration-700"></div>


            <div className="relative flex items-center justify-between p-4 border-b rounded-t-sm dark:border-neutral-800/80 bg-foreground/10 backdrop-blur-sm z-10">
                <div className="flex items-center gap-2.5">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span className="text-xs font-semibold text-muted-foreground tracking-tight">Active Incident #842</span>
                </div>
                <div className="flex items-center -space-x-1 hover:space-x-1 transition-all">
                    <div className="relative w-5 h-5 rounded-full bg-purple-100 border border-white flex items-center justify-center text-[8px] font-bold text-purple-600 z-20">
                        S
                        <span className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-emerald-400 border border-white rounded-full"></span>
                    </div>
                    <div className="relative w-5 h-5 rounded-full bg-orange-100 border border-white flex items-center justify-center text-[8px] font-bold text-orange-600 z-10">
                        A
                        <span className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-emerald-400 border border-white rounded-full"></span>
                    </div>
                </div>
            </div>


            <div className="relative flex-1 p-4 z-10 overflow-hidden">
                <div className="w-full max-w-[85%] bg-muted border shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] rounded-lg p-3 mx-auto mt-4 group-hover/mentoring:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.1)] transition-shadow">
                    <div className="flex justify-between items-center mb-3">
                        <div className="h-2 w-1/3 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
                        <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-1.5 w-full bg-neutral-100 dark:bg-neutral-700 rounded-full"></div>
                        <div className="h-1.5 w-5/6 bg-neutral-100 dark:bg-neutral-700 rounded-full"></div>
                        <div className="h-1.5 w-4/6 bg-neutral-100 dark:bg-neutral-700 rounded-full"></div>
                    </div>
                </div>

                {cursors.map((cursor, i) => (
                    <motion.div
                        key={i}
                        className="absolute pointer-events-none drop-shadow-md z-20 flex flex-col items-start gap-1"
                        animate={{ left: cursor.x, top: cursor.y }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: cursor.delay
                        }}
                    >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${cursor.color}`}>
                            <path d="M5.65376 21.2674C5.23235 21.6366 4.54922 21.3655 4.51613 20.817L3.00693 2.19318C2.9723 1.76595 3.44747 1.48866 3.82497 1.7169L21.4116 12.355C21.8415 12.6151 21.7801 13.2573 21.3093 13.4243L14.3168 15.9056C14.0531 15.9991 13.8427 16.1822 13.7258 16.4264L10.334 23.5186C10.1226 23.9606 9.47963 23.9877 9.23126 23.5654L5.65376 21.2674Z" fill="currentColor" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                        </svg>
                        <div className={`px-1.5 py-0.5 rounded-[4px] text-[8px] font-medium text-white ${cursor.bg} shadow-sm whitespace-nowrap`}>
                            {cursor.name}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="relative mt-auto p-4 border-t bg-foreground/10 backdrop-blur-sm z-10 flex flex-col justify-end">
                <div className="flex flex-col gap-2">
                    {timeline.map((event, i) => (
                        <div key={i} className="flex gap-2 text-[10px] items-start border-l-2 border-transparent hover:border-purple-200 pl-1 -ml-1 transition-colors">
                            <div className="flex flex-col gap-0.5 mt-0.5 flex-1 w-full relative">
                                <div className="flex items-center gap-1">
                                    <span className="font-semibold text-foreground">{event.user}</span>
                                    <span className="text-muted-foreground shrink-0 text-[8px] ml-auto">{event.time}</span>
                                </div>
                                <span className="text-muted-foreground">{event.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}