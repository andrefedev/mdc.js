// Export type router type signature, this is used by the client.
import cors from "cors";
import { appRouter } from "@/app.js";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const allowedOrigins = new Set([
	"http://localhost:3001",
	"https://admin.muydelcampo.com", // tu dominio real del frontend
]);

const server = createHTTPServer({
	router: appRouter,
	middleware: cors({
		origin(origin, cb) {
			console.log(`hello world cors`);
			// permite tools como curl/postman sin origin
			if (!origin) return cb(null, true);
			return cb(null, allowedOrigins.has(origin));
		},
		// si usas cookies/sesión:
		// credentials: true,
	}),
});

server.listen(3000);

console.log(`hello world ${300}`);
