
import React from 'react';

const MaintenanceIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.47-2.47a.375.375 0 000-.53l-2.47-2.47M11.42 15.17L7.05 19.54a2.652 2.652 0 01-3.75 0V11.25A2.652 2.652 0 017.05 7.5l2.47 2.47a.375.375 0 00.53 0l2.47-2.47M3 11.25h.008v.008H3v-.008z" />
    </svg>
);

export default MaintenanceIcon;
