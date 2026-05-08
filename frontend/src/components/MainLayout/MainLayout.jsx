import { Outlet } from 'react-router-dom';
import { TopMenu } from '../TopMenu/TopMenu';
import { Navigation } from '../Navigation/Navigation';

export function MainLayout() {
  return (
    <>
      <TopMenu />
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Navigation />
        <main style={{ flexGrow: 1, backgroundColor: '#f0f3f5', padding: '30px' }}>

          <Outlet />
        </main>
      </div>
    </>
  );
}
 

