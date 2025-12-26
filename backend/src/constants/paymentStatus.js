/**
 * Supported payment methods
 */
const createPaymentMethod = (code, label) => Object.freeze({ code, label });

export const PAYMENT_METHODS = Object.freeze({
  COD: createPaymentMethod("CASH_ON_DELIVERY", "Cash on Delivery"),
  CARD: createPaymentMethod("CARD", "Debit/Credit Card"),
  STRIPE: createPaymentMethod("STRIPE", "Stripe Gateway"),
  PAYPAL: createPaymentMethod("PAYPAL", "PayPal"),
  UPI: createPaymentMethod("UPI", "UPI"),
  WALLET: createPaymentMethod("WALLET", "Wallet Balance"),
});

/**
 * Payment lifecycle statuses
 */
export const PAYMENT_STATUS = Object.freeze({
  INITIATED: "INITIATED", // Payment started
  AUTHORIZED: "AUTHORIZED", // Authorized, pending capture
  SUCCESS: "SUCCESS", // Completed
  FAILED: "FAILED", // Failed
  PARTIALLY_REFUNDED: "PARTIALLY_REFUNDED", // Partial refund
  REFUNDED: "REFUNDED", // Fully refunded
});
