import React from "react";

import { NavLink} from "react-router-dom";

const TestMenu = () =>{
    return (
        <>
            <ul className="d-flex">
                <li>
                    <NavLink to='/test/use-context/'> useContext Hook </NavLink>
                </li>
            </ul>
        </>
    )
};

export default TestMenu;