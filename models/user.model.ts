import mongoose from "mongoose";

interface UserModelSchema {
  email: string;
  password: string;
  full_name: string;
}

const userSchema = new mongoose.Schema<UserModelSchema>({
  email: {
    unique: true,
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 63,
  },
  full_name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 32,
  },
});

export const userModel =
  mongoose.models && mongoose.models?.User
    ? (mongoose.models.User as mongoose.Model<UserModelSchema>)
    : mongoose.model<UserModelSchema>("User", userSchema);
