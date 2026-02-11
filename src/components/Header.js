import React from 'react';
import MenuItems from './MenuItems';
import { FaCode } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="navbar bg-base-300 fixed w-full z-50 box-border">
        <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </label>
        </div>
        <div className="mx-2 flex-1 px-2 text-lg font-semibold space-x-2 items-center">
            <FaCode size={20}/>
            <p>Portfolio</p>
        </div>
        <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
                <MenuItems />
            </ul>
        </div>
    </div>
  );
}

export default Header;