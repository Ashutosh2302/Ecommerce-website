import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    productList: productListReducer, 
    productDetails: productDetailsReducer,
})
const initialstate = {}
const middleware = [thunk]
const store = createStore(reducer, initialstate, composeWithDevTools(applyMiddleware(...middleware)))

export default store
