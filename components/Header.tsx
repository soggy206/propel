
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 flex-shrink-0">
      <div>
        <h1 className="text-lg font-semibold text-slate-800">Welcome, Manager!</h1>
        <p className="text-sm text-slate-500">Here's your property overview for today.</p>
      </div>
      <div className="flex items-center space-x-4">
        {/* Placeholder for search, notifications, etc. */}
        <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </span>

            <input type="text" className="w-full py-2 pl-10 pr-4 text-slate-700 bg-slate-100 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Search" />
        </div>
        <div className="flex items-center">
          <img
            className="h-9 w-9 rounded-full object-cover"
            src="https://picsum.photos/seed/user/100/100"
            alt="User avatar"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-slate-700">Jane Doe</p>
            <p className="text-xs text-slate-500">Property Manager</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
