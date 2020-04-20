import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const Product = (props) => {
    const addToCart = () => {
        console.log('[from product.js]Adding to cart ' + props.name);
        props.addToCart(props.name);
    }
        return (<div className='card' id={props.id}>
            <img className='card-img-top' src={props.image} alt='Not found' />
            <div className='card-body'>

                <h5 className='card-title'> {props.name}</h5>
                <p className='card-text'> {props.description}</p>
                <div className='row'>
                    {props.tags.map(tag =>
                        <span className="card-badge badge-secondary badge-pill m-1">{tag}</span>
                    )}

                </div>
                <button type="submit" className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
            </div>
        </div>);
}

export default Product;