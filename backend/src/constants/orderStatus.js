/**
 * Defines all valid order lifecycle statuses
 */
export const ORDER_STATUS = Object.freeze({
  PENDING: "PENDING", // Order created but not yet paid
  PAID: "PAID", // Payment successfully received
  PROCESSING: "PROCESSING", // Order is being prepared / packed
  SHIPPED: "SHIPPED", // Order handed to courier
  DELIVERED: "DELIVERED", // Order delivered to customer
  CANCELLED: "CANCELLED", // Order cancelled by user or system
  RETURN_REQUESTED: "RETURN_REQUESTED", // Customer requested a return
  RETURNED: "RETURNED", // Order returned to the warehouse
  REFUNDED: "REFUNDED", // Payment refunded to customer
});
