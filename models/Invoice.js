const mongoose = require("mongoose");
const mongooseSchema = mongoose.Schema;

const InvoiceSchema = mongooseSchema(
  {
    user: { type: mongoose.ObjectId, ref: "user" },
    amount: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    gender: { type: String, required: true },
    shirtSize: { type: String, required: true },
    invoiceId: { type: String, required: true },
    society: { type: String, required: false },
    scanned: { type: Boolean, default: false },
    code: { type: String },
  },
  { timestamps: true }
);

module.exports = Invoice = mongoose.model("invoice", InvoiceSchema);
