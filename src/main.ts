import "module-alias/register";
import { createServer } from "http";
import app from "./app";
import { config } from "./config/env";
import { prisma } from "./config/prisma";

const HOST = config.HOST || "localhost";
const PORT = Number(config.PORT) || 5000;

const server = createServer(app);

server.listen(PORT, HOST, () => {
  const protocol = HOST === "localhost" ? "http" : "https";
  console.log(`🚀 Server is running at ${protocol}://${HOST}:${PORT}`);
});

const shutdown = async () => {
  console.log("Shutting down...");
  await prisma.$disconnect();
  server.close(() => {
    console.log("Closed HTTP server.");
    process.exit(0);
  });
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
