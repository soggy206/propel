
import React from 'react';
import { Tenant, Property } from '../types';

const TenantsView: React.FC<{ tenants: Tenant[]; properties: Property[] }> = ({ tenants, properties }) => {
  const getPropertyName = (propertyId: string) => {
    return properties.find(p => p.id === propertyId)?.name || 'N/A';
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Tenants</h1>
        <button className="bg-sky-500 text-white font-semibold px-4 py-2 rounded-lg shadow-sm hover:bg-sky-600 transition-colors">
          Add Tenant
        </button>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-500">
            <thead className="text-xs text-slate-700 uppercase bg-slate-50">
              <tr>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Property</th>
                <th scope="col" className="px-6 py-3">Unit</th>
                <th scope="col" className="px-6 py-3">Contact</th>
                <th scope="col" className="px-6 py-3">Lease End Date</th>
                <th scope="col" className="px-6 py-3"><span className="sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody>
              {tenants.map((tenant) => (
                <tr key={tenant.id} className="bg-white border-b last:border-b-0 hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">
                    {tenant.name}
                  </td>
                  <td className="px-6 py-4">{getPropertyName(tenant.propertyId)}</td>
                  <td className="px-6 py-4">{tenant.unit}</td>
                  <td className="px-6 py-4">
                    <div>{tenant.email}</div>
                    <div className="text-slate-400">{tenant.phone}</div>
                  </td>
                  <td className="px-6 py-4">
                    {new Date(tenant.leaseEndDate).toLocaleDateString(undefined, {
                      year: 'numeric', month: 'long', day: 'numeric'
                    })}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-sky-600 hover:underline">Edit</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TenantsView;
