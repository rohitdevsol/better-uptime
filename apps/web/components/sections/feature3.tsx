import { BarChart, Calendar, LucideIcon, Users } from "lucide-react";
import { Badge } from "../ui/badge";
import Container from "./container";
import Heading from "./heading";
import SubHeading from "./subheading";

export default function Feature3() {
    return <section>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-4">
                        <FeatureCardDetail
                            title="Plan your schedules"
                            description="Explore your data, build your dashboard, bring your team together."
                            active={true}
                            icon={Calendar}
                        />

                        <FeatureCardDetail
                            title="Data to insights in minutes"
                            description="Transform raw data into actionable insights with powerful analytics tools."
                            active={false}
                            icon={BarChart}
                        />

                        <FeatureCardDetail
                            title="Collaborate seamlessly"
                            description="Work together in real-time with your team and share insights instantly."
                            active={false}
                            icon={Users}
                        />
                    </div>

                    <div className="flex items-center justify-center border border-dashed w-full h-full bg-gray-50 rounded-md p-2 group hover:shadow transition-all duration-300 ease-out">

                    </div>
                </div>
            </div>
        </Container>
    </section>
}


function FeatureCardDetail({ title, description, active, icon: Icon }: { title: string, description: string, active: boolean, icon: LucideIcon }) {
    return <div className="flex items-start gap-4 border border-dashed rounded-md p-4">
        <div className="flex items-center justify-center w-11 h-10 rounded-md bg-gray-50 border border-dashed mt-1">
            <Icon className="w-5 h-5 text-emerald-500 shrink-0" />
        </div>
        <div className="flex flex-col gap-1">
            <Heading as="h2" className={`${active ? "text-emerald-500" : ""} line-clamp-1 group-hover:translate-x-2 transition-all duration-300 ease-out`} variant="small">{title}</Heading>
            <SubHeading as="p" className="line-clamp-3 group-hover:translate-x-2 transition-all duration-300 ease-out delay-100" variant="small">{description}</SubHeading>
        </div>
    </div>
}