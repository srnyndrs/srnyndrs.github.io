import React from 'react';
import MenuItems from './MenuItems';
import Socials from './Socials';

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-0 md:p-4 mt-4 gap-y-6">
        <nav>
            <ul className="menu menu-horizontal">
                <MenuItems />
            </ul>
        </nav>
        <nav>
            <Socials />
        </nav>
        <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
    </footer>
  );
}

export default Footer;