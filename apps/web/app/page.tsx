import { prisma } from "@repo/database";

export default async function IndexPage() {
  const users = await prisma.user.findMany();

  return (
    <div>
      <h1>Public page</h1>
    </div>
  );
}
