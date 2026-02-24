import { Badge } from "../ui/badge";
import Container from "./container";
import Heading from "./heading";
import SubHeading from "./subheading";
import PricingCard from "./ui/pricing-card";

export type PricingPlan = {
    name: string;
    description: string;
    price: number;
    priceLabel: string;
    buttonText: string;
    highlighted: boolean;
    features: string[];
};

export default function Pricing() {
    const PRICING_PLANS: PricingPlan[] = [
        {
            name: "Starter",
            description: "Perfect for individuals and small teams getting started.",
            price: 0,
            priceLabel: "Per year, Per user.",
            buttonText: "Start for free",
            highlighted: false,
            features: [
                "Up to 3 projects",
                "Basic documentation tools",
                "Community support",
                "Standard templates",
                "Basic analytics",
            ],
        },
        {
            name: "Professional",
            description: "Advanced features for growing teams and businesses.",
            price: 16,
            priceLabel: "Per year, Per user.",
            buttonText: "Get started",
            highlighted: true,
            features: [
                "Unlimited projects",
                "Advanced documentation tools",
                "Priority support",
                "Custom templates",
                "Advanced analytics",
                "Team collaboration",
                "API access",
                "Custom integrations",
            ],
        },
        {
            name: "Enterprise",
            description: "Complete solution for large organizations and enterprises.",
            price: 160,
            priceLabel: "Per year, Per user.",
            buttonText: "Contact sales",
            highlighted: false,
            features: [
                "Everything in Professional",
                "Dedicated account manager",
                "24/7 phone support",
                "Custom onboarding",
                "Advanced security features",
                "SSO integration",
                "Custom contracts",
                "White-label options",
            ],
        },
    ];
    return <section>
        <Container>
            <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 justify-center py-12 md:py-24 lg:py-36">
                <div className="flex flex-col gap-4">
                    <Badge className="w-fit mx-auto rounded-md px-4 py-1 bg-linear-to-r from-primary via-emerald-500 to-primary">
                        Plans & Pricing
                    </Badge>

                    <Heading
                        as="h2"
                        className="text-center mx-auto max-w-[90%] md:max-w-xl lg:max-w-4xl"
                    >
                        Choose the perfect plan <br className="md:hidden" /> for your business
                    </Heading>

                    <SubHeading
                        as="p"
                        className="max-w-[95%] md:max-w-xl lg:max-w-3xl mx-auto text-center"
                    >
                        Scale your operations with flexible pricing that grows with your team.
                        Start free, upgrade when you're ready.
                    </SubHeading>
                </div>


                <div className="flex flex-col md:flex-row justify-center gap-4 lg:gap-8">
                    {PRICING_PLANS.map((plan, index) => (
                        <PricingCard key={index} plan={plan} />
                    ))}
                </div>
            </div>
        </Container>
    </section >
}