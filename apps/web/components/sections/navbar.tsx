import Image from "next/image";
import Container from "./container";
import ModeToggle from "../ui/toggle-mode";

export default function Navbar() {
    return <nav className="py-4 sticky top-0 z-50 bg-background/80 backdrop-blur-md">
        <Container>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">

                    <span className="text-lg font-bold">Better Uptime</span>
                </div>
                <div className="flex items-center gap-4">
                    <ModeToggle />
                    <a href="#" className="text-sm font-medium">Features</a>
                    <a href="#" className="text-sm font-medium">Pricing</a>
                    <a href="#" className="text-sm font-medium">About</a>
                    <a href="#" className="text-sm font-medium">Contact</a>
                </div>
            </div>
        </Container>
    </nav>
}   