import mongoose from "mongoose";

const Interest2027Schema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    jobTitle: { type: String, default: "" },
    companyName: { type: String, required: true },
    email: { type: String, required: true },
    city: { type: String, default: "" },
    country: { type: String, default: "" },
    countryCode: { type: String, required: true },
    phone: { type: String, required: true },
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
