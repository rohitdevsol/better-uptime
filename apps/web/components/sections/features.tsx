import { Activity, Brain, Database, LucideIcon, Users } from "lucide-react";
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

        <div className="flex-1 p-1 overflow-hidden rounded-xl md:rounded-md bg-gray-50 w-full group-hover:shadow transition-all duration-300 ease-out">
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
    return <div className="flex p-1 relative w-full h-full border border-dashed rounded-sm">

    </div>
}

function Card2() {
    return <div className="flex p-1 relative w-full h-full border border-dashed rounded-sm">

    </div>
}

function Card3() {
    return <div className="flex p-1 relative w-full h-full border border-dashed rounded-sm">

    </div>
}