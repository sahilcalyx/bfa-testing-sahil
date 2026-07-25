import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
      default: "",
    },
    password: {
      type: String,
      // Admin accounts use password; jury uses email OTP only
      required: false,
    },
    role: {
      type: String,
      enum: ["admin", "jury"],
      default: "admin",
    },
    // Categories this jury member is allowed to judge
    assignedCategories: {
      type: [String],
      default: [],
    },
    // Specific nomination IDs assigned to this jury member
    assignedNominations: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Nomination" }],
      default: [],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    otp: {
      type: String,
    },
    otpExpires: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Admin || mongoose.model("Admin", AdminSchema);
