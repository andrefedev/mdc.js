import { trpc } from "./lib/trpc";
import { routeTree } from "./routeTree.gen";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";

export const getRouter = () => {
	const router = createTanStackRouter({
		routeTree,
		context: { trpc },
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0,
	});

	return router;
};

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof getRouter>;
	}
}
