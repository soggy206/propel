
import React from 'react';

const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-7.19c0-.861.365-1.663.97-2.243zM10.5 15.065a1.5 1.5 0 00-1.5-1.5h- запад8.75a.75.75 0 00-.75.75v7.19c0 .414.336.75.75.75a6.75 6.75 0 006.75-6.75v-1.19z"
      clipRule="evenodd"
    />
    <path d="M12.75 3.75a.75.75 0 00-1.5 0v2.25a.75.75 0 001.5 0V3.75zM6 9a.75.75 0 000 1.5h2.25a.75.75 0 000-1.5H6zM18 15a.75.75 0 000 1.5h2.25a.75.75 0 000-1.5H18zM15.75 6.75a.75.75 0 00-1.5 0v2.25a.75.75 0 001.5 0V6.75z" />
  </svg>
);

export default SparklesIcon;
