import { httpServerHandler } from "cloudflare:node";
import app from "./app.js";

const PORT = 4000;

app.listen(PORT);

export default httpServerHandler({ port: PORT });
