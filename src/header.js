import React, { useContext, useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserContext } from '@ajanthan/wso2identity-js';

const Header = () => {
    const userContext = useContext(UserContext);
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <nav className="navbar navbar-light bg-primary justify-content-between" >
            <a className="navbar-brand">ACM Store</a>
            <div className=" nav-item dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button"
                    data-toggle="dropdown" onClick={handleToggle}>More
                </button>
                    <ul className="dropdown-menu dropdown-menu-right" style={{display: toggle? "block":"none"}}>
                        <li>  <a className="dropdown-item" onClick={userContext.handleLogout}>Sign Out</a></li>
                        <li>  <a className="dropdown-item" href="/cart">checkout</a></li>
                    </ul>
            </div>
        </nav>
    );
}
export default Header;

