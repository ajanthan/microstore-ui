import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './header'
import ProductList from './productList'
import Cart from './cart'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: []
        }
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }
    handleAddToCart(name) {
        var sCart=this.state.cart;
        var found=false;
        sCart.forEach(iteam => {
            if(iteam.name==name){
                iteam.count+=1;
                found=true;
            }
            
        });
        if(!found){
            sCart.push({name:name,count:1}); 
        }
        // if(sCart[name]==undefined){  
        //     sCart[name]=0;
        // }
       // sCart.push({name:name,count:1});
        this.setState({cart:sCart});
        console.log("Adding " + name);
    }
    render() {
        return (
            <div>
                <Header />
                <div className='container py-5'>
                <div className='row'>
                <div className="col-md-9">
                <ProductList handlecart={this.handleAddToCart} />
                </div>
                <div className="col-md-3">
                <Cart cart={this.state.cart} />
                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default App;


