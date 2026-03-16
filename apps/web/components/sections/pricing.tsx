'use client'

import Container from "./container";
import { motion } from "motion/react";
import { Check, Star } from "lucide-react";

export type PricingPlan = {
    name: string;
    description: string;
    price: number;
    priceLabel: string;
    buttonText: string;
    highlighted: boolean;
    features: string[];
};

const PLANS: PricingPlan[] = [
    {
        name: "Starter",
        description: "Side projects & small services",
        price: 0,
        priceLabel: "Forever free",
        buttonText: "Start for free",
        highlighted: false,
        features: [
            "Up to 5 monitors",
            "5-minute intervals",
            "Email alerts",
            "7-day log retention",
            "Community support",
        ],
    },
    {
        name: "Pro",
        description: "Growing teams that need reliability",
        price: 29,
        priceLabel: "per month, billed yearly",
        buttonText: "Start free trial",
        highlighted: true,
        features: [
            "Unlimited monitors",
            "30-second intervals",
            "Multi-channel alerts",
            "90-day log retention",
            "Priority support",
            "Status pages",
            "API access",
            "Custom integrations",
        ],
    },
    {
        name: "Enterprise",
        description: "Mission-critical infrastructure",
        price: 149,
        priceLabel: "per month, custom billing",
        buttonText: "Contact sales",
        highlighted: false,
        features: [
            "Everything in Pro",
            "10-second intervals",
            "Dedicated account manager",
            "Unlimited log retention",
            "24/7 phone support",
            "SSO & SAML",
            "Custom SLAs",
        ],
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="relative">
            <Container className="py-20 md:py-28 lg:py-36 relative">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-[11px] font-semibold text-sky-400 tracking-[0.2em] uppercase mb-3 block">Pricing</span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] text-white">
                            Start free,
                            <br />
                            <span className="text-slate-500">scale when ready.</span>
                        </h2>
                    </motion.div>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-sm text-slate-400 max-w-xs">
                        No hidden fees. Cancel anytime. Every plan includes a 14-day free trial.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {PLANS.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative rounded-2xl p-6 flex flex-col transition-all duration-500
                                ${plan.highlighted
                                    ? 'border-2 border-sky-500/30 bg-gradient-to-b from-sky-500/[0.08] via-slate-900/80 to-slate-900/80 shadow-[0_0_60px_-20px_rgba(14,165,233,0.2)] md:-mt-4 md:mb-4 md:py-8'
                                    : 'border border-slate-800/50 bg-gradient-to-b from-slate-900/60 to-[#0C1019] hover:border-slate-700/60'
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-sky-500 to-cyan-400 text-[10px] font-bold uppercase tracking-wider rounded-full text-white flex items-center gap-1">
                                    <Star className="w-3 h-3 fill-current" />
                                    Most Popular
                                </div>
                            )}

                            <h3 className="font-display font-bold text-lg text-white">{plan.name}</h3>
                            <p className="text-xs text-slate-500 mt-1 mb-6">{plan.description}</p>

                            <div className="mb-1">
                                <span className={`text-4xl font-display font-bold tracking-tight ${plan.highlighted ? 'text-sky-400' : 'text-white'}`}>
                                    ${plan.price}
                                </span>
                            </div>
                            <p className="text-[11px] text-slate-600 mb-6">{plan.priceLabel}</p>

                            <a
                                href="/account"
                                className={`w-full py-2.5 text-sm font-semibold rounded-xl text-center transition-all duration-300 block mb-6
                                    ${plan.highlighted
                                        ? 'bg-gradient-to-r from-sky-500 to-cyan-400 text-white shadow-[0_0_20px_-5px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.6)]'
                                        : 'bg-slate-800/60 text-white border border-slate-700/50 hover:bg-slate-700/60'
                                    }`}
                            >
                                {plan.buttonText}
                            </a>

                            <ul className="flex flex-col gap-2 mt-auto">
                                {plan.features.map((f, j) => (
                                    <li key={j} className="flex items-center gap-2 text-sm text-slate-400">
                                        <Check className={`w-3.5 h-3.5 shrink-0 ${plan.highlighted ? 'text-sky-400' : 'text-slate-600'}`} />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}