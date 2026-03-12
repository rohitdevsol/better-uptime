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
        }, 5000);
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
                <div className="w-12 border-r border-border/50 flex flex-col py-3 bg-background/50 backdrop-blur-sm z-20">
                    {["09:00", "10:00", "11:00", "12:00", "13:00"].map((time, i) => (
                        <div key={i} className="flex-1 flex justify-center text-[8px] text-muted-foreground font-medium pt-1 relative">
                            {time}
                        </div>
                    ))}
                </div>
                
                <div className="flex-1 relative p-2 overflow-hidden flex">
                    
                    {/* Main Timeline Area */}
                    <div className="flex-1 relative">
                        {/* Horizontal grid lines */}
                        <div className="absolute inset-0 pointer-events-none flex flex-col justify-between py-4">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-full h-px border-t border-dashed border-border/30" />
                            ))}
                        </div>

                        {/* Current Time Indicator */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="absolute top-[85px] left-0 right-0 z-20 flex items-center pointer-events-none"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] -ml-0.5 relative z-10" />
                            <div className="h-px flex-1 bg-red-500/50 shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
                        </motion.div>

                        {/* Block 1 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.3, type: "spring" }}
                            className="absolute top-2 left-2 right-4 h-12 bg-blue-500/10 border border-blue-500/20 rounded-md p-2 flex flex-col shadow-sm overflow-hidden group/event cursor-pointer hover:bg-blue-500/20 transition-colors"
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 transition-all group-hover/event:w-1.5" />
                            <div className="flex justify-between items-start ml-2">
                                <span className="text-[9px] font-semibold text-blue-500">Engineering Sync</span>
                                <span className="text-[7px] text-muted-foreground font-medium bg-background/50 px-1 rounded">09:00 - 09:45</span>
                            </div>
                            <div className="flex items-center justify-between ml-2 mt-auto">
                                <div className="flex items-center gap-1">
                                    <Users className="w-2.5 h-2.5 text-blue-500/70" />
                                    <span className="text-[7px] text-blue-500/70 font-medium">12 attendees</span>
                                </div>
                                <div className="flex -space-x-1 opacity-80 scale-90 origin-right">
                                    <div className="w-3.5 h-3.5 rounded-full bg-blue-500/20 border border-blue-500/40" />
                                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Block 2 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 100 }}
                            className="absolute top-16 left-2 right-8 h-16 bg-emerald-500/15 border border-emerald-500/30 rounded-md p-2 flex flex-col shadow-[0_4px_15px_-5px_rgba(16,185,129,0.2)] overflow-hidden z-10 group/event cursor-pointer hover:bg-emerald-500/25 transition-colors"
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 transition-all group-hover/event:w-1.5" />
                            <div className="flex justify-between items-start ml-2">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-emerald-500">Product Review Q3</span>
                                    <span className="text-[7px] text-emerald-600/70 font-medium mt-0.5">Core Metrics</span>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <span className="text-[7px] text-emerald-600/70 font-medium bg-emerald-500/10 px-1 rounded border border-emerald-500/20">10:00 - 11:15</span>
                                </div>
                            </div>
                            <div className="mt-auto ml-2 flex justify-between items-center">
                                <div className="flex gap-1 items-center flex-1">
                                    <div className="h-1 w-1/2 bg-emerald-500/40 rounded-full overflow-hidden">
                                        <motion.div className="h-full bg-emerald-500" initial={{ width: "0%" }} animate={{ width: "80%" }} transition={{ delay: 1, duration: 1 }} />
                                    </div>
                                    <span className="text-[6px] text-emerald-600/70 font-bold uppercase">80% Ready</span>
                                </div>
                                <div className="flex -space-x-1 origin-right scale-75">
                                    <div className="w-4 h-4 rounded-full bg-emerald-500/30 border border-emerald-500 flex items-center justify-center text-[6px] text-emerald-700 font-bold">+3</div>
                                    <img src="https://i.pravatar.cc/100?img=4" className="w-4 h-4 rounded-full border border-emerald-500" alt="avatar" />
                                    <img src="https://i.pravatar.cc/100?img=3" className="w-4 h-4 rounded-full border border-emerald-500" alt="avatar" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Block 3 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.7, type: "spring" }}
                            className="absolute top-[138px] left-6 right-2 h-10 bg-orange-500/10 border border-orange-500/20 rounded-md p-1.5 flex flex-col justify-between shadow-sm overflow-hidden group/event cursor-pointer hover:bg-orange-500/20 transition-colors"
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 transition-all group-hover/event:w-1.5" />
                            <div className="flex justify-between items-center ml-2">
                                <span className="text-[9px] font-semibold text-orange-500 flex items-center gap-1">
                                    Design Critique
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                                </span>
                                <span className="text-[7px] text-muted-foreground font-medium bg-background/50 px-1 rounded">11:30 - 12:30</span>
                            </div>
                        </motion.div>

                        {/* Block 4 (New) */}
                        <motion.div 
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.9, type: "spring" }}
                            className="absolute top-[185px] left-2 right-16 h-12 bg-purple-500/10 border border-purple-500/20 rounded-md p-1.5 flex flex-col justify-between shadow-sm overflow-hidden group/event cursor-pointer hover:bg-purple-500/20 transition-colors"
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 transition-all group-hover/event:w-1.5" />
                            <div className="flex justify-between items-start ml-2">
                                <span className="text-[9px] font-semibold text-purple-500">1:1 with Sarah</span>
                                <span className="text-[7px] text-muted-foreground font-medium bg-background/50 px-1 rounded">13:00 - 13:45</span>
                            </div>
                            <div className="flex items-center gap-1.5 ml-2">
                                <img src="https://i.pravatar.cc/100?img=5" className="w-3.5 h-3.5 rounded-full border border-purple-500/50" alt="avatar" />
                                <span className="text-[7px] text-purple-500/70 font-medium">In person</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side 'Tasks' Column */}
                    <div className="w-24 pl-2 border-l border-border/50 ml-2 hidden sm:flex flex-col gap-2 relative z-10">
                        <span className="text-[8px] uppercase font-bold text-muted-foreground tracking-wider mb-1">Up Next</span>
                        {[
                            { title: "Review PR #412", time: "14:00", color: "blue" },
                            { title: "Update Docs", time: "15:30", color: "emerald" },
                            { title: "Client Call", time: "16:00", color: "orange" }
                        ].map((task, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 + (i * 0.1) }}
                                className={`bg-muted/30 border border-border/50 rounded flex flex-col p-1.5 border-l-2 border-l-${task.color}-500 group cursor-pointer hover:bg-background/80`}
                            >
                                <span className={`text-[8px] font-semibold text-${task.color}-500/80 group-hover:text-${task.color}-500 transition-colors`}>{task.title}</span>
                                <span className="text-[7px] text-muted-foreground">{task.time}</span>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
            
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 blur-3xl -z-10 rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-emerald-500/10 blur-3xl -z-10 rounded-full pointer-events-none" />

            {/* Floating Widget */}
            <motion.div
                initial={{ opacity: 0, y: 20, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 1.2 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-36 sm:w-40 bg-background/90 backdrop-blur-md border border-border shadow-xl rounded-lg p-2.5 sm:p-3 flex flex-col gap-1.5 sm:gap-2 z-30 transition-transform duration-300"
            >
                <div className="flex gap-2 items-center border-b border-border/50 pb-1.5">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded flex items-center justify-center bg-emerald-500/10">
                        <BarChart className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-500" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-medium text-foreground">Weekly Overview</span>
                </div>
                
                <div className="flex justify-between items-center px-1">
                    <div className="flex flex-col">
                        <span className="text-[14px] sm:text-[16px] font-bold text-emerald-500 tracking-tight">24h</span>
                        <span className="text-[7px] sm:text-[8px] text-muted-foreground">Meeting Time</span>
                    </div>
                    <div className="h-6 sm:h-8 w-px bg-border/50"></div>
                    <div className="flex flex-col items-end">
                        <span className="text-[14px] sm:text-[16px] font-bold text-foreground tracking-tight">8</span>
                        <span className="text-[7px] sm:text-[8px] text-muted-foreground">Events</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

function Card2() {
    return (
        <div className="relative w-full h-full bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-xl overflow-hidden flex">

            <div className="w-1/3 border-r border-border/50 bg-muted/20 p-3 flex-col gap-2 relative overflow-hidden z-10 hidden sm:flex">
                <div className="text-[10px] uppercase font-bold text-muted-foreground mb-1 tracking-widest flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    Raw Data
                </div>

                <div className="flex flex-col gap-2 opacity-80 absolute inset-0 pt-12 px-3 pb-4">
                    <motion.div animate={{ y: [0, -400] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="flex flex-col gap-2.5">
                        {[...Array(30)].map((_, i) => {
                            const statuses = [200, 201, 204, 400, 404, 500, 200, 200, 200, 502];
                            const methods = ["GET", "POST", "PUT", "DELETE", "PATCH"];
                            const endpoints = ["/api/v1/users", "/api/v1/payments", "/oauth/token", "/webhooks/stripe", "/graphql"];
                            const randomStatus = statuses[i % statuses.length];
                            const randomMethod = methods[i % methods.length];
                            const randomEndpoint = endpoints[i % endpoints.length];
                            const ms = (Math.random() * 200 + 10).toFixed(0);

                            return (
                                <div key={i} className="flex flex-col gap-1 border-b border-border/20 pb-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-1.5 items-center bg-transparent">
                                            <span className={`text-[6px] px-1 py-0.5 rounded-sm font-bold ${randomStatus >= 500 ? 'bg-red-500/20 text-red-500' : randomStatus >= 400 ? 'bg-orange-500/20 text-orange-500' : 'bg-emerald-500/20 text-emerald-500'}`}>
                                                {randomStatus}
                                            </span>
                                            <span className="text-[7px] text-muted-foreground font-mono font-medium">
                                                {randomMethod} {randomEndpoint}
                                            </span>
                                        </div>
                                        <span className="text-[6.5px] text-muted-foreground font-mono">{ms}ms</span>
                                    </div>
                                    <span className="text-[6px] text-foreground/50 font-mono truncate">
                                        &#123; "req_id": "{Math.random().toString(36).substring(2, 10)}", "src": "web" &#125;
                                    </span>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-background to-transparent z-10" />
                <div className="absolute inset-x-0 top-0 h-12 bg-linear-to-b from-background to-transparent z-10" />
            </div>


            <div className="absolute left-8 sm:left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div 
                    animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 rounded-full border border-blue-500/30 flex items-center justify-center bg-background/50 backdrop-blur-md shadow-[0_0_30px_rgba(59,130,246,0.2)] relative"
                >

                    <motion.div 
                        animate={{ rotate: -360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-1 rounded-full border-t-2 border-l-2 border-emerald-400/80 opacity-60"
                    />

                    <div className="absolute inset-0 rounded-full border-b-2 border-blue-500 animate-spin" style={{ animationDuration: '3s' }}></div>
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center relative z-10">
                        <BarChart className="w-4 h-4 text-blue-500" />
                    </div>
                </motion.div>
            </div>


            <div className="flex-1 p-4 pl-12 sm:pl-12 flex flex-col relative z-10">
                <div className="text-[10px] uppercase font-bold text-blue-500 mb-3 tracking-widest flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Real-time Insights
                </div>


                <div className="grid grid-cols-2 gap-3 flex-1">

                    <motion.div 
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                        className="col-span-2 bg-muted/40 border border-border/50 rounded-lg p-3 relative overflow-hidden group/chart h-28"
                    >
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-[9px] font-medium text-muted-foreground">Network Traffic</span>
                            <span className="text-[9px] text-emerald-500 font-bold flex items-center gap-0.5">
                                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg> 
                                +124%
                            </span>
                        </div>

                        <div className="absolute top-10 inset-x-0 bottom-0 mt-2">
                            <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full overflow-visible opacity-80">

                                <line x1="0" y1="10" x2="100" y2="10" stroke="currentColor" strokeWidth="0.5" className="text-border/40" strokeDasharray="2 2" />
                                <line x1="0" y1="20" x2="100" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-border/40" strokeDasharray="2 2" />
                                <line x1="0" y1="30" x2="100" y2="30" stroke="currentColor" strokeWidth="0.5" className="text-border/40" strokeDasharray="2 2" />
                                

                                <motion.path 
                                    d="M0,40 L0,25 C15,15 25,35 40,25 C55,15 65,5 80,15 C90,20 95,25 100,5 L100,40 Z" 
                                    fill="url(#card2Gradient)" 
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
                                />

                                <motion.path 
                                    d="M0,25 C15,15 25,35 40,25 C55,15 65,5 80,15 C90,20 95,25 100,5" 
                                    fill="none" stroke="rgba(59,130,246,1)" strokeWidth="1.5"
                                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                                />

                                <motion.path 
                                    d="M0,30 C15,25 25,40 40,30 C55,20 65,15 80,25 C90,30 95,35 100,20" 
                                    fill="none" stroke="rgba(16,185,129,0.5)" strokeWidth="1" strokeDasharray="4 2"
                                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.7, ease: "easeInOut" }}
                                />
                                <defs>
                                    <linearGradient id="card2Gradient" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="0%" stopColor="rgba(59,130,246,0.3)" />
                                        <stop offset="100%" stopColor="rgba(59,130,246,0)" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </motion.div>


                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
                        className="bg-muted/30 border border-border/50 rounded-lg p-2.5 flex flex-col justify-between relative overflow-hidden group/metric"
                    >

                        <div className="absolute -right-4 -top-4 w-16 h-16 bg-purple-500/10 blur-xl rounded-full transition-all duration-500 group-hover/metric:bg-purple-500/20 group-hover/metric:scale-150" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.05),transparent_50%)] pointer-events-none" />
                        
                        <div className="relative z-10">
                            <span className="text-[9px] text-muted-foreground font-medium flex items-center gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500/50" />
                                Conversion
                            </span>
                            <span className="text-sm font-black mt-1 text-foreground tracking-tight block">4.2%</span>
                        </div>
                        <div className="w-full h-1.5 bg-background/50 rounded-full mt-3 overflow-hidden border border-border/30 relative z-10">
                            <motion.div initial={{ width: 0 }} animate={{ width: "65%" }} transition={{ delay: 1, duration: 1.5, ease: "easeOut" }} className="h-full bg-linear-to-r from-purple-500/50 to-purple-500 rounded-full relative">
                                <motion.div animate={{ opacity: [0, 1, 0], x: ['0%', '100%'] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute inset-0 w-1/2 bg-linear-to-r from-transparent via-white/30 to-transparent" />
                            </motion.div>
                        </div>
                    </motion.div>


                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }}
                        className="bg-muted/30 border border-border/50 rounded-lg p-2.5 flex flex-col justify-between relative overflow-hidden group/metric"
                    >

                        <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-blue-500/10 blur-xl rounded-full transition-all duration-500 group-hover/metric:bg-blue-500/20 group-hover/metric:scale-150" />
                        <div className="absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-blue-500/5 to-transparent pointer-events-none" />
                        
                        <div className="relative z-10">
                            <span className="text-[9px] text-muted-foreground font-medium flex items-center gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                                Active Users
                            </span>
                            <span className="text-sm font-black mt-1 text-foreground tracking-tight block">1,204</span>
                        </div>

                        <div className="flex items-end gap-[2px] h-5 mt-2 opacity-90 relative z-10 w-full justify-between">
                            {[30, 45, 35, 60, 50, 80, 70, 95].map((h, i) => (
                                <div key={i} className="w-[10%] bg-blue-500/20 rounded-t-[2px] h-full flex items-end overflow-hidden">
                                    <motion.div initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 0.8 + i*0.05, duration: 0.5, type: "spring" }} className="w-full bg-blue-500 rounded-t-[2px] transition-all duration-300 hover:bg-blue-400" />
                                </div>
                            ))}
                        </div>
                    </motion.div>


                    <motion.div 
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
                        className="col-span-2 bg-muted/30 border border-border/50 rounded-lg p-2.5 flex justify-between items-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-linear-to-r from-emerald-500/5 via-transparent to-blue-500/5 pointer-events-none" />
                        
                        <div className="flex flex-col gap-1 relative z-10">
                            <span className="text-[9px] text-muted-foreground font-medium">Global Edge Nodes</span>
                            <div className="flex items-center gap-1.5">
                                <span className="relative flex h-1.5 w-1.5">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                                </span>
                                <span className="text-[10px] font-bold text-foreground">Systems Operational</span>
                            </div>
                        </div>

                        <div className="flex gap-2 relative z-10">
                            {[
                                { region: "US-E", usage: 45, color: "emerald" },
                                { region: "EU-W", usage: 78, color: "blue" },
                                { region: "AP-S", usage: 32, color: "purple" }
                            ].map((node, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, scale: 0.8 }} 
                                    animate={{ opacity: 1, scale: 1 }} 
                                    transition={{ delay: 0.9 + i*0.1 }}
                                    className="flex flex-col items-center gap-1 bg-background/50 border border-border/40 rounded p-1.5 min-w-[36px]"
                                >
                                    <span className="text-[7px] text-muted-foreground font-bold">{node.region}</span>

                                    <div className="relative w-4 h-4">
                                        <svg className="w-4 h-4 transform -rotate-90">
                                            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" fill="transparent" className="text-muted/50" />
                                            <motion.circle 
                                                cx="8" cy="8" r="6" 
                                                stroke="currentColor" 
                                                strokeWidth="1.5" 
                                                fill="transparent" 
                                                strokeDasharray="37.7"
                                                initial={{ strokeDashoffset: 37.7 }}
                                                animate={{ strokeDashoffset: 37.7 - (37.7 * node.usage) / 100 }}
                                                transition={{ delay: 1.2 + i*0.2, duration: 1.5, ease: "easeOut" }}
                                                className={`text-${node.color}-500`} 
                                            />
                                        </svg>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
            

            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 blur-3xl rounded-full z-0 pointer-events-none" />
            <div className="absolute -inset-2 bg-linear-to-bl from-blue-500/5 via-transparent to-purple-500/5 blur-2xl -z-10 rounded-full opacity-50" />
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
                    <motion.path 
                        d="M 120,60 C 150,60 160,110 190,110" 
                        fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="1" strokeDasharray="4 4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    />
                    <motion.path 
                        d="M 120,60 C 150,60 160,110 190,110" 
                        fill="none" stroke="rgba(59,130,246,1)" strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.path 
                        d="M 120,60 C 120,160 150,160 170,160" 
                        fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="1" strokeDasharray="4 4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    />
                    <motion.path 
                        d="M 120,60 C 120,160 150,160 170,160" 
                        fill="none" stroke="rgba(16,185,129,1)" strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                    />
                    <motion.path 
                        d="M 300,110 C 330,110 330,160 360,160" 
                        fill="none" stroke="rgba(249,115,22,0.3)" strokeWidth="1" strokeDasharray="4 4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    />
                    <motion.path 
                        d="M 300,110 C 330,110 330,160 360,160" 
                        fill="none" stroke="rgba(249,115,22,1)" strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 1 }}
                    />
                    <motion.path 
                        d="M 280,160 C 310,160 320,160 360,160" 
                        fill="none" stroke="rgba(168,85,247,0.3)" strokeWidth="1" strokeDasharray="4 4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                    <motion.path 
                        d="M 280,160 C 310,160 320,160 360,160" 
                        fill="none" stroke="rgba(168,85,247,1)" strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 1.5 }}
                    />
                    <motion.path 
                        d="M 120,60 C 80,120 70,180 80,240" 
                        fill="none" stroke="rgba(236,72,153,0.3)" strokeWidth="1" strokeDasharray="4 4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    />
                    <motion.path 
                        d="M 120,60 C 80,120 70,180 80,240" 
                        fill="none" stroke="rgba(236,72,153,1)" strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                        transition={{ duration: 2.3, repeat: Infinity, ease: "linear", delay: 0.8 }}
                    />
                    <motion.path 
                        d="M 170,160 C 170,220 190,240 200,270" 
                        fill="none" stroke="rgba(14,165,233,0.3)" strokeWidth="1" strokeDasharray="4 4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    />
                    <motion.path 
                        d="M 170,160 C 170,220 190,240 200,270" 
                        fill="none" stroke="rgba(14,165,233,1)" strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                        transition={{ duration: 2.1, repeat: Infinity, ease: "linear", delay: 0.3 }}
                    />
                    <motion.path 
                        d="M 360,160 C 370,200 360,220 340,250" 
                        fill="none" stroke="rgba(234,179,8,0.3)" strokeWidth="1" strokeDasharray="4 4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    />
                    <motion.path 
                        d="M 360,160 C 370,200 360,220 340,250" 
                        fill="none" stroke="rgba(234,179,8,1)" strokeWidth="2"
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