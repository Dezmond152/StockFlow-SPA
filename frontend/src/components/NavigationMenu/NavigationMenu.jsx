import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import "./NavigationMenu.css";

export function NavigationMenu() {
  return (
    <nav className="nav-menu">
      <Nav className="flex-column w-100">
        <Nav.Link 
          as={NavLink} 
          to={ROUTES.ORDERS}
          className="nav-menu__link"
        >
          Orders
        </Nav.Link>

        <Nav.Link 
          as={NavLink} 
          to={ROUTES.PRODUCTS}
          className="nav-menu__link"
        >
          Products
        </Nav.Link>
      </Nav>
    </nav>
  );
}