import mongoose from "mongoose";
import {
  INTEREST_2027_SOURCES,
  INTEREST_2027_VALUES,
} from "../interest2027Options";

const Interest2027Schema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    // Kept in sync from fullName so older admin views and emails keep working.
    firstName: { type: String, required: true },
    lastName: { type: String, default: "" },
    jobTitle: { type: String, required: true },
    companyName: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, trim: true, index: true },
    city: { type: String, default: "" },
    country: { type: String, default: "" },
    countryCode: { type: String, required: true },
    phone: { type: String, required: true },
    interests: {
      type: [{ type: String, enum: INTEREST_2027_VALUES }],
      default: [],
    },
    otherInterest: { type: String, default: "" },
    source: { type: String, enum: INTEREST_2027_SOURCES, default: "page" },
    submissionCount: { type: Number, default: 1 },
    year: { type: Number, default: 2027 },
    reCaptcha: { type: String, required: false },
  },
  { timestamps: true }
);

if (process.env.NODE_ENV === "development" && mongoose.models.Interest2027) {
  delete mongoose.models.Interest2027;
}

const Interest2027Model =
  mongoose.models.Interest2027 ||
  mongoose.model("Interest2027", Interest2027Schema);

export default Interest2027Model;
