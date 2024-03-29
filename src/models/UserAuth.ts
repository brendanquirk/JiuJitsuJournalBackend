import mongoose, { Schema, Document } from 'mongoose'

// Define interface for UserAuth document
export interface UserAuthDocument extends Document {
  username: string
  password: string
}

// Define schema for UserAuth model
const userAuthSchema = new Schema<UserAuthDocument>({
  username: { type: String, required: true },
  password: { type: String, required: true },
})

// Create and export UserAuth model
export const UserAuth = mongoose.model<UserAuthDocument>(
  'UserAuth',
  userAuthSchema
)
