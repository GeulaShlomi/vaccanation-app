import {Outlet, Link } from "react-router-dom";
import logo from "../images/vac-logo.png";
import React from "react";
import {Button} from "react-bootstrap";

/**
 * The menu section component - link to the home page or information page.
 */
class Menu extends React.Component {

    render() {
        return (
            <div style={{ backgroundColor: '#d5f3fd' }}>
                <nav className="nav nav-pills bg-light shadow mr-auto" fixed="top">
                    <img src={logo} alt="Logo" style={{height: "80px"}} />
                    <Link className="nav-item nav-link" to="/">
                        <Button className='my-3 mx-5'
                                style={{ backgroundColor: 'rgb(244, 121, 28)', outlineColor: 'rgb(244, 121, 28)' }}
                                variant="outline-light"
                               /* style={{ backgroundColor: 'rgb(40, 197, 244)' }}
                                style={{ backgroundColor: 'rgb(47, 102, 177)' }}*/
                        >
                            Home Page</Button>
                        </Link>
                    <Link className="nav-item nav-link" to="/informationPage">
                        <Button className='my-3'
                                style={{ backgroundColor: 'rgb(40, 197, 244)', outlineColor: 'rgb(40, 197, 244)' }}
                            variant="outline-light"
                        >Information Page</Button>
                        </Link>
                </nav>
                <Outlet/>
            </div>
        )
    }
}

export default Menu;