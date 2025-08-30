
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardView from './components/DashboardView';
import PropertiesView from './components/PropertiesView';
import TenantsView from './components/TenantsView';
import { PROPERTIES } from './constants';
import { TENANTS } from './constants';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView properties={PROPERTIES} tenants={TENANTS} setView={setCurrentView} />;
      case 'properties':
        return <PropertiesView properties={PROPERTIES} />;
      case 'tenants':
        return <TenantsView properties={PROPERTIES} tenants={TENANTS} />;
      default:
        return <DashboardView properties={PROPERTIES} tenants={TENANTS} setView={setCurrentView} />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-100 font-sans text-slate-900">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100 p-4 sm:p-6 lg:p-8">
          <div className="container mx-auto max-w-7xl">
            {renderView()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
