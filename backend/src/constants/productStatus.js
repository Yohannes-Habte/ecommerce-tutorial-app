/**
 * Defines all valid product lifecycle states.
 */
export const PRODUCT_STATUS = Object.freeze({
  DRAFT: 'DRAFT',               // Not visible to customers
  ACTIVE: 'ACTIVE',             // Available for purchase
  OUT_OF_STOCK: 'OUT_OF_STOCK', // Temporarily unavailable
  DISCONTINUED: 'DISCONTINUED', // No longer produced
  ARCHIVED: 'ARCHIVED',         // Retained for historical records
});

