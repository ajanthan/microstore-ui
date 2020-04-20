import React, { useReducer } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import ProductList from './productList';
import Cart from './cart';
import CartContext from './cartContext';

const reducer = (state, action) => {
    switch (action.type) {
        case 'updateCart':
            let found = state.find(item => (item.name === action.payload.name)); 
            if (found) {
                found.count=found.count+1;
            }else{
                found={ name: action.payload.name, count: 1 };
            }
            let remains=state.filter(item => (item.name !== action.payload.name));
            return [...remains,found];
        default:
            return state;
    }
}

const App = () => {
    const [cart, updateCart] = useReducer(reducer, []);

    const handleAddToCart = (name) => {
        updateCart({ type: 'updateCart', payload: { name: name } });
        console.log("Adding " + name+"to"+cart);
    }
    return (
        <div>
            <CartContext.Provider value={{cart:cart,addToCart:handleAddToCart}}>
            <Header />
            <div className='container py-5'>
                <div className='row'>
                    <div className="col-md-9">
                        <ProductList/>
                    </div>
                    <div className="col-md-3">
                        <Cart cart={cart} />
                    </div>
                </div>
            </div>
            </CartContext.Provider>
        </div>
    );
}


export default App;


