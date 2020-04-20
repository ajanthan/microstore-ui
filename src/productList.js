import React, { useState, useEffect, useContext } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Product from './product';
import CartContext from './cartContext';

const PRODUCTS = [
    { id: 1, name: 'Car', description: 'This is a sample product', price: 12.0, tags: ['test', 'vehicle'] },
    { id: 2, name: 'Bicycle', description: 'This is a sample product', price: 120.0, tags: ['test', 'vehicle'] },
    { id: 3, name: 'Sugar', description: 'This is a sample product', price: 120.0, tags: ['test', 'vehicle'] },
    { id: 4, name: 'Jug', description: 'This is a sample product', price: 120.0, tags: ['test', 'vehicle'] },
    { id: 5, name: 'Cup', description: 'This is a sample product', price: 120.0, tags: ['test', 'vehicle'] },
    { id: 6, name: 'Banana', description: 'This is a sample product', price: 120.0, tags: ['test', 'vehicle'] },
    { id: 7, name: 'Bottle', description: 'This is a sample product', price: 120.0, tags: ['test', 'vehicle'] },
    { id: 8, name: 'Soda', description: 'This is a sample product', price: 120.0, tags: ['test', 'vehicle'] },
    { id: 9, name: 'Wine', description: 'This is a sample product', price: 120.0, tags: ['test', 'vehicle'] },
    { id: 10, name: 'Beer', description: 'This is a sample product', price: 120.0, tags: ['test', 'vehicle'] }
];

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const cartContext = useContext(CartContext);
    useEffect(() => {
        setProducts(PRODUCTS);
    }, []);

    const handleAddToCart = (name) => {
        console.log("Adding from plist " + name);
        cartContext.addToCart(name);
    }
    return (
        <div className='card-columns'>
            {products.map(product =>
                <Product
                    id={product.id}
                    name={product.name}
                    image={'https://loremflickr.com/320/240/' + product.name + '?random=' + product.id}
                    description={product.description}
                    tags={product.tags} addToCart={handleAddToCart} />)
            }
        </div>);
}

export default ProductList;