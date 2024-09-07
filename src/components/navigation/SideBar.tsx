import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, CreditCardIcon, UserCircleIcon, BanknotesIcon, BookOpenIcon, CurrencyDollarIcon, QuestionMarkCircleIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

type SidebarLink = {
  id: number;
  path: string;
  name: string;
  icon: React.ReactNode;
};

type SidebarProps = {
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
};
export default function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps)  {
  const [activeLink, setActiveLink] = useState(0);
  const location = useLocation();

  const SIDEBAR_LINKS: SidebarLink[] = [
    { id: 1, path: "/user/dashboard", name: "Dashboard", icon: <HomeIcon className="h-6 w-6" /> },
    { id: 2, path: "/user/loans", name: "Loan", icon: <BanknotesIcon className="h-6 w-6" /> },
    { id: 3, path: "/user/payments", name: "Payments", icon: <CurrencyDollarIcon className="h-6 w-6" /> },
    { id: 4, path: "/user/bank", name: "Bank", icon: <CreditCardIcon className="h-6 w-6" /> },
    { id: 5, path: "/user/account", name: "Account", icon: <UserCircleIcon className="h-6 w-6" /> },
    { id: 6, path: "/user/resources", name: "Resources", icon: <BookOpenIcon className="h-6 w-6" /> },
  ];

  useEffect(() => {
    const activeIndex = SIDEBAR_LINKS.findIndex(link => link.path === location.pathname);
    setActiveLink(activeIndex !== -1 ? activeIndex : 0);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      className={`fixed left-0 top-0 z-10 h-screen bg-gray-900 text-white transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between p-4">
          <div className={`flex items-center space-x-2 ${isCollapsed ? "hidden" : ""}`}>
            <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-lg font-bold text-white">LC</span>
            </div>
            <span className="text-lg font-bold">LoanCorp</span>
          </div>
          <button
            className="ml-auto text-gray-400 hover:text-white transition-colors duration-200"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <ChevronRightIcon className="h-6 w-6" /> : <ChevronLeftIcon className="h-6 w-6" />}
          </button>
        </div>
        <nav className="flex-1 space-y-2 py-4 px-3 overflow-y-auto">
          {SIDEBAR_LINKS.map((link, index) => (
            <Link
              key={link.id}
              to={link.path}
              className={`flex items-center space-x-3 rounded-lg px-3 py-2 transition-colors ${
                activeLink === index
                  ? "bg-green-500 text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
              onClick={() => setActiveLink(index)}
            >
              <span className={activeLink === index ? "text-white" : "text-gray-400"}>{link.icon}</span>
              {!isCollapsed && <span className="text-sm">{link.name}</span>}
            </Link>
          ))}
        </nav>
        <div className="mt-auto p-4">
          <button className="w-full flex items-center justify-center space-x-2 bg-yellow-500 text-gray-900 rounded-lg py-2 px-4 hover:bg-yellow-600 transition-colors duration-200">
            <QuestionMarkCircleIcon className="h-5 w-5" />
            {!isCollapsed && <span className="font-medium">Need Help?</span>}
          </button>
          <div className={`mt-4 flex items-center space-x-3 ${isCollapsed ? "hidden" : ""}`}>
            <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center">
              <span className="text-sm font-medium text-white">JD</span>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">John Doe</p>
              <p className="text-xs leading-none text-gray-400">john@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}