
export enum PropertyType {
  Residential = 'Residential',
  Commercial = 'Commercial',
  Industrial = 'Industrial',
  MixedUse = 'Mixed-Use',
}

export enum PropertyStatus {
  Occupied = 'Occupied',
  Vacant = 'Vacant',
  UnderMaintenance = 'Under Maintenance',
}

export interface Property {
  id: string;
  name: string;
  address: string;
  type: PropertyType;
  size: number; // in sqft
  amenities: string[];
  imageUrl: string;
  status: PropertyStatus;
  units: number;
}

export interface Tenant {
  id: string;
  name: string;
  email: string;
  phone: string;
  propertyId: string;
  unit: string;
  leaseEndDate: string;
  moveInDate: string;
}

export type View = 'dashboard' | 'properties' | 'tenants' | 'maintenance' | 'reports';
