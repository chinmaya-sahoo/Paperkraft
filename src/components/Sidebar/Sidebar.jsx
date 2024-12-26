import React, { useState } from "react";
import {
  FaBars,
  FaTachometerAlt,
  FaUser,
  FaEnvelope,
  FaChartLine,
  FaFolder,
  FaShoppingCart,
  FaHeart,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Toggle collapse state
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`h-screen bg-gray-900 text-gray-100 transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo & Toggle */}
      <div className={`flex items-center p-4 ${isCollapsed ? "justify-center" : "justify-between" } `} >
        {!isCollapsed && <h2 className="text-lg font-bold">CodingLab</h2>}
        <button
          onClick={toggleSidebar}
          className="text-gray-300 hover:text-gray-100 focus:outline-none"
        >
          <FaBars size={20} />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="mt-4">
        <ul>
          <NavItem
            icon={<FaTachometerAlt size={20} />}
            label="Dashboard"
            collapsed={isCollapsed}
          />
          <NavItem
            icon={<FaUser size={20} />}
            label="User"
            collapsed={isCollapsed}
          />
          <NavItem
            icon={<FaEnvelope size={20} />}
            label="Messages"
            collapsed={isCollapsed}
          />
          <NavItem
            icon={<FaChartLine size={20} />}
            label="Analytics"
            collapsed={isCollapsed}
          />
          <NavItem
            icon={<FaFolder size={20} />}
            label="File Manager"
            collapsed={isCollapsed}
          />
          <NavItem
            icon={<FaShoppingCart size={20} />}
            label="Order"
            collapsed={isCollapsed}
          />
          <NavItem
            icon={<FaHeart size={20} />}
            label="Saved"
            collapsed={isCollapsed}
          />
          <NavItem
            icon={<FaCog size={20} />}
            label="Settings"
            collapsed={isCollapsed}
          />
        </ul>
      </nav>

      {/* Profile Section */}
      <div className={`absolute bottom-4 flex items-center p-5 w-full`}>
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="rounded-full w-10 h-10"
        />
        {!isCollapsed && (
          <div className="ml-3">
            <p className="text-sm font-semibold">Chinmaya Sahoo</p>
            <p className="text-xs text-gray-400">Web Designer</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Navigation Item Component
const NavItem = ({ icon, label, collapsed }) => {
  
  return (
    <li>
      <a
        href="#"
        className={`flex items-center p-3 hover:bg-gray-700 rounded-md transition ${ collapsed ? "justify-center" : "" } `}
      >
        {icon}
        {!collapsed && <span className="ml-4">{label}</span>}
      </a>
    </li>
  );
};

export default Sidebar;
