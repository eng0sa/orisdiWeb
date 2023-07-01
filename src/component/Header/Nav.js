import React, { useState } from "react";
import { Link } from "react-router-dom";
import navItems from './data.json'
import AppDropdown from "./dropdown";

function AppNavbar() {
const [dropdown, setDropdown] = useState(false);
return (
    <>
    <nav className="navbar">
        <ul className="nav-items">
        {navItems.map((item) => {
            if (item.title === {navItems}) {
            return (
                <li
                key={item.id}
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
                >
                <Link to={item.path}>{item.title}</Link>
                {dropdown && <AppDropdown />}
                </li>
            );
            }
            return (
            <li key={item.id}>
                <Link to={item.path}>{item.title}</Link>
            </li>
            );
        })}
        </ul>
    </nav>
    </>
);
}

export default AppNavbar;