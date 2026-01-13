import mongoose from "mongoose";

declare global {
  var mongooseConnection: mongoose.Mongoose | undefined;
}

export {};
