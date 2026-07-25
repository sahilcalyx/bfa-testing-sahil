import mongoose from "mongoose";

/**
 * Per-jury, per-category shortlist decision.
 * A nomination entered in multiple award categories can be shortlisted
 * independently for each category.
 */
const JuryShortlistSchema = new mongoose.Schema(
  {
    juryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
      index: true,
    },
    nominationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Nomination",
      required: true,
      index: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    note: {
      type: String,
      trim: true,
      default: "",
      maxlength: 500,
    },
  },
  { timestamps: true }
);

JuryShortlistSchema.index(
  { juryId: 1, nominationId: 1, category: 1 },
  { unique: true }
);

export default mongoose.models.JuryShortlist ||
  mongoose.model("JuryShortlist", JuryShortlistSchema);
