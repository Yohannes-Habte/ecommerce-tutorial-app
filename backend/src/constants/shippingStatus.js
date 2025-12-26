/**
 * Defines all valid shipping lifecycle statuses
 */
export const SHIPPING_STATUS = Object.freeze({
  PENDING: 'pending',             // Shipment created but not yet processed
  LABEL_CREATED: 'label created',  // Shipping label generated
  PICKED_UP: 'picked up',          // Courier has picked up the package
  IN_TRANSIT: 'in transit',        // Package is in transit
  OUT_FOR_DELIVERY: 'out for delivery', // Package is out for delivery
  DELIVERED: 'delivered',         // Package delivered to the customer
  FAILED: 'failed',               // Delivery attempt failed
  RETURNED: 'returned',           // Package returned to sender
});


