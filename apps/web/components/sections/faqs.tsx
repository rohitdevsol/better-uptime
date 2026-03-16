'use client'

import { useState } from "react";
import Container from "./container";
import { AnimatePresence, motion } from "motion/react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
    {
        q: "What does BetterUptime monitor?",
        a: "HTTP/HTTPS endpoints, TCP ports, and custom health checks. We track uptime, response time, SSL certificate expiry, and more — all in real-time with sub-second precision.",
    },
    {
        q: "How fast are the alerts?",
        a: "Under 30 seconds. When a service goes down, you'll be notified via email, Slack, SMS, webhooks, or any of our 80+ integrations.",
    },
    {
        q: "How does centralized logging work?",
        a: "Send logs via our SDKs, syslog, or HTTP API. All logs are indexed, searchable, and available in a unified dashboard with powerful filtering and full-text search.",
    },
    {
        q: "What integrations are supported?",
        a: "80+ tools including Slack, PagerDuty, Datadog, AWS, Sentry, Microsoft Teams, Discord, and more. Custom webhooks let you connect anything.",
    },
    {
        q: "Is my data secure?",
        a: "All data is encrypted at rest and in transit. Enterprise plans include SSO/SAML, RBAC, and custom retention policies. SOC 2 Type II compliant.",
    },
    {
        q: "Can I try it for free?",
        a: "Yes — our Starter plan is free forever with up to 5 monitors, email alerts, and 7-day log retention. No credit card required.",
    },
];

export default function FAQs() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section id="faq" className="relative">
            <Container className="py-20 md:py-28 lg:py-36 relative">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
                    {/* Left — sticky heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-4 md:sticky md:top-32 md:self-start"
                    >
                        <span className="text-[11px] font-semibold text-sky-400 tracking-[0.2em] uppercase mb-3 block">FAQ</span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl tracking-[-0.02em] text-white mb-3">
                            Questions
                            <br />
                            <span className="text-slate-500">&amp; answers</span>
                        </h2>
                        <p className="text-sm text-slate-500 max-w-xs">
                            Can&apos;t find what you&apos;re looking for? Reach out to our team.
                        </p>
                    </motion.div>

                    {/* Right — accordion */}
                    <div className="md:col-span-8 flex flex-col">
                        {FAQS.map((faq, i) => {
                            const isOpen = open === i;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.04 }}
                                    className="border-b border-slate-800/40"
                                >
                                    <button
                                        onClick={() => setOpen(isOpen ? null : i)}
                                        className="flex items-center justify-between w-full text-left py-5 group"
                                    >
                                        <span className={`text-sm md:text-base font-medium pr-4 transition-colors ${isOpen ? 'text-sky-300' : 'text-white group-hover:text-slate-200'}`}>
                                            {faq.q}
                                        </span>
                                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-all duration-200
                                            ${isOpen ? 'border-sky-500/30 bg-sky-500/10 text-sky-400' : 'border-slate-700 text-slate-500 group-hover:border-slate-600'}`}
                                        >
                                            {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-sm text-slate-400 leading-relaxed pb-5 max-w-lg">{faq.a}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}