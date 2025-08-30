
import React from 'react';

interface CardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  footer?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, value, icon, footer }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="text-3xl font-bold text-slate-800 mt-1">{value}</p>
        </div>
        <div className="p-3 bg-sky-100 text-sky-600 rounded-lg">
          {icon}
        </div>
      </div>
      {footer && <div className="mt-4 text-sm text-slate-500">{footer}</div>}
    </div>
  );
};

export default Card;
