import { NavLink } from "react-router-dom";

function Nav({names}) {
    const links = names.map(name => (
       <><NavLink to={`/dogs/${name}`}>{name}</NavLink>{'  |  '}</>
    ));

    return (
        <nav>
            <NavLink to="/dogs">Home</NavLink>{"  |  "}
            {links}
        </nav>
    )
}

export default Nav;