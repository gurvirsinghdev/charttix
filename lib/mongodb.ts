import mongoose from "mongoose";

export async function createDBConnection() {
  if (!globalThis.mongooseConnection) {
    globalThis.mongooseConnection = await mongoose.connect(
      process.env.MONGODB_CONNECTION_URI!,
      {}
    );
  }

  return globalThis.mongooseConnection;
}
