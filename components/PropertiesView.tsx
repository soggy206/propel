
import React from 'react';
import { Property, PropertyStatus } from '../types';

const getStatusBadgeClasses = (status: PropertyStatus) => {
  switch (status) {
    case PropertyStatus.Occupied:
      return 'bg-green-100 text-green-800';
    case PropertyStatus.Vacant:
      return 'bg-yellow-100 text-yellow-800';
    case PropertyStatus.UnderMaintenance:
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-slate-100 text-slate-800';
  }
};

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => (
  <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
    <img src={property.imageUrl} alt={property.name} className="w-full h-48 object-cover" />
    <div className="p-5">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-bold text-slate-800">{property.name}</h3>
        <span
          className={`px-2.5 py-1 text-xs font-semibold rounded-full ${getStatusBadgeClasses(property.status)}`}
        >
          {property.status}
        </span>
      </div>
      <p className="text-sm text-slate-500 mt-1">{property.address}</p>
      <div className="mt-4 flex justify-between items-center text-sm text-slate-600">
        <span className="font-medium">{property.type}</span>
        <div className="flex space-x-4">
          <span><strong>{property.units}</strong> units</span>
          <span><strong>{property.size.toLocaleString()}</strong> sqft</span>
        </div>
      </div>
       <div className="mt-4 border-t pt-4">
            <p className="text-xs font-semibold text-slate-400 uppercase mb-2">Amenities</p>
            <div className="flex flex-wrap gap-2">
                {property.amenities.slice(0, 3).map(amenity => (
                    <span key={amenity} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md">{amenity}</span>
                ))}
                {property.amenities.length > 3 && <span className="text-slate-500 text-xs">+ {property.amenities.length-3} more</span>}
            </div>
        </div>
    </div>
  </div>
);


const PropertiesView: React.FC<{ properties: Property[] }> = ({ properties }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Properties</h1>
        <button className="bg-sky-500 text-white font-semibold px-4 py-2 rounded-lg shadow-sm hover:bg-sky-600 transition-colors">
          Add Property
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertiesView;
