const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const path = require('path');

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('Error: MONGODB_URI is not defined in .env.local');
    process.exit(1);
}

const AdminSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        otp: { type: String },
        otpExpires: { type: Date },
    },
    { timestamps: true }
);

const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);

async function seedAdmin() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');

        const email = 'kudos@britfintechawards.com';
        const password = 'Bfa@2025';

        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            console.log('Admin already exists. Updating password...');
            const hashedPassword = await bcrypt.hash(password, 10);
            existingAdmin.password = hashedPassword;
            await existingAdmin.save();
            console.log('Admin updated successfully');
        } else {
            console.log('Creating new admin...');
            const hashedPassword = await bcrypt.hash(password, 10);
            const newAdmin = new Admin({
                email,
                password: hashedPassword
            });
            await newAdmin.save();
            console.log('Admin created successfully');
        }

        process.exit(0);
    } catch (error) {
        console.error('Error seeding admin:', error);
        process.exit(1);
    }
}

seedAdmin();
