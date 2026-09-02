import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/routes.js";
import "./NavigationMenu.css";

export function NavigationMenu() {
  return (
    <nav className="nav-menu">
      <Nav className="flex-column w-100">
        <Nav.Link as={NavLink} to={ROUTES.ORDERS} className="nav-menu__link">
          Приход
        </Nav.Link>

        <Nav.Link as={NavLink} to={ROUTES.PRODUCTS} className="nav-menu__link">
          Продукты
        </Nav.Link>
      </Nav>
    </nav>
  );
}