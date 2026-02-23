import { TanStackDevtools } from "@tanstack/react-devtools";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";

// import "../styles.css";

// Importa SOLO el tipo del cliente (sin runtime import)
type RouterContext = {
	trpc: typeof import("../lib/trpc").trpc;
};

const RootComponent = () => {
	return (
		<>
			<Outlet />

			<TanStackDevtools
				config={{
					position: "bottom-right",
				}}
				plugins={[
					{
						name: "TanStack Router",
						render: <TanStackRouterDevtoolsPanel />,
					},
				]}
			/>
		</>
	);
};

export const Route = createRootRouteWithContext<RouterContext>()({
	component: RootComponent,
});
