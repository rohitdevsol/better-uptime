import { Button } from "@/components/ui/button";
// import { prisma } from "@repo/database";

export default async function IndexPage() {
  // const users = await prisma.user.findMany();

  return (
    <div>
      <h1>Hello World</h1>
      <Button variant={"default"}>Button</Button>
      {/* <p className="text-red-400 bg-red-700">hello</p> */}

      {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
    </div>
  );
}
