import { TopMenu } from "../TopMenu/TopMenu.jsx";
import { Navigation } from "../Navigation/Navigation.jsx";

export const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <TopMenu />
      <div className="d-flex">
        <Navigation />
        <main className="p-4 w-100">
          {children}
        </main>
      </div>
    </div>
  );
};