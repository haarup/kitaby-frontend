import React from 'react';

// مكون للزر
const Button = ({ className, type = "button", children, ...props }) => (
  <button
    className={`p-button p-component border inline-flex items-center justify-center rounded text-sm font-bold focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 relative disabled:cursor-not-allowed ${className}`}
    type={type}
    {...props}
  >
    {children}
  </button>
);

// مكون للأيقونات
const Icon = ({ className, svgPath, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    aria-hidden="true"
    className={`w-6 h-6 ${className}`}
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d={svgPath}></path>
  </svg>
);

// مكون لاختيار العمود
const ColumnToggler = () => (
  <div className="column-toggler">
    <Button
      className="bg-transparent border-transparent h-9 px-1.5 text-gray-600 dark:text-gray-400 hover:bg-gray-700/5 dark:hover:bg-gray-950"
      aria-label="Columns Dropdown"
    >
      <Icon svgPath="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
      <Icon svgPath="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
    </Button>
  </div>
);

// المكون الرئيسي
const Toolbar = () => (
  <div className="flex flex-col md:flex-row md:items-center py-3 bg-gray-700/25 border-b border-gray-700 dark:border-gray-700">
    <div className="flex items-center flex-1">
      <div className="md:ml-3">
        <Button className="bg-transparent border-transparent h-9 px-3 text-gray-600 dark:text-gray-400 hover:bg-gray-700/5 dark:hover:bg-gray-950">
          <span className="flex items-center gap-1">
            <Icon svgPath="M9.999 6a1 1 0 0 1-.883.993L8.999 7h-6a1 1 0 0 1-.117-1.993L2.999 5h6a1 1 0 0 1 1 1Z" />
          </span>
        </Button>
      </div>
    </div>
    <div className="h-9 ml-auto flex items-center pr-2 md:pr-3">
      <ColumnToggler />
      <Button className="bg-transparent border-transparent h-9 px-1.5 text-gray-600 dark:text-gray-400 hover:bg-gray-700/5 dark:hover:bg-gray-950">
        <Icon svgPath="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
      </Button>
    </div>
  </div>
);

export default Toolbar;
