'use client'

import { useState } from "react";
import Container from "./container";
import Heading from "./heading";
import SubHeading from "./subheading";
import { AnimatePresence, motion } from "motion/react"
import { ChevronDown, ChevronUp } from "lucide-react";

export type FAQItem = {
    question: string;
    answer: string;
};

export default function FAQs() {
    const FAQS: FAQItem[] = [
        {
            question: "What is Brillance and who is it for?",
            answer:
                "Brillance is an all-in-one business operations platform for managing schedules, analytics, and team collaboration. It’s built for startups, growing teams, and enterprises.",
        },
        {
            question: "How does the custom contract billing work?",
            answer:
                "Enterprise pricing is tailored based on your team size and feature needs. Our sales team creates a flexible contract that fits your business.",
        },
        {
            question: "Can I integrate Brillance with my existing tools?",
            answer:
                "Yes, Brillance supports integrations and API access on higher plans to connect with your existing tools and workflows.",
        },
        {
            question: "What kind of support do you provide?",
            answer:
                "Starter includes community support, Professional offers priority support, and Enterprise provides 24/7 phone support with a dedicated manager.",
        },
        {
            question: "Is my data secure with Brillance?",
            answer:
                "Yes, we use industry-standard encryption and secure infrastructure, with advanced security features available on Enterprise plans.",
        },
        {
            question: "How do I get started with Brillance?",
            answer:
                "You can start for free with the Starter plan and upgrade anytime as your team grows.",
        },
    ];

    return <section>
        <Container>
            <div className="flex flex-col md:flex-row gap-12 justify-center py-12 md:py-24 lg:py-36 flex-1">
                <div className="flex flex-col gap-4">
                    <Heading
                        as="h2"
                        className="text-center md:text-left mx-auto md:mx-0 max-w-[90%] md:max-w-xl lg:max-w-4xl"
                    >
                        Frequently Asked Questions
                    </Heading>

                    <SubHeading
                        as="p"
                        className="max-w-[95%] md:max-w-xl lg:max-w-3xl mx-auto text-center md:text-left md:mx-0"
                    >
                        Explore the data, <br className="hidden md:block lg:hidden" /> build our dashboards,<br className="hidden md:block" /> bring you team together.
                    </SubHeading>
                </div>

                <div className="flex flex-col gap-6 md:gap-12 flex-1 max-w-2xl mx-auto">
                    {FAQS.map((faq, index) => (
                        <FAQ key={index} faq={faq} />
                    ))}
                </div>
            </div>
        </Container>
    </section>
}

function FAQ({ faq }: { faq: FAQItem }) {
    const [open, setOpen] = useState(false);

    return <motion.div
        onClick={() => setOpen(!open)}
        className="flex flex-col px-4">

        <div className="flex items-center justify-between">
            <h3 className="font-medium font-poppins">{faq.question}</h3>
            {open ? <ChevronUp className="shrink-0 w-4 h-4" /> : <ChevronDown className="shrink-0 w-4 h-4" />}
        </div>
        <AnimatePresence>
            {open && <motion.p
                initial={{
                    opacity: 0,
                    height: 0,
                    filter: "blur(2px)",
                    marginTop: 0
                }}
                animate={{
                    opacity: 1,
                    height: "auto",
                    filter: "blur(0px)",
                    marginTop: 8
                }}
                exit={{
                    opacity: 0,
                    height: 0,
                    filter: "blur(2px)",
                    marginTop: 0
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeOut"
                }}
                className="text-sm text-muted-foreground max-w-[95%]">{faq.answer}</motion.p>}
        </AnimatePresence>
    </motion.div>
}