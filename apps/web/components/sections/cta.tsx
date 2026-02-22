import { Button } from "../ui/button";
import Container from "./container";
import Heading from "./heading";
import SubHeading from "./subheading";

export default function CTA() {
    return <section>
        <Container className="py-6 md:py-12 lg:py-24">
            <div className="flex flex-col md:flex-row gap-4 justify-center border border-neutral-200 p-4 md:p-8 md:py-12 rounded-md bg-linear-to-br from-transparent via-transparent to-emerald-200 ">
                <div className="flex flex-col gap-4 flex-1">
                    <Heading
                        as="h2"
                        className="text-center md:text-left mx-auto md:mx-0 max-w-[90%] md:max-w-xl lg:max-w-4xl"
                    >
                        Ready to transform your business?
                    </Heading>

                    <SubHeading
                        as="p"
                        className="max-w-[95%] md:max-w-xl lg:max-w-3xl mx-auto text-center md:text-left md:mx-0"
                    >
                        Join thousands of businesses already  using <br className="hidden md:block" /> Brillance to streamline their operations.
                    </SubHeading>

                    <Button className="px-12 mt-4 w-fit">
                        Start for free
                    </Button>
                </div>
 
                <div className=" flex-1">

                </div>
            </div>
        </Container>
    </section>
}