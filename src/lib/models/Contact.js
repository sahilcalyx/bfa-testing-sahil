import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
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
        reCaptcha: {
            type: String,
            required: false, // Optional in DB, verified in API
        },
    },
    { timestamps: true }
);

// In Next.js development, the model might be cached with an old schema.
// We force a refresh if the titleid field is still being enforced.
if (process.env.NODE_ENV === "development" && mongoose.models.Contact) {
    delete mongoose.models.Contact;
}

const ContactModel = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export default ContactModel;
