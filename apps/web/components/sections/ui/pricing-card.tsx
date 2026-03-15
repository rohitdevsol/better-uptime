import { Button } from "@/components/ui/button";
import { PricingPlan } from "../pricing";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export default function PricingCard({ plan }: { plan: PricingPlan }) {
    return (
        <div className={cn("w-full p-4 py-8 md:px-8 lg:px-12")}>

            <div className="flex flex-col gap-2">
                <h3 className="text-lg md:text-xl font-semibold font-poppins">{plan.name}</h3>
                <p className={cn("text-sm text-muted-foreground ")}>{plan.description}</p>
            </div>

            <div className="flex flex-col gap-2 mt-4 md:mt-8">
                <span className={cn("text-4xl md:text-5xl font-medium", plan.highlighted && "text-emerald-500")}>${plan.price}</span>
                <p className="text-neutral-600 font-medium">{plan.priceLabel}</p>
            </div>

            <Button variant={plan.highlighted ? "primary" : "default"} className={cn("mt-4 md:mt-8 px-12 lg:w-full")}>{plan.buttonText}</Button>

            <ul className="mt-4 md:mt-8 flex flex-col gap-1">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-emerald-500" />
                        {feature}
                    </li>
                ))}
            </ul>

        </div>
    );
}