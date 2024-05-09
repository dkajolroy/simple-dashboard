import { Link, useLocation } from "react-router-dom";
import UserMenu from "./UserMenu";

export default function Header() {
  const { pathname } = useLocation();
  return (
    <nav id="header" className="sticky top-0 left-0 bg-gray-900   ">
      <div className="w-full container flex  flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0">
        <div className="w-1/2 pl-2 md:pl-0">
          <a
            className="text-gray-100 text-base xl:text-xl no-underline hover:no-underline font-bold"
            href="#"
          >
            <i className="fas fa-moon text-blue-400 pr-3"></i> Admin
          </a>
        </div>

        <UserMenu />
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden  mt-2 lg:mt-0  z-20"
          id="nav-toggle"
        >
          <ul className="list-reset lg:flex flex-1 items-center px-4 md:px-0">
            {menus.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index} className="mr-6 my-2 md:my-0">
                  <Link
                    to={item.path}
                    className={`${
                      pathname === item.path
                        ? ` border-${item.color} text-${item.color} `
                        : `border-transparent text-gray-400 hover:border-${item.color} `
                    } flex gap-2 py-1 md:py-3 pl-1 align-middle no-underline hover:text-gray-100 border-b-2 `}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="pb-1 md:pb-0 text-sm">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* Search */}
          <div className="relative pull-right pl-4 pr-4 md:pr-0">
            <input
              type="search"
              placeholder="Search"
              className="w-full  text-sm text-gray-400 transition border border-gray-800 focus:outline-none focus:border-gray-600 rounded py-1 px-2 pl-10 appearance-none leading-normal"
            />
            <div className="absolute search-icon top-1/2 -translate-y-1/2 left-6">
              <svg
                className="fill-current pointer-events-none text-gray-400 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

import {
  HomeIcon,
  PencilAltIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

const menus = [
  {
    name: "Home",
    icon: HomeIcon,
    color: "blue-400",
    path: "/",
  },
  {
    name: "User",
    icon: UserCircleIcon,
    color: "pink-400",
    path: "/user",
  },
  {
    name: "Task",
    icon: PencilAltIcon,
    color: "purple-400",
    path: "/task",
  },
];
