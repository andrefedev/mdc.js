import { createFileRoute } from "@tanstack/react-router";

const Login = () => {
	const { greeting } = Route.useLoaderData();
	return <h1>Login Page ${greeting}</h1>;
};

export const Route = createFileRoute("/login")({
	loader: async ({ context: { trpc } }) => {
		// context.trpc viene del router.context
		const greeting = await trpc.greeting.query();
		return { greeting };
	},
	component: Login,
});
