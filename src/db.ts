import { DataAPIClient } from '@datastax/astra-db-ts';

// const { ASTRA_DB_APPLICATION_TOKEN, ASTRA_DB_API_ENDPOINT } = process.env;

// if (!ASTRA_DB_APPLICATION_TOKEN || !ASTRA_DB_API_ENDPOINT) {
//   throw new Error("Missing Astra credentials");
// }

// Initialize the client and get a "Db" object
const client = new DataAPIClient(
  'AstraCS:phmPDNeBBxAKFynHQYwzaKOJ:c64e21b0ff65da3e4aeac9e134a04a219034a1301190b72a4b71446bdf010dcd',
  {
    httpOptions: {
      client: 'fetch',
    },
  },
);

const db = client.db(
  'https://4ce9e8bb-6c4d-4438-a603-f3a455e2a150-us-east1.apps.astra.datastax.com',
);

export default db;
