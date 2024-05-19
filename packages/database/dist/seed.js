"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/client.ts
var client_exports = {};
__export(client_exports, {
  prisma: () => prisma
});
var import_serverless = require("@neondatabase/serverless");
var import_adapter_neon = require("@prisma/adapter-neon");
var import_client = require("@prisma/client");
var import_dotenv = __toESM(require("dotenv"));
var import_ws = __toESM(require("ws"));
__reExport(client_exports, require("@prisma/client"));
import_dotenv.default.config();
import_serverless.neonConfig.webSocketConstructor = import_ws.default;
var connectionString = `${process.env.DATABASE_URL}`;
var pool = new import_serverless.Pool({ connectionString });
var adapter = new import_adapter_neon.PrismaNeon(pool);
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
