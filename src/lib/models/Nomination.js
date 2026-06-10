import mongoose from "mongoose";

const NominationSchema = new mongoose.Schema(
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
        companynm: {
            type: String,
            required: true,
        },
        companyaddress: {
            type: String,
            required: true,
        },
        amountingbp: {
            type: String,
            required: true,
        },
        companysector: {
            type: String,
            required: true,
        },
        companyregnumber: {
            type: String,
            required: true,
        },
        serviceyouOffer: {
            type: String,
            required: true,
        },
        awardcate: {
            type: [String],
            required: true,
        },
        websiteurl: {
            type: String,
            required: true,
        },
        aboutyourself: {
            type: String,
            required: true,
        },
        uploadfile: {
            type: String,
            required: false,
        },
        uploadfileoptional: {
            type: String,
            required: false,
        },
        paymentStatus: {
            type: String,
            enum: ["pending", "paid", "failed"],
            default: "pending",
        },
        howmanyperson: {
            type: String,
            required: false,
        },
        businesscorridors: {
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
if (process.env.NODE_ENV === "development" && mongoose.models.Nomination) {
    delete mongoose.models.Nomination;
}

const NominationModel = mongoose.models.Nomination || mongoose.model("Nomination", NominationSchema);

export default NominationModel;
