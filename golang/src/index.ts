import { Container, getContainer } from "@cloudflare/containers";
import { Hono } from "hono";

export class MyContainer extends Container<Env> {
	defaultPort = 8080;
	sleepAfter = "2m";
	override onStart() {
		console.log("Container successfully started");
	}

	override onStop() {
		console.log("Container successfully shut down");
	}

	override onError(error: unknown) {
		console.log("Container error:", error);
	}
}

const app = new Hono<{
	Bindings: Env;
}>();

app.get("/", async (c) => {
	const container = getContainer(c.env.MY_CONTAINER);
	return await container.fetch(c.req.raw);
});
export default app;
