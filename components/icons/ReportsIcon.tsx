
import React from 'react';

const ReportsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM21 21l-5.197-5.197" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v4.5l3.75 2.25"/>
    </svg>
);

export default ReportsIcon;
