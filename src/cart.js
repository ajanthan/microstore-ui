import React from 'react'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class Cart extends React.Component {
    render() {
        return (
            <table className="table">
                <thead>
                    <th className="align-center">Shopping Chart</th>
                </thead>
                <tbody>
                    {
                        this.props.cart.map( item => 
                            
                        
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
}
export default Cart