import mongoose from "mongoose";

const SponsorSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        phoneNo: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        companyName: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
        sponsorship: {
            type: String,
            required: true,
        },
        companyInfo: {
            type: String,
            required: false,
        },
        reCaptcha: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);

// In Next.js development, the model might be cached with an old schema.
if (process.env.NODE_ENV === "development" && mongoose.models.Sponsor) {
    delete mongoose.models.Sponsor;
}

const SponsorModel = mongoose.models.Sponsor || mongoose.model("Sponsor", SponsorSchema);

export default SponsorModel;
