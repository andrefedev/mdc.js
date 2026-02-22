import { createFileRoute } from "@tanstack/react-router";

const RouteIndex = () => {
	return <div>Hello "/app/"!</div>;
};

export const Route = createFileRoute("/app/")({ component: RouteIndex });
