const HaderTable = () => {
  return (
    <div
      className="flex flex-col md:flex-row md:items-center py-3 border-b border-gray-200 dark:border-gray-700"
      loading="false"
    >
      <div className="flex items-center flex-1">
        <div className="md:ml-3">
          <div>
            <span>
              <button
                className="p-button p-component border inline-flex items-center justify-center appearance-none cursor-pointer rounded text-sm font-bold focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 relative disabled:cursor-not-allowed bg-transparent border-transparent h-9 px-3 text-gray-600 dark:text-gray-400 hover:enabled:bg-gray-700/5 dark:hover:enabled:bg-gray-950 -ml-1"
                type="button"
              >
                <span className="flex items-center gap-1">
                  <div className="group inline-flex shrink-0 items-center gap-2 focus:outline-none pointer-events-none">
                    <span className="relative inline-flex h-4 w-4 items-center justify-center rounded border border-gray-950/20 bg-white text-white ring-offset-2 group-data-[state=checked]:border-primary-500 group-data-[state=indeterminate]:border-primary-500 group-data-[state=checked]:bg-primary-500 group-data-[state=indeterminate]:bg-primary-500 group-data-[focus=true]:ring-2 group-data-[focus=true]:ring-primary-500 dark:border-gray-600 dark:bg-gray-900 group-data-[focus]:dark:ring-offset-gray-950">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 12 12"
                      >
                        <g fill="currentColor" fillRule="nonzero">
                          <path
                            className="group-data-[state=checked]:opacity-0 group-data-[state=indeterminate]:opacity-100 group-data-[state=unchecked]:opacity-0"
                            d="M9.999 6a1 1 0 0 1-.883.993L8.999 7h-6a1 1 0 0 1-.117-1.993L2.999 5h6a1 1 0 0 1 1 1Z"
                          />
                          <path
                            className="group-data-[state=checked]:opacity-100 group-data-[state=indeterminate]:opacity-0 group-data-[state=unchecked]:opacity-0"
                            d="M3.708 5.293a1 1 0 1 0-1.415 1.416l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.416L5.001 6.587 3.708 5.293Z"
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </span>
                {/**/}
              </button>
            </span>
          </div>
        </div>
        <div className="h-9 ml-auto flex items-center pr-2 md:pr-3">
          <div className="hidden md:flex px-2"></div>
          <div className="column-toggler">
            <div>
              <span>
                <button
                  className="p-button p-component border text-left appearance-none cursor-pointer rounded text-sm font-bold focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 relative disabled:cursor-not-allowed inline-flex items-center justify-center bg-transparent border-transparent h-9 px-1.5 text-gray-600 dark:text-gray-400 hover:[&:not(:disabled)]:bg-gray-700/5 dark:hover:[&:not(:disabled)]:bg-gray-950"
                  type="button"
                  aria-label="Columns Dropdown"
                  data-pc-name="button"
                  data-pc-section="root"
                  id="nova-ui-dropdown-button-9"
                  aria-expanded="false"
                  aria-haspopup="true"
                  aria-controls="nova-ui-dropdown-menu-10"
                >
                  <span className="flex items-center gap-1">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                        />
                      </svg>
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </span>
                </button>
              </span>
            </div>
          </div>
          <div>
            <span>
              <button
                className="p-button p-component border inline-flex items-center justify-center appearance-none cursor-pointer rounded text-sm font-bold focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 relative disabled:cursor-not-allowed bg-transparent border-transparent h-9 px-1.5 text-gray-600 dark:text-gray-400 hover:enabled:bg-gray-700/5 dark:hover:enabled:bg-gray-950"
                type="button"
                aria-label="Filter Dropdown"
                data-pc-name="button"
                data-pc-section="root"
                id="nova-ui-dropdown-button-5"
                aria-expanded="false"
                aria-haspopup="true"
                aria-controls="nova-ui-dropdown-menu-6"
              >
                <span className="flex items-center gap-1">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HaderTable;
