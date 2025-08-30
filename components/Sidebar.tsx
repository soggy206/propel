
import React from 'react';
import { View } from '../types';
import DashboardIcon from './icons/DashboardIcon';
import PropertiesIcon from './icons/PropertiesIcon';
import TenantsIcon from './icons/TenantsIcon';
import MaintenanceIcon from './icons/MaintenanceIcon';
import ReportsIcon from './icons/ReportsIcon';
import SparklesIcon from './icons/SparklesIcon';

interface SidebarProps {
  currentView: View;
  setCurrentView: (view: View) => void;
}

const NavItem: React.FC<{
  viewName: View;
  label: string;
  icon: React.ReactNode;
  currentView: View;
  onClick: (view: View) => void;
  disabled?: boolean;
}> = ({ viewName, label, icon, currentView, onClick, disabled }) => {
  const isActive = currentView === viewName;
  const baseClasses = 'flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200';
  const activeClasses = 'bg-sky-500 text-white shadow-md';
  const inactiveClasses = 'text-slate-500 hover:bg-sky-100 hover:text-sky-700';
  const disabledClasses = 'text-slate-400 cursor-not-allowed';

  const handleClick = () => {
    if (!disabled) {
      onClick(viewName);
    }
  };

  return (
    <li>
      <button
        onClick={handleClick}
        className={`${baseClasses} w-full text-left ${
          disabled ? disabledClasses : isActive ? activeClasses : inactiveClasses
        }`}
        disabled={disabled}
      >
        {icon}
        <span className="ml-3">{label}</span>
        {disabled && <span className="ml-auto text-xs font-semibold bg-slate-200 text-slate-500 px-2 py-0.5 rounded-full">Soon</span>}
      </button>
    </li>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView }) => {
  const navItems = [
    { viewName: 'dashboard', label: 'Dashboard', icon: <DashboardIcon className="w-5 h-5" /> },
    { viewName: 'properties', label: 'Properties', icon: <PropertiesIcon className="w-5 h-5" /> },
    { viewName: 'tenants', label: 'Tenants', icon: <TenantsIcon className="w-5 h-5" /> },
    { viewName: 'maintenance', label: 'Maintenance', icon: <MaintenanceIcon className="w-5 h-5" />, disabled: true },
    { viewName: 'reports', label: 'Reports', icon: <ReportsIcon className="w-5 h-5" />, disabled: true },
  ];

  return (
    <aside className="w-64 flex-shrink-0 bg-white border-r border-slate-200 flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-slate-200">
        <SparklesIcon className="w-7 h-7 text-sky-500" />
        <span className="ml-2 text-xl font-bold text-slate-800">Propel</span>
      </div>
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <NavItem
              key={item.viewName}
              viewName={item.viewName as View}
              label={item.label}
              icon={item.icon}
              currentView={currentView}
              onClick={setCurrentView}
              disabled={item.disabled}
            />
          ))}
        </ul>
      </nav>
      <div className="px-6 py-4 border-t border-slate-200 mt-auto">
        <p className="text-xs text-slate-400">&copy; 2024 Propel Inc.</p>
      </div>
    </aside>
  );
};

export default Sidebar;
