import Container from "./container";
import Heading from "./heading";
import SubHeading from "./subheading";

export default function Feature2() {
    return <section>
        <Container>
            <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 justify-center py-12 md:py-24 lg:py-36">
                <div className="flex flex-col gap-4">
                    <Heading as="h2" className="text-center mx-auto max-w-[90%] md:max-w-xl lg:max-w-3xl">Complete uptime stack in <br className="md:hidden" /> one platform</Heading>
                    <SubHeading as="p" className="max-w-[95%] md:max-w-xl lg:max-w-3xl mx-auto text-center">Monitor everything, log everything, and collaborate on incidents with a single source of truth for your entire operation.</SubHeading>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Feature2Card
                        title="Real-time Alerts"
                        description="Instant notifications when services go down, keeping your team informed and ready to respond."
                    >
                        <Card1 />
                    </Feature2Card>

                    <Feature2Card
                        title="Unified Logging"
                        description="Centralize logs from all systems, search by any field, and find answers in seconds instead of hours."
                    >
                        <Card2 />
                    </Feature2Card>

                    <Feature2Card
                        title="Universal Integration"
                        description="Connect to every monitoring tool, log aggregator, and chat platform you already use seamlessly."
                    >
                        <Card3 />
                    </Feature2Card>

                    <Feature2Card
                        title="Actionable Insights"
                        description="Transform metrics into performance trends that help you identify patterns and improve reliability."
                    >
                        <Card4 />
                    </Feature2Card>
                </div>
            </div>
        </Container>
    </section>
}


function Feature2Card({ title, description, children }: { title: string, description: string, children: React.ReactNode }) {
    return <div className="flex items-center justify-center w-full h-96 bg-gray-50 rounded-md p-2 group hover:shadow transition-all duration-300 ease-out">
        <div className="flex flex-col h-full border border-dashed rounded-sm overflow-hidden">
            <div className="flex-1 h-full w-full ">
                {children}
            </div>
            <div className="bg-white min-h-24 p-4 border-t border-dashed flex flex-col gap-1">
                <Heading as="h2" className="line-clamp-1 group-hover:translate-x-2 transition-all duration-300 ease-out" variant="small">{title}</Heading>
                <SubHeading as="p" className="line-clamp-3 group-hover:translate-x-2 transition-all duration-300 ease-out delay-100" variant="small">{description}</SubHeading>
            </div>
        </div>
    </div>
}

function Card1() {
    return <div className="flex p-4 relative w-full h-full">

    </div>
}

function Card2() {
    return <div className="flex p-4 relative w-full h-full">

    </div>
}

function Card3() {
    return <div className="flex p-4 relative w-full h-full">

    </div>
}

function Card4() {
    return <div className="flex p-4 relative w-full h-full">

    </div>
}