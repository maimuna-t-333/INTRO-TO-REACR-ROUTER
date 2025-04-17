import React from 'react';
import { Link, NavLink } from 'react-router';
import "./Header.css"
import User from '../User/User';
import Users2 from '../Users2/Users2';
import Posts from '../Posts/Posts';

const Header = () => {
    return (
        <div>
            <h3>This is header</h3>
            <nav>
                {/* <a href="/">Home</a>
                <a href="/mobiles">Mobile</a>
                <a href="/laptop">Laptop</a>
                <a href=""></a> */}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobiles">Mobile</NavLink>
                <NavLink to="/laptop">Laptop</NavLink>
                
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/users2">Users2</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                
            </nav>
        </div>
    );
};

export default Header;