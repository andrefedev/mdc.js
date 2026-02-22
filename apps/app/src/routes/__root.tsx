import { TanStackDevtools } from "@tanstack/react-devtools";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import { Outlet, createRootRoute } from "@tanstack/react-router";

// import "../styles.css";

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

export const Route = createRootRoute({ component: RootComponent });
