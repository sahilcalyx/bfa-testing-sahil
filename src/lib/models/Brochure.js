import mongoose from "mongoose";

const BrochureSchema = new mongoose.Schema(
    {
        title: { type: String },
        firstName: { type: String },
        lastName: { type: String },
        name: { type: String }, // For name field in some forms
        email: { type: String, required: true },
        phone: { type: String },
        companyName: { type: String },
        role: { type: String },
        country: { type: String },
    },
    { timestamps: true }
);

// In Next.js development, the model might be cached.
if (process.env.NODE_ENV === "development" && mongoose.models.Brochure) {
    delete mongoose.models.Brochure;
}

const BrochureModel = mongoose.models.Brochure || mongoose.model("Brochure", BrochureSchema);

export default BrochureModel;
