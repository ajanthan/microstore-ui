import React from 'react'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const ORDERS = [
    { id: 1, name: 'Car', amount: 2 },
    { id: 2, name: 'Bicycle', amount: 2 },
    { id: 3, name: 'Sugar', amount: 1 }
]

class Cart extends React.Component {
    constructor(props) {
        super(props);
        
    }

    
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