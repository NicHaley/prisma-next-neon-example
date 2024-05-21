"use strict";

// src/client.ts
var import_serverless = require("@neondatabase/serverless");
var import_adapter_neon = require("@prisma/adapter-neon");
var import_client = require("@prisma/client");
var connectionString = `${process.env.DATABASE_URL}`;
var sql = (0, import_serverless.neon)(connectionString);
var adapter = new import_adapter_neon.PrismaNeonHTTP(sql);
var prisma = new import_client.PrismaClient({ adapter });

// src/seed.ts
var DEFAULT_USERS = [
  // Add your own user to pre-populate the database with
  {
    name: "Tim Apple",
    email: "tim@apple.com"
  }
];
(async () => {
  try {
    await Promise.all(
      DEFAULT_USERS.map(
        (user) => prisma.user.upsert({
          where: {
            email: user.email
          },
          update: {
            ...user
          },
          create: {
            ...user
          }
        })
      )
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
