import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/navigation/SideBar';
import { Outlet } from 'react-router-dom';

export default function UserBoard() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarCollapsed(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        setIsCollapsed={setIsSidebarCollapsed}
      />
      <div className={`flex-1 transition-all duration-300 ${isSidebarCollapsed ? "ml-16" : "ml-64"}`}>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}