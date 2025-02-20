import { MongoClient, type Db } from "mongodb";

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!process.env.DB_URI) {
  throw new Error('Invalid/Missing environment variable: "DB_URI"');
}

const uri = process.env.DB_URI;
const options = {};

interface MongoConnection {
  client: MongoClient;
  db: Db;
}

let cachedConnection: MongoConnection | null = null;

async function connectToDatabase(): Promise<MongoConnection> {
  if (cachedConnection) {
    return cachedConnection;
  }

  const client = await MongoClient.connect(uri, options);
  const db = client.db("sonic-smart-wallet");

  cachedConnection = { client, db };
  return cachedConnection;
}

export default connectToDatabase;
