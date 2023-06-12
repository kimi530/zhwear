export const CartReducer = (state = { cartItems: []} , action) => {
    switch(action.type) {
        case 'CART-ADD-ITEM' :
            const item = action.payload

            const existingItem = state.cartItems.find((i) => i.product === item.product )

            if(existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((i) =>
                     i.product === existingItem.product ? item : i
                     )
                }
            }
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems , item]
                }
            }
            case 'CART-REMOVE-ITEM':
                return {
                    ...state,
                    cartItems: state.cartItems.filter((i) => i.product !== action.payload)
                }
            default:
                return state
    }
}

