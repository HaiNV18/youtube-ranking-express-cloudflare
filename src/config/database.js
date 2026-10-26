import { env } from "cloudflare:workers";
import { Client } from "pg";

const pool = {
    async query(text, values) {
        const client = new Client({
            connectionString: env.HYPERDRIVE.connectionString,
        });

        await client.connect();

        return client.query(text, values);
    },
};

export default pool;
