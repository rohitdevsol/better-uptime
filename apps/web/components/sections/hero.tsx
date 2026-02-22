'use client'

import Image from "next/image";
import { Button } from "../ui/button";
import Container from "../sections/container";
import Heading from "../sections/heading";
import SubHeading from "./subheading";
import { motion } from "motion/react"
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Hero() {
    const avatarStack = [
        {
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
        },
        {
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e",
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1658527049634-15142565537a",
        },
        {
            image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652",
        },
    ];
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return <section>
        <Container className="flex flex-col gap-6 md:gap-8 py-20 md:py-32 lg:py-44 relative">

            <p
                className="text-center text-xs md:text-sm lg:text-base px-4 w-fit mx-auto bg-emerald-600 inline-block bg-clip-text text-transparent relative overflow-hidden border border-dashed rounded-md py-1"
            >
                For teams that never sleep.
            </p>

            <Heading variant="big" as="h1" className="text-center">
                Monitor <span className="bg-linear-to-r from-emerald-600 via-emerald-400 to-emerald-600 text-transparent bg-clip-text">uptime</span>
                <br />
                Master your logs precisely
            </Heading>

            <SubHeading variant="big" as="h2" className="text-center">
                Real-time uptime monitoring and centralized logging
                <br className="hidden sm:block" />
                for platforms that never go down
            </SubHeading>

            <div className="flex items-center gap-4 justify-center">
                <Button>
                    Start monitoring
                </Button>
                <Button variant={"outline"} className="px-8 bg-background">
                    Read Docs
                </Button>
            </div>

            <div className="flex flex-col gap-4 justify-center mt-4">
                <p className="font-medium text-neutral-600 text-center">
                    Trusted by 100k+ developers
                </p>
                <div className="flex -space-x-2 justify-center">
                    {avatarStack.map((item, index) => (
                        <Image
                            key={index}
                            src={item.image}
                            width={100}
                            height={100}
                            alt="avatar"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                zIndex: hoveredIndex === index ? 100 : avatarStack.length - index,
                            }}
                            className={cn("w-12 h-12 relative rounded-md object-cover border border-transparent ring ring-black/10 hover:-translate-y-2 hover:scale-110 hover:border-2 hover:border-neutral-300 transition-all duration-300 ease-out",)} />
                    ))}
                </div>
            </div>
        </Container>
    </section>
}