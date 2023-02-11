import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <div id="brand">
                Developer Funnel  &nbsp; <Link className='btn btn-info' to="/">Home</Link>
            </div>
            <div id="social">
                <Link to="/login" className="btn btn-warning">
                    <span className="glyphicon glyphicon-log-in"></span> Login
                </Link> &nbsp;
                <Link to="/register" className="btn btn-success">
                    <span className="glyphicon glyphicon-user"></span> Register
                </Link>
            </div>
        </header>
    )
}

export default Header