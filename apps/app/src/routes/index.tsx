import { redirect, createFileRoute } from "@tanstack/react-router";

// const Index = () => {
// 	return <h1>Hello World</h1>;
// };

export const Route = createFileRoute("/")({
	beforeLoad: async ({ context, location }) => {
		context.trpc
		throw redirect({
			to: "/login",
			search: {
				// Use the current location to power a redirect after login
				// (Do not use `router.state.resolvedLocation` as it can
				// potentially lag behind the actual current location)
				redirect: location.href,
			},
		});
	},
});
