const initialState = {
  items: [],
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_CARD_DATA":
      const newItem = {
        gambar: action.payload.gambar,
        name: action.payload.name,
        harga: action.payload.harga,
        rate: action.payload.rate,
        quantity: 1,
      };

      return {
        ...state,
        items: [...state.items, newItem],
      };
    case "REMOVE_CART_ITEM":
      // Handle the "REMOVE_CART_ITEM" action
      const itemId = action.payload;
      const filteredItems = state.items.filter((item) => item.id !== itemId);
      return { ...state, items: filteredItems };

    default:
      return state;
  }
};

export default cardReducer;
