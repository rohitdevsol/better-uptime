"use client";

import { BarChart, Calendar, LucideIcon, Users, MessageSquare } from "lucide-react";
import { Badge } from "../ui/badge";
import Container from "./container";
import Heading from "./heading";
import SubHeading from "./subheading";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Feature3() {
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % 3);
        }, 5000); // Changed from 3000 to 5000
        return () => clearInterval(interval);
    }, []);

    const features = [
        {
            title: "Plan your schedules",
            description: "Explore your data, build your dashboard, bring your team together.",
            icon: Calendar,
        },
        {
            title: "Data to insights in minutes",
            description: "Transform raw data into actionable insights with powerful analytics tools.",
            icon: BarChart,
        },
        {
            title: "Collaborate seamlessly",
            description: "Work together in real-time with your team and share insights instantly.",
            icon: Users,
        }
    ];

    return (
        <section>
            <Container>
                <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 justify-center py-12 md:py-24 lg:py-36">
                    <div className="flex flex-col gap-4">
                        <Badge className="w-fit mx-auto bg-linear-to-r from-primary via-emerald-500 to-primary rounded-md ">
                            Platform features
                        </Badge>
                        <Heading
                            as="h2"
                            className="text-center mx-auto max-w-[90%] md:max-w-xl lg:max-w-4xl"
                        >
                            Streamline your business operations
                        </Heading>

                        <SubHeading
                            as="p"
                            className="max-w-[95%] md:max-w-xl lg:max-w-3xl mx-auto text-center"
                        >
                            Manage schedules, analyze data, and collaborate with your team all in one powerful platform.
                        </SubHeading>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="flex flex-col gap-4">
                            {features.map((feature, index) => (
                                <FeatureCardDetail
                                    key={index}
                                    title={feature.title}
                                    description={feature.description}
                                    active={activeTab === index}
                                    icon={feature.icon}
                                    onClick={() => setActiveTab(index)}
                                />
                            ))}
                        </div>

                        <div className="relative flex items-center justify-center border border-dashed w-full h-full min-h-[300px] lg:min-h-[500px] bg-muted/40 rounded-xl p-4 overflow-hidden shadow-inner isolate">
                            <AnimatePresence mode="wait">
                                {activeTab === 0 && (
                                    <motion.div
                                        key="card1"
                                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="w-full h-full flex items-center justify-center"
                                    >
                                        <Card1 />
                                    </motion.div>
                                )}
                                {activeTab === 1 && (
                                    <motion.div
                                        key="card2"
                                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="w-full h-full flex items-center justify-center"
                                    >
                                        <Card2 />
                                    </motion.div>
                                )}
                                {activeTab === 2 && (
                                    <motion.div
                                        key="card3"
                                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="w-full h-full flex items-center justify-center"
                                    >
                                        <Card3 />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <motion.div 
                                animate={{
                                    background: activeTab === 0 ? "radial-gradient(circle, rgba(16,185,129,0.1) 0%, rgba(0,0,0,0) 70%)" :
                                                activeTab === 1 ? "radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(0,0,0,0) 70%)" :
                                                "radial-gradient(circle, rgba(249,115,22,0.1) 0%, rgba(0,0,0,0) 70%)"
                                }}
                                className="absolute inset-0 -z-10 transition-colors duration-700 ease-in-out"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

function FeatureCardDetail({ title, description, active, icon: Icon, onClick }: { title: string, description: string, active: boolean, icon: LucideIcon, onClick: () => void }) {
    return (
        <div 
            onClick={onClick}
            className={`flex items-start gap-4 border border-dashed rounded-xl p-4 cursor-pointer transition-all duration-300 relative overflow-hidden group ${
                active ? "bg-muted/60 border-primary/50 shadow-sm" : "hover:bg-muted/30 border-transparent hover:border-dashed hover:border-muted-foreground/30"
            }`}
        >
            {active && (
                <motion.div 
                    layoutId="activeFeatureIndicator" 
                    className="absolute inset-0 bg-primary/5 rounded-xl -z-10" 
                />
            )}
            <div className={`flex items-center justify-center w-11 h-10 rounded-md border border-dashed mt-1 transition-colors duration-300 ${
                active ? "bg-primary/10 border-primary/30 text-primary" : "bg-muted text-muted-foreground"
            }`}>
                <Icon className="w-5 h-5 shrink-0" />
            </div>
            <div className="flex flex-col gap-1">
                <Heading 
                    as="h2" 
                    className={`${active ? "text-primary translate-x-1" : "text-foreground"} line-clamp-1 transition-all duration-300 ease-out group-hover:translate-x-1`} 
                    variant="small"
                >
                    {title}
                </Heading>
                <SubHeading 
                    as="p" 
                    className={`${active ? "text-muted-foreground translate-x-1" : "text-muted-foreground/70"} line-clamp-3 transition-all duration-300 ease-out delay-100 group-hover:translate-x-1`} 
                    variant="small"
                >
                    {description}
                </SubHeading>
            </div>
        </div>
    );
}

function Card1() {
    return (
        <div className="relative w-full h-full bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-xl p-0 flex flex-col overflow-hidden group">
            <div className="flex justify-between items-center p-4 border-b border-border/50 bg-muted/20 relative z-20">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                        <Calendar className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div>
                        <div className="text-xs font-semibold text-foreground">Team Schedule</div>
                        <div className="text-[10px] text-muted-foreground">March 2026</div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex -space-x-2 mr-2">
                        {[1, 2, 3].map((i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, scale: 0.5, x: 10 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ delay: 0.1 * i, type: "spring", stiffness: 200, damping: 15 }}
                                className="w-6 h-6 rounded-full border-2 border-background bg-secondary z-10 flex items-center justify-center overflow-hidden"
                            >
                                <Users className="w-3 h-3 text-muted-foreground/60" />
                            </motion.div>
                        ))}
                    </div>
                    <div className="h-6 px-2 rounded-md bg-emerald-500 text-white text-[10px] font-medium flex items-center justify-center shadow-sm">
                        + New Event
                    </div>
                </div>
            </div>
            <div className="flex-1 flex bg-grid-pattern relative z-10">
                <div className="w-14 border-r border-border/50 flex flex-col py-3 bg-background/50 backdrop-blur-sm z-20">
                    {["09:00", "10:00", "11:00", "12:00"].map((time, i) => (
                        <div key={i} className="flex-1 flex justify-center text-[9px] text-muted-foreground font-medium pt-1 relative">
                            {time}
                            {i === 1 && (
                                <motion.div 
                                    initial={{ width: 0, opacity: 0 }} 
                                    animate={{ width: "300px", opacity: 1 }} 
                                    transition={{ delay: 1 }}
                                    className="absolute top-1/2 left-full ml-1 h-px bg-emerald-500/50 shadow-[0_0_8px_rgba(16,185,129,0.5)] z-0 pointer-events-none" 
                                >
                                    <span className="absolute -left-1 -top-1 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,1)]"></span>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex-1 relative p-2 h-[200px] overflow-hidden">
                    <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="absolute top-2 left-2 right-2 h-14 bg-blue-500/10 border border-blue-500/20 rounded-md p-2 flex flex-col gap-1 shadow-sm overflow-hidden"
                    >
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                        <div className="flex justify-between items-start ml-2">
                            <span className="text-[10px] font-semibold text-blue-500">Engineering Sync</span>
                            <span className="text-[8px] text-muted-foreground font-medium">09:00 - 10:00</span>
                        </div>
                        <div className="flex items-center gap-1.5 ml-2 mt-auto">
                            <Users className="w-2.5 h-2.5 text-blue-500/70" />
                            <span className="text-[8px] text-blue-500/70">12 attendees</span>
                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 100 }}
                        className="absolute top-16 left-2 right-12 h-[72px] bg-emerald-500/15 border-2 border-emerald-500/40 rounded-md p-2 flex flex-col gap-1 shadow-[0_4px_15px_-5px_rgba(16,185,129,0.2)] overflow-hidden z-10"
                    >
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
                        <div className="flex justify-between items-center ml-2">
                            <span className="text-[10px] font-bold text-emerald-500">Product Review Q3</span>
                            <div className="flex -space-x-1">
                                <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500"></div>
                                <div className="w-4 h-4 rounded-full bg-background border border-border"></div>
                            </div>
                        </div>
                        <div className="h-1.5 w-3/4 bg-emerald-500/30 rounded-full ml-2 mt-1"></div>
                        <div className="h-1.5 w-1/2 bg-emerald-500/20 rounded-full ml-2"></div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.7, type: "spring" }}
                        className="absolute top-[148px] left-6 right-2 h-12 bg-orange-500/10 border border-orange-500/20 rounded-md p-2 flex flex-col gap-1 shadow-sm overflow-hidden"
                    >
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"></div>
                        <div className="flex justify-between items-start ml-2">
                            <span className="text-[10px] font-semibold text-orange-500">Design Critique</span>
                            <span className="text-[8px] text-muted-foreground font-medium">11:30 - 12:30</span>
                        </div>
                    </motion.div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 1.2 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="absolute bottom-3 right-3 w-40 bg-background border border-border shadow-xl rounded-lg p-3 flex flex-col gap-2 z-30 transition-transform duration-300"
            >
                <div className="flex gap-2 items-center border-b border-border/50 pb-2">
                    <div className="w-5 h-5 rounded flex items-center justify-center bg-emerald-500/10">
                        <BarChart className="w-3 h-3 text-emerald-500" />
                    </div>
                    <span className="text-[10px] font-medium text-foreground">Weekly Overview</span>
                </div>
                
                <div className="flex justify-between items-center px-1">
                    <div className="flex flex-col">
                        <span className="text-[16px] font-bold text-emerald-500 tracking-tight">24h</span>
                        <span className="text-[8px] text-muted-foreground">Meeting Time</span>
                    </div>
                    <div className="h-8 w-px bg-border/50"></div>
                    <div className="flex flex-col items-end">
                        <span className="text-[16px] font-bold text-foreground tracking-tight">8</span>
                        <span className="text-[8px] text-muted-foreground">Events</span>
                    </div>
                </div>
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 blur-3xl -z-10 rounded-full pointer-events-none" />
        </div>
    );
}

function Card2() {
    return (
        <div className="relative w-full h-full bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-xl p-4 flex flex-col gap-4 overflow-hidden group">
            <div className="flex justify-between items-start relative z-10">
                <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                        <BarChart className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="flex flex-col gap-1.5 justify-center">
                        <div className="h-2.5 w-24 bg-foreground/20 rounded-md"></div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-12 bg-muted-foreground/30 rounded-md"></div>
                            <div className="flex items-center gap-1">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <div className="h-1.5 w-8 bg-emerald-500/50 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-1.5 mt-1">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-foreground/20"></div>
                    ))}
                </div>
            </div>
            <div className="flex-1 relative mt-2 z-10">
                <div className="absolute inset-0 flex flex-col justify-between pb-6 opacity-30">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-full border-t border-dashed border-border/60"></div>
                    ))}
                </div>
                <div className="absolute inset-0 flex items-end justify-between px-2 pb-6 pt-4 gap-2 opacity-40">
                    {[30, 45, 25, 60, 40, 75, 50, 85].map((height, i) => (
                        <motion.div
                            key={`bar-${i}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: `${height}%`, opacity: 1 }}
                            transition={{ delay: 0.2 + i * 0.05, duration: 0.5 }}
                            className="bg-blue-500/20 w-full rounded-t-sm"
                        />
                    ))}
                </div>
                <div className="absolute inset-0 flex items-end justify-between px-2 pb-6 pt-4">
                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <motion.path 
                            d="M 0,80 C 15,70 25,30 40,50 C 55,70 65,10 80,20 C 90,25 95,40 100,30" 
                            fill="none" 
                            stroke="rgba(59,130,246,0.8)" 
                            strokeWidth="3"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
                        />
                        <motion.path 
                            d="M 0,80 C 15,70 25,30 40,50 C 55,70 65,10 80,20 C 90,25 95,40 100,30 L 100,100 L 0,100 Z" 
                            fill="url(#blueGradient)" 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                        />
                        <defs>
                            <linearGradient id="blueGradient" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="rgba(59,130,246,0.3)" />
                                <stop offset="100%" stopColor="rgba(59,130,246,0)" />
                            </linearGradient>
                        </defs>
                    </svg>
                    {[
                        { left: "0%", top: "80%" },
                        { left: "40%", top: "50%" },
                        { left: "80%", top: "20%" },
                        { left: "100%", top: "30%" }
                    ].map((point, i) => (
                        <motion.div
                            key={`point-${i}`}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1 + i * 0.2 }}
                            className="absolute w-3 h-3 bg-background border-2 border-blue-500 rounded-full z-10 shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                            style={{ left: point.left, top: point.top, transform: "translate(-50%, -50%)" }}
                        />
                    ))}
                </div>
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="absolute left-[35%] top-[15%] bg-background border border-border/80 shadow-lg rounded-lg p-2 flex flex-col gap-1 z-20 backdrop-blur-md"
                >
                    <div className="text-[10px] text-muted-foreground font-medium">Revenue</div>
                    <div className="text-xs font-bold text-foreground flex items-center gap-1">
                        $12,450 
                        <span className="text-[9px] text-emerald-500 bg-emerald-500/10 px-1 rounded">+8%</span>
                    </div>
                </motion.div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 text-[8px] text-muted-foreground font-medium">
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Fri</span>
                    <span>Sun</span>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="absolute -bottom-2 -left-2 bg-background/95 backdrop-blur-xl border border-border/80 shadow-2xl rounded-xl p-3 flex items-center gap-3 z-30 transition-transform duration-300"
            >
                <div className="relative">
                    <svg className="w-10 h-10 transform -rotate-90">
                        <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-muted/50" />
                        <motion.circle 
                            cx="20" cy="20" r="16" 
                            stroke="currentColor" 
                            strokeWidth="4" 
                            fill="transparent" 
                            strokeDasharray="100"
                            initial={{ strokeDashoffset: 100 }}
                            animate={{ strokeDashoffset: 25 }}
                            transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
                            className="text-blue-500" 
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-[9px] font-bold">75%</div>
                </div>
                <div className="flex flex-col gap-1 pr-2">
                    <div className="h-1.5 w-12 bg-muted-foreground/40 rounded-full"></div>
                    <div className="h-2 w-16 bg-foreground/80 rounded-full"></div>
                </div>
            </motion.div>
            <div className="absolute -inset-2 bg-linear-to-tr from-blue-500/5 via-transparent to-blue-500/5 blur-2xl -z-10 rounded-full opacity-50" />
        </div>
    );
}

function Card3() {
    return (
        <div className="relative w-full h-full bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-xl p-0 flex flex-col overflow-hidden group">
            <div className="flex justify-between items-center p-3 border-b border-border/50 bg-muted/30 relative z-30 backdrop-blur-md">
                <div className="flex items-center gap-3">
                    <div className="flex -space-x-1">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    </div>
                    <div className="h-6 px-2 bg-background border border-border rounded flex items-center gap-2">
                        <Users className="w-3 h-3 text-muted-foreground" />
                        <span className="text-[10px] font-medium text-foreground">Marketing Campaign.board</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-[8px] text-emerald-500 font-bold uppercase tracking-wider">Live</span>
                    </div>
                    <div className="flex -space-x-1.5">
                        {[
                            { color: "emerald", ring: "ring-emerald-500" },
                            { color: "blue", ring: "ring-blue-500" },
                            { color: "orange", ring: "ring-orange-500" },
                        ].map((user, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, scale: 0.5, x: 10 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ delay: 0.1 * i, type: "spring" }}
                                className={`w-6 h-6 rounded-full border border-background bg-${user.color}-500/20 z-${30-i} flex items-center justify-center relative ring-1 ${user.ring}`}
                            >
                                <span className={`text-[9px] font-bold text-${user.color}-500`}>
                                    {['You', 'A', 'S'][i]}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <motion.div 
                initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}
                className="absolute left-2 top-16 bottom-2 w-8 bg-background/90 backdrop-blur-md border border-border rounded-lg shadow-sm flex flex-col items-center py-2 gap-3 z-30"
            >
                <div className="w-5 h-5 rounded cursor-pointer flex items-center justify-center bg-primary/10 text-primary">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>
                </div>
                <div className="w-5 h-5 rounded cursor-pointer flex items-center justify-center text-muted-foreground hover:bg-muted/50">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg>
                </div>
                <div className="w-5 h-5 rounded cursor-pointer flex items-center justify-center text-muted-foreground hover:bg-muted/50">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>
                </div>
                <div className="w-5 h-5 rounded cursor-pointer flex items-center justify-center text-muted-foreground hover:bg-muted/50 mt-auto">
                    <MessageSquare className="w-3 h-3" />
                </div>
            </motion.div>
            <div className="flex-1 relative bg-grid-pattern bg-size-[12px_12px] bg-position-[calc(50%-1px)_calc(50%-1px)] overflow-hidden">
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                    <path 
                        d="M 120,60 C 150,60 160,110 190,110" 
                        fill="none" stroke="rgba(59,130,246,0.2)" strokeWidth="2" strokeDasharray="4 4"
                    />
                    <motion.path 
                        d="M 120,60 C 150,60 160,110 190,110" 
                        fill="none" stroke="rgba(59,130,246,1)" strokeWidth="4"
                        style={{ filter: "blur(2px)" }}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <path 
                        d="M 120,60 C 120,160 150,160 170,160" 
                        fill="none" stroke="rgba(16,185,129,0.2)" strokeWidth="2" strokeDasharray="4 4"
                    />
                    <motion.path 
                        d="M 120,60 C 120,160 150,160 170,160" 
                        fill="none" stroke="rgba(16,185,129,1)" strokeWidth="4"
                        style={{ filter: "blur(2px)" }}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                    />
                    <path 
                        d="M 300,110 C 330,110 330,160 360,160" 
                        fill="none" stroke="rgba(249,115,22,0.2)" strokeWidth="2" strokeDasharray="4 4"
                    />
                    <motion.path 
                        d="M 300,110 C 330,110 330,160 360,160" 
                        fill="none" stroke="rgba(249,115,22,1)" strokeWidth="4"
                        style={{ filter: "blur(2px)" }}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 1 }}
                    />
                    <path 
                        d="M 280,160 C 310,160 320,160 360,160" 
                        fill="none" stroke="rgba(168,85,247,0.2)" strokeWidth="2" strokeDasharray="4 4"
                    />
                    <motion.path 
                        d="M 280,160 C 310,160 320,160 360,160" 
                        fill="none" stroke="rgba(168,85,247,1)" strokeWidth="4"
                        style={{ filter: "blur(2px)" }}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 1.5 }}
                    />
                    <path 
                        d="M 120,60 C 80,120 70,180 80,240" 
                        fill="none" stroke="rgba(236,72,153,0.2)" strokeWidth="2" strokeDasharray="4 4"
                    />
                    <motion.path 
                        d="M 120,60 C 80,120 70,180 80,240" 
                        fill="none" stroke="rgba(236,72,153,1)" strokeWidth="4"
                        style={{ filter: "blur(2px)" }}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                        transition={{ duration: 2.3, repeat: Infinity, ease: "linear", delay: 0.8 }}
                    />
                    <path 
                        d="M 170,160 C 170,220 190,240 200,270" 
                        fill="none" stroke="rgba(14,165,233,0.2)" strokeWidth="2" strokeDasharray="4 4"
                    />
                    <motion.path 
                        d="M 170,160 C 170,220 190,240 200,270" 
                        fill="none" stroke="rgba(14,165,233,1)" strokeWidth="4"
                        style={{ filter: "blur(2px)" }}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                        transition={{ duration: 2.1, repeat: Infinity, ease: "linear", delay: 0.3 }}
                    />
                    <path 
                        d="M 360,160 C 370,200 360,220 340,250" 
                        fill="none" stroke="rgba(234,179,8,0.2)" strokeWidth="2" strokeDasharray="4 4"
                    />
                    <motion.path 
                        d="M 360,160 C 370,200 360,220 340,250" 
                        fill="none" stroke="rgba(234,179,8,1)" strokeWidth="4"
                        style={{ filter: "blur(2px)" }}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                        transition={{ duration: 1.9, repeat: Infinity, ease: "linear", delay: 1.2 }}
                    />
                </svg>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="absolute top-10 left-8 w-32 bg-background/95 backdrop-blur-md border border-border/80 shadow-[0_0_15px_rgba(255,255,255,0.05)] rounded-lg p-2 z-20 group/node"
                >
                    <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)] border border-background"></div>
                    <div className="flex gap-1.5 items-center mb-1">
                        <div className="w-4 h-4 rounded bg-primary/20 flex items-center justify-center">
                            <Users className="w-2.5 h-2.5 text-primary" />
                        </div>
                        <div className="text-[9px] font-bold text-foreground">Strategy</div>
                    </div>
                    <div className="h-1.5 w-full bg-muted-foreground/20 rounded-full mb-1 mt-1.5"></div>
                    <div className="h-1.5 w-4/5 bg-muted-foreground/20 rounded-full"></div>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", delay: 0.4 }}
                    className="absolute top-20 left-[190px] w-28 bg-background/95 backdrop-blur-md border border-border/80 shadow-md rounded-lg p-2 z-20"
                >
                    <div className="flex gap-1.5 items-center mb-1.5">
                        <div className="w-4 h-4 rounded bg-blue-500/20 flex items-center justify-center">
                            <BarChart className="w-2.5 h-2.5 text-blue-500" />
                        </div>
                        <span className="text-[9px] font-semibold text-foreground">Q3 Metrics</span>
                    </div>
                    <div className="flex gap-1 h-6 items-end mt-2">
                        <div className="w-full bg-blue-500/40 rounded-t-sm h-[40%]"></div>
                        <div className="w-full bg-blue-500/60 rounded-t-sm h-[70%]"></div>
                        <div className="w-full bg-blue-500 rounded-t-sm h-full"></div>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", delay: 0.6 }}
                    className="absolute top-32 left-16 w-32 bg-background/95 backdrop-blur-md border border-border/80 shadow-md rounded-lg p-2 z-20"
                >
                    <div className="text-[9px] font-semibold mb-1 text-foreground">Target Audience</div>
                    <div className="flex -space-x-1 mb-1">
                        <div className="w-4 h-4 rounded-full bg-muted border border-background"></div>
                        <div className="w-4 h-4 rounded-full bg-muted border border-background"></div>
                        <div className="w-4 h-4 rounded-full bg-muted border border-background"></div>
                        <div className="w-4 h-4 rounded-full bg-muted border border-background flex items-center justify-center text-[6px]">+5</div>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                        <span className="text-[6px] px-1 bg-emerald-500/10 text-emerald-500 rounded border border-emerald-500/20">B2B</span>
                        <span className="text-[6px] px-1 bg-purple-500/10 text-purple-500 rounded border border-purple-500/20">Tech</span>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", delay: 0.8 }}
                    className="absolute top-[138px] left-[260px] w-[110px] bg-background/95 backdrop-blur-md border border-orange-500/40 shadow-[0_0_15px_rgba(249,115,22,0.15)] rounded-lg p-2 z-20"
                >
                    <div className="flex gap-1.5 items-center mb-1.5">
                        <div className="w-4 h-4 rounded bg-orange-500/20 flex items-center justify-center">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                        </div>
                        <span className="text-[9px] font-bold text-orange-500">Launch Plan</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                            <motion.div 
                                className="h-full bg-orange-500" 
                                initial={{ width: "0%" }} animate={{ width: "75%" }} transition={{ duration: 1, delay: 1 }}
                            />
                        </div>
                        <span className="text-[7px] text-muted-foreground font-bold">75%</span>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", delay: 0.7 }}
                    className="absolute top-[230px] left-6 w-36 bg-background/95 backdrop-blur-md border border-border/80 shadow-md rounded-lg p-2 z-20"
                >
                    <div className="flex gap-1.5 items-center mb-2">
                        <div className="w-4 h-4 rounded bg-pink-500/20 flex items-center justify-center">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-pink-500"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                        </div>
                        <span className="text-[9px] font-semibold text-foreground">Content Assets</span>
                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse"></div>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-8 h-8 rounded border border-border/50 bg-muted flex items-center justify-center">
                            <span className="text-[6px] text-muted-foreground">IMG</span>
                        </div>
                        <div className="flex flex-col gap-1 flex-1 justify-center py-0.5">
                            <div className="h-1.5 w-full bg-muted-foreground/20 rounded-full"></div>
                            <div className="h-1.5 w-full bg-muted-foreground/20 rounded-full"></div>
                            <div className="h-1.5 w-2/3 bg-muted-foreground/20 rounded-full"></div>
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", delay: 0.9 }}
                    className="absolute top-[270px] left-[170px] w-28 bg-background/95 backdrop-blur-md border border-border/80 shadow-md rounded-lg p-2 z-20"
                >
                    <div className="text-[9px] font-semibold mb-1 w-full text-center text-foreground">Approvals</div>
                    <div className="flex justify-center gap-2 mt-2">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground">
                            <span className="text-[8px] font-bold">?</span>
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", delay: 1.1 }}
                    className="absolute top-[240px] left-[310px] w-28 bg-background/95 backdrop-blur-md border border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.1)] rounded-lg p-2 z-20"
                >
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-[9px] font-bold text-yellow-500">Budget</span>
                        <span className="text-[8px] font-mono text-muted-foreground">$12.5k</span>
                    </div>
                    <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden mt-1.5">
                        <motion.div 
                            className="h-full bg-yellow-500" 
                            initial={{ width: "0%" }} animate={{ width: "45%" }} transition={{ duration: 1, delay: 1.2 }}
                        />
                    </div>
                    <div className="flex justify-between items-center mt-1">
                        <span className="text-[6px] text-muted-foreground">Spent</span>
                        <span className="text-[6px] text-muted-foreground">45%</span>
                    </div>
                </motion.div>
                <motion.div
                    animate={{ 
                        x: [180, 150, 200, 180], 
                        y: [140, 130, 160, 140],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-0 left-0 z-40 flex flex-col items-start drop-shadow-md pointer-events-none"
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="2" className="text-orange-500">
                        <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 01.35-.15h6.42c.45 0 .67-.54.35-.85L6.35 3.35a.5.5 0 00-.85.35z"/>
                    </svg>
                    <div className="bg-orange-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-sm rounded-tl-none ml-2 -mt-1 shadow-sm">
                        Sarah
                    </div>
                </motion.div>
                <motion.div
                    animate={{ 
                        x: [60, 100, 80, 60], 
                        y: [60, 50, 80, 60],
                    }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute top-0 left-0 z-40 flex flex-col items-start drop-shadow-md pointer-events-none"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="2" className="text-emerald-500">
                        <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 01.35-.15h6.42c.45 0 .67-.54.35-.85L6.35 3.35a.5.5 0 00-.85.35z"/>
                    </svg>
                    <div className="bg-emerald-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm rounded-tl-none ml-2 -mt-1 shadow-md">
                        You
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8], y: [10, 0, 0, -10] }}
                    transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                    className="absolute top-2 right-4 bg-background border border-border rounded-lg shadow-lg p-2 flex gap-2 items-center z-30 pointer-events-none"
                >
                    <div className="w-4 h-4 rounded bg-orange-500/20 flex items-center justify-center border border-orange-500/30">
                        <span className="text-[8px] font-bold text-orange-500">S</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <div className="text-[8px] font-medium text-foreground">Can we update this?</div>
                    </div>
                </motion.div>

            </div>
            <div className="absolute -inset-4 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)] blur-2xl -z-10 pointer-events-none" />
        </div>
    );
}