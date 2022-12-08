import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = ()  =>{
    return (
        <div className="App">
            <header className="App-header">
               header
            </header>
            <main>
              <Outlet />
            </main>
        </div>
    );
}

export default Layout;
