import React, { useState } from "react";
import Data from "./data.json";
import { Link } from "react-router-dom";

function AppDropdown() {
const [dropdown, setDropdown] = useState(false);

    return (
        <>
            <ul
                className={dropdown ? "services-submenu clicked" : "services-submenu"}
                onClick={() => setDropdown(!dropdown)}
            >
                {Data.subnavItems.map((item) => {
                    return (
                        <li key={item.id}>
                            <Link
                                to={item.Link}
                                onClick={() => setDropdown(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <ul
                className={dropdown ? "services-submenu clicked" : "services-submenu"}
                onClick={() => setDropdown(!dropdown)}
            >
                {Data.subnavItems.submenunavItems.map((item) => {
                    return (
                        <li key={item.id}>
                            <Link
                                to={item.Link}
                                onClick={() => setDropdown(false)}
                            >
                            {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>

        </>
    );  
}

export default AppDropdown;