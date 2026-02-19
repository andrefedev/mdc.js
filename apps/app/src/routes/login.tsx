import { createFileRoute } from "@tanstack/react-router";

const Login = () => {
	return <h1>Login Page</h1>;
};

export const Route = createFileRoute("/login")({ component: Login });
