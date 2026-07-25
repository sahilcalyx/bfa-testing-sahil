const { MongoClient } = require("mongodb");
require("dotenv").config({ path: ".env" });

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("No MONGODB_URI");

  const client = new MongoClient(uri);
  await client.connect();
  const col = client.db().collection("nominations");

  const all = await col
    .find({})
    .project({ email: 1, companynm: 1, paymentStatus: 1, createdAt: 1 })
    .sort({ createdAt: 1 })
    .toArray();

  console.log("Total nominations:", all.length);

  const groups = new Map();
  for (const doc of all) {
    const key = [
      String(doc.email || "").toLowerCase().trim(),
      String(doc.companynm || "").trim().toLowerCase(),
    ].join("||");
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(doc);
  }

  const toDelete = [];
  let duplicateGroups = 0;

  for (const docs of groups.values()) {
    if (docs.length <= 1) continue;
    duplicateGroups += 1;
    const paid = docs.filter((d) => d.paymentStatus === "paid");
    const keep = paid.length
      ? paid.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))[0]
      : docs[0];

    for (const d of docs) {
      if (String(d._id) !== String(keep._id)) toDelete.push(d._id);
    }
    console.log(
      "DUPLICATE",
      docs.length,
      "keep",
      keep._id.toString(),
      keep.email,
      "|",
      keep.companynm,
      keep.paymentStatus
    );
  }

  console.log("Duplicate groups:", duplicateGroups);
  console.log("Entries to delete:", toDelete.length);

  if (toDelete.length) {
    const res = await col.deleteMany({ _id: { $in: toDelete } });
    console.log("Deleted:", res.deletedCount);
  }

  console.log("Remaining:", await col.countDocuments());
  await client.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
