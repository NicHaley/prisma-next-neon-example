import { prisma } from "@repo/database";

export default async function IndexPage() {
  console.log(11111, prisma.user);
  const users = await prisma.user.findMany();

  return (
    <div>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
