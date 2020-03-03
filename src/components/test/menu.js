import React from "react";

import { NavLink} from "react-router-dom";

const TestMenu = () =>{
    return (
        <>
            <ul>
                <li>
                    <NavLink to='/test/use-context/'> useContext Hook </NavLink>
                </li>
                <li>
                    <NavLink to='/test/redux/'> Redux Test </NavLink>
                </li>
            </ul>
        </>
    )
};

export default TestMenu;