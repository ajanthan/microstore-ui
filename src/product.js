import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class Product extends React.Component {
    constructor(props){
        super(props);
        this.addToCart=this.addToCart.bind(this)
    }

addToCart(){
    console.log('[from product.js]Adding to cart '+this.props.name);
    this.props.addToCart(this.props.name);
}
    render() {
        return (<div className='card' id={this.props.id}>
            <img className='card-img-top' src={this.props.image} alt='Not found' />
            <div className='card-body'>

                <h5 className='card-title'> {this.props.name}</h5>
                <p className='card-text'> {this.props.description}</p>
                <div className='row'>
                    {this.props.tags.map(tag =>
                        <span className="card-badge badge-secondary badge-pill m-1">{tag}</span>
                    )}

                </div>
                <button type="submit" className="btn btn-primary" onClick={this.addToCart}>Add to Cart</button>
            </div>
        </div>);
    }
}

export default Product;