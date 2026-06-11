import React from "react";
import { Outlet } from "react-router-dom";
import { TopMenu } from "../TopMenu/TopMenu";
import { NavigationMenu } from "../NavigationMenu/NavigationMenu";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import "./MainLayout.css";

export function MainLayout() {
  return (
    <div className="main-layout">
      <TopMenu />
      
      <div className="main-layout__container">
        <aside className="main-layout__sidebar">
          <NavigationMenu />
        </aside>

        <main className="main-layout__content">
          <Outlet />
        </main>

        <DeleteModal />
      </div>
    </div>
  );
}