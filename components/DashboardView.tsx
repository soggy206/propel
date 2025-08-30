import React from 'react';
import { Property, Tenant, PropertyStatus, View } from '../types';
import Card from './Card';
import BuildingIcon from './icons/PropertiesIcon';
import UserGroupIcon from './icons/TenantsIcon';
// Fix: Import MaintenanceIcon to resolve 'Cannot find name' error.
import MaintenanceIcon from './icons/MaintenanceIcon';
import { TENANTS, PROPERTIES } from '../constants';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface DashboardViewProps {
  properties: Property[];
  tenants: Tenant[];
  setView: (view: View) => void;
}

const getStatusColor = (status: PropertyStatus) => {
    switch (status) {
        case PropertyStatus.Occupied: return 'text-green-600 bg-green-100';
        case PropertyStatus.Vacant: return 'text-amber-600 bg-amber-100';
        case PropertyStatus.UnderMaintenance: return 'text-blue-600 bg-blue-100';
        default: return 'text-slate-600 bg-slate-100';
    }
};

const DashboardView: React.FC<DashboardViewProps> = ({ properties, tenants, setView }) => {
  const totalProperties = properties.length;
  const occupiedUnits = properties.filter(p => p.status === PropertyStatus.Occupied).length;
  const totalUnits = properties.reduce((sum, p) => sum + p.units, 0);
  const occupancyRate = totalProperties > 0 ? ((occupiedUnits / totalProperties) * 100).toFixed(0) : 0;
  const totalTenants = tenants.length;
  
  const propertyStatusData = [
    { name: 'Occupied', value: properties.filter(p => p.status === PropertyStatus.Occupied).length },
    { name: 'Vacant', value: properties.filter(p => p.status === PropertyStatus.Vacant).length },
    { name: 'Maintenance', value: properties.filter(p => p.status === PropertyStatus.UnderMaintenance).length },
  ];

  const COLORS = ['#10B981', '#F59E0B', '#3B82F6'];

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          title="Total Properties"
          value={totalProperties}
          icon={<BuildingIcon className="w-6 h-6" />}
          footer={<div className="text-green-500 font-medium">All systems normal</div>}
        />
        <Card
          title="Total Tenants"
          value={totalTenants}
          icon={<UserGroupIcon className="w-6 h-6" />}
          footer={<div className="text-slate-500">{`${totalUnits} total units`}</div>}
        />
         <Card
          title="Occupancy Rate"
          value={`${occupancyRate}%`}
          icon={<div className="font-bold text-lg">%</div>}
          footer={<div className="text-slate-500">{`${occupiedUnits} of ${totalProperties} properties`}</div>}
        />
        <Card
          title="Issues"
          value="3"
          icon={<MaintenanceIcon className="w-6 h-6" />}
          footer={<div className="text-red-500 font-medium">1 Urgent</div>}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Leases */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Upcoming Lease Expirations</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-slate-500">
              <thead className="text-xs text-slate-700 uppercase bg-slate-50">
                <tr>
                  <th scope="col" className="px-6 py-3">Tenant</th>
                  <th scope="col" className="px-6 py-3">Property</th>
                  <th scope="col" className="px-6 py-3">Lease End Date</th>
                </tr>
              </thead>
              <tbody>
                {TENANTS.slice(0, 5).map(tenant => (
                  <tr key={tenant.id} className="bg-white border-b hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">{tenant.name}</td>
                    <td className="px-6 py-4">{PROPERTIES.find(p => p.id === tenant.propertyId)?.name}</td>
                    <td className="px-6 py-4">{new Date(tenant.leaseEndDate).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Property Status Chart */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-semibold mb-4 text-center">Property Status</h2>
          <div style={{ width: '100%', height: 250 }}>
             <ResponsiveContainer>
                <PieChart>
                    <Pie data={propertyStatusData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                        {propertyStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;