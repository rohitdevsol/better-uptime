import { Button } from "@/components/ui/button";
import { PricingPlan } from "../pricing";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export default function PricingCard({ plan }: { plan: PricingPlan }) {
    return (
        <div className={cn("max-w-80 w-full border rounded-md p-4", plan.highlighted && "bg-linear-to-b from-emerald-200 via-transparent to-transparent shadow-[inset_1px_2px_15px_1px_rgba(255,255,255,0.8),inset_0_1px_1px_0_rgba(255,255,255,0.8)]")}>

            <div className="flex flex-col gap-2">
                <h3 className="text-lg md:text-xl font-semibold font-poppins">{plan.name}</h3>
                <p className={cn("text-sm md:text-base text-muted-foreground ", plan.highlighted && "text-emerald-950")}>{plan.description}</p>
            </div>

            <div className="flex flex-col gap-2 mt-4 md:mt-8">
                <span className={cn("text-4xl md:text-5xl font-medium", plan.highlighted && "text-emerald-500")}>${plan.price}</span>
                <p className="text-neutral-600 font-medium">{plan.priceLabel}</p>
            </div>

            <Button className={cn("mt-4 md:mt-8 w-full", !plan.highlighted && "bg-linear-to-br from-neutral-800 via-neutral-700 to-neutral-800")}>{plan.buttonText}</Button>

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