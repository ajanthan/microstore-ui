import React,{useContext} from 'react'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContext from './cartContext';


const Cart = () => {
    const cartContext=useContext(CartContext);
    return (
        <table className="table">
            <tbody>
            <tr>
    <th className="align-center">Shopping Chart</th>
            </tr>
                {
                    cartContext.cart.map(item => 
                        <tr>
                            <td>
                                <div>{item.name}</div>
                            </td>
                            <td>
                                <div>{item.count}</div>
                            </td>
                            <td><a className="btn btn-danger" value="Delete">Delete</a></td>
                            <td><a className="btn btn-primary" value="update">Update</a></td>
                        </tr>
                    
                    )
                }
            </tbody>
        </table>

    );

}
export default Cart