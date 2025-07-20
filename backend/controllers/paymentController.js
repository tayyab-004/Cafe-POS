const Razorpay = require("razorpay");
const config = require("../config/config");

const createOrder = async (req, res, next) => {
  const razorpay = new Razorpay({
    key_id: config.razorpayKeyId,
    key_secret: config.razorpaySecretKey,
  });
  try {
    const { amount } = req.body;
    const options = {
      amount: amount * 100,
      currency: "PKR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.status(200).json({ success: true, order });
  } catch (error) {
    next(error);
  }
};

module.exports = { createOrder };
