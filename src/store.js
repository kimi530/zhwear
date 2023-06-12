import { createStore , applyMiddleware , combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { ProductListReducer , ProductDetailReducer } from './Reducer/ProductReducer'
import { CartReducer} from './Reducer/CartReducer'

const reducer = combineReducers({
    productList : ProductListReducer,
    productDetail : ProductDetailReducer,
    cart: CartReducer
})

const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? JSON.parse(
    localStorage.getItem('cartItems')) : []

const initialState = {
    cart: { cartItems: cartItemsFromLocalStorage }
}

const middleware = [thunk]

const store = createStore(reducer , initialState , applyMiddleware(...middleware))

export default store