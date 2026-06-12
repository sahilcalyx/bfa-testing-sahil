import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        companyName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        tickets: {
            type: Number,
            required: true,
        },
        paymentStatus: {
            type: String,
            enum: ["pending", "paid", "failed"],
            default: "pending",
        },
        reCaptcha: {
            type: String,
            required: false,
        },
        attendees: [
            {
                fullName: { type: String, required: true },
                email: { type: String, required: true },
            }
        ],
    },
    { timestamps: true }
);

// In Next.js development, the model might be cached with an old schema.
if (process.env.NODE_ENV === "development" && mongoose.models.Booking) {
    delete mongoose.models.Booking;
}

const BookingModel = mongoose.models.Booking || mongoose.model("Booking", BookingSchema);

export default BookingModel;
