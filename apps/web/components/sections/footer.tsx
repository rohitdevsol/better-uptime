import { Github, Linkedin, Twitter, Activity } from "lucide-react";
import Container from "./container";

const FOOTER_LINKS = [
    { head: "Product", data: ["Uptime Monitoring", "Log Management", "Status Pages", "Incident Alerts", "Integrations"] },
    { head: "Company", data: ["About", "Careers", "Blog", "Contact"] },
    { head: "Resources", data: ["Documentation", "API Reference", "Community", "Status"] },
];

export default function Footer() {
    return (
        <footer className="border-t border-slate-800/40">
            <Container>
                <div className="flex flex-col lg:flex-row justify-between gap-12 py-14">
                    <div className="flex flex-col gap-4">
                        <a href="/" className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center">
                                <Activity className="w-3.5 h-3.5 text-white" />
                            </div>
                            <span className="text-[15px] font-display font-bold tracking-tight text-white">BetterUptime</span>
                        </a>
                        <p className="text-xs text-slate-600 max-w-xs">
                            Real-time monitoring and centralized logging for platforms that demand perfection.
                        </p>
                        <div className="flex gap-1.5">
                            {[Twitter, Linkedin, Github].map((Icon, i) => (
                                <a key={i} href="#" className="w-7 h-7 rounded-lg border border-slate-800/60 bg-slate-900/40 flex items-center justify-center text-slate-600 hover:text-white hover:border-slate-700 transition-all">
                                    <Icon className="w-3 h-3" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-14">
                        {FOOTER_LINKS.map((section) => (
                            <div key={section.head}>
                                <h4 className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold mb-3">{section.head}</h4>
                                <ul className="flex flex-col gap-2">
                                    {section.data.map((item) => (
                                        <li key={item}>
                                            <a href="#" className="text-sm text-slate-600 hover:text-white transition-colors">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between py-5 border-t border-slate-800/30 gap-3">
                    <p className="text-[11px] text-slate-700">© 2026 BetterUptime. All rights reserved.</p>
                    <div className="flex items-center gap-5">
                        {["Privacy", "Terms", "Cookies"].map((item) => (
                            <a key={item} href="#" className="text-[11px] text-slate-700 hover:text-slate-400 transition-colors">{item}</a>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    );
}