import { createAction } from '@reduxjs/toolkit';

export const storeCardData = createAction('STORE_CARD_DATA');

export const removeCartItem = (itemId) => {
    return {
      type: "REMOVE_CART_ITEM",
      payload: itemId,
    };
  };