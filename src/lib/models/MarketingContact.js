import mongoose from "mongoose";

const MarketingContactSchema = new mongoose.Schema(
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
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        inquiryType: {
            type: String,
            default: "marketing_press",
        },
        reCaptcha: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);

if (process.env.NODE_ENV === "development" && mongoose.models.MarketingContact) {
    delete mongoose.models.MarketingContact;
}

const MarketingContactModel =
    mongoose.models.MarketingContact ||
    mongoose.model("MarketingContact", MarketingContactSchema);

export default MarketingContactModel;
