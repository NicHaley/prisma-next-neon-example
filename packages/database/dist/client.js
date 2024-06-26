"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client.ts
var client_exports = {};
__export(client_exports, {
  prisma: () => prisma
});
module.exports = __toCommonJS(client_exports);
var import_serverless = require("@neondatabase/serverless");
var import_adapter_neon = require("@prisma/adapter-neon");
var import_client = require("@prisma/client");
var connectionString = `${process.env.DATABASE_URL}`;
var sql = (0, import_serverless.neon)(connectionString);
var adapter = new import_adapter_neon.PrismaNeonHTTP(sql);
var prisma = new import_client.PrismaClient({ adapter });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  prisma
});
