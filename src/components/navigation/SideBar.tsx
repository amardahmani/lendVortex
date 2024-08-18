import React, { useState } from "react";

// ICONS //

import { Link } from "react-router-dom";
// ICONS //

import { HomeIcon,CreditCardIcon,UserCircleIcon,BanknotesIcon,BookOpenIcon } from "@heroicons/react/24/outline";


type SidebarLink = {
    id: number;
    path: string;
    name: string;
    icon: React.ReactNode;
};
  
  
const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index:any) => {
    setActiveLink(index);
  };
  const SIDEBAR_LINKS: SidebarLink[] = [
    { id: 1, path: '/', name: 'Dashboard', icon: <HomeIcon className="h-6 w-6" /> },
    { id: 2, path: '/loans', name: 'Loan', icon: <BanknotesIcon className="h-6 w-6" /> },
    { id: 3, path: '/payments', name: 'Payments', icon: <CreditCardIcon className="h-6 w-6" /> },
    { id: 4, path: '/account', name: 'Account', icon: <UserCircleIcon className="h-6 w-6" /> },
    { id: 5, path: '/resources', name: 'Resources', icon: <BookOpenIcon className="h-6 w-6" /> },
  ];

  return (
    <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen boder-r pt-8 px-4 bg-white">
      {/* logo */}
      <div className="mb-8">
        
      </div>
      {/* logo */}

      {/* Navigation Links */}
      <ul className="mt-6 space-y-6">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-green-500 ${
              activeLink === index ? "bg-green-100 text-green-500" : ""
            }`}
          >
            <Link
              to={link.path}
              className="flex justify-center md:justify-start items-center md:space-x-5"
              onClick={() => handleLinkClick(index)}
            >
              <span>{link.icon}</span>
              <span className="text-sm text-gray-500 hidden md:flex">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {/* Navigation Links */}

      <div className="w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center">
        <p className="flex items-center space-x-2 text-xs text-white py-2 px-5 bg-gradient-to-r from-green-500 to-green-600 rounded-full">
          {" "}
          <span>?</span> <span className="hidden md:flex">Need Help</span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;