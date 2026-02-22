import { Github, Linkedin, Twitter } from "lucide-react";
import Container from "./container";
import Heading from "./heading";

export const PRODUCT_LINKS = {
    head: "Product",
    data: [
        "Features",
        "Pricing",
        "Integrations",
        "Real-time Previews",
        "Multi-Agent Coding",
    ],
};

export const COMPANY_LINKS = {
    head: "Company",
    data: [
        "About us",
        "Our team",
        "Careers",
        "Brand",
        "Contact",
    ],
};

export const RESOURCE_LINKS = {
    head: "Resources",
    data: [
        "Terms of use",
        "API Reference",
        "Documentation",
        "Community",
        "Support",
    ],
};

const FOOTER_LINKS = [PRODUCT_LINKS, COMPANY_LINKS, RESOURCE_LINKS];

export default function Footer() {
    return (
        <footer>
            <Container>
                <div className="flex flex-col lg:flex-row justify-between gap-12 py-16">

                    {/* Left Section */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <Heading as="h2" className="tracking-normal">BetterUptime</Heading>
                            <p className="text-muted-foreground">Monitoring made effortless</p>
                        </div>

                        {/* Social Icons (replace with lucide if needed) */}
                        <div className="flex gap-4 text-neutral-500">
                            <span className="border p-2 rounded-md hover:bg-neutral-200"><Twitter className="shrink-0 w-4 h-4" /></span>
                            <span className="border p-2 rounded-md hover:bg-neutral-200"><Linkedin className="shrink-0 w-4 h-4" /></span>
                            <span className="border p-2 rounded-md hover:bg-neutral-200"><Github className="shrink-0 w-4 h-4" /></span>
                        </div>
                    </div>

                    {/* Right Section - Links */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                        {FOOTER_LINKS.map((section) => (
                            <div key={section.head}>
                                <h4 className="font-medium text-muted-foreground">{section.head}</h4>

                                <ul className="flex flex-col gap-2 mt-4">
                                    {section.data.map((item) => (
                                        <li key={item} className="text-neutral-800">
                                            <a href="#">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>
            </Container>
        </footer>
    );
}