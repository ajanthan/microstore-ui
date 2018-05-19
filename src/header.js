import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-primary justify-content-between" >
                <a className="navbar-brand">ACM Store</a>
                <div className="nav-item dropdown">
                    <div className="nav-item dropdown-toggle" href="#"
                        id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    </div>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" >
                        <form className="form" method="post">
                            <button className="btn btn-primary btn-link" type="submit" value="Sign Out">Sign Out</button>
                        </form>
                        <a className="menu-item" href="/cart">checkout</a>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Header;

