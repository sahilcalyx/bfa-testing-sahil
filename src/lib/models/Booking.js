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
        // Snapshot of the quote at form submit — so admin never hardcodes £195
        unitPrice: { type: Number, default: null },
        baseAmount: { type: Number, default: null },
        discount: { type: Number, default: 0 },
        amount: { type: Number, default: null },
        couponCode: { type: String, default: "" },
        attendees: [
            {
                title: { type: String },
                fullName: { type: String },
                companyName: { type: String },
                email: { type: String },
                phone: { type: String },
            }
        ],
        paymentStatus: {
            type: String,
            enum: ["pending", "paid", "failed"],
            default: "pending",
        },
        reCaptcha: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);

// In Next.js development, the model might be cached with an old schema.
if (process.env.NODE_ENV === "development" && mongoose.models.Booking) {
    delete mongoose.models.Booking;
}

const BookingModel = mongoose.models.Booking || mongoose.model("Booking", BookingSchema);

export default BookingModel;
