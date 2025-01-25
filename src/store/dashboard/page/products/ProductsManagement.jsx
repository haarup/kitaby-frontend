
const ProductsManagement = () => {
  return (
    <div className="p-4 md:py-8 space-y-8">
      <nav
        className="text-gray-500 font-semibold"
        aria-label="breadcrumb"
      >
        <ol>
          <li className="inline-block">
            <div className="flex items-center">
              <span>الصفحات</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={24}
                height={24}
                className="inline-block w-4 h-4 mx-2 text-gray-300 dark:text-gray-700"
                role="presentation"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </li>
          <li className="inline-block" aria-current="page">
            <div className="flex items-center">
              <span>المنتجات</span>
            </div>
          </li>
        </ol>
      </nav>
      <div className>
        <div className="relative">
          <div className="mb-6 resource-cards">
            <div className="grid md:grid-cols-12 gap-6">
              <div
                className="help-center-card-scoped md:col-span-12 h-full"
              >
                <div className="flex justify-end">
                  <button className="text-lg flex items-center border-slate-300 py-1 px-3 rounded-full border font-medium hover:bg-slate-300 transition ease-in-out delay-100">
                    <span className="px-2">مركز المساعدة</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div>
          </div>
          <h1
            className="font-normal text-xl md:text-xl mb-3 flex items-center mt-6"
          >
            <span>المنتجات</span>
          </h1>
          <div className="flex gap-2 mb-6">
            <div
              className="relative h-9 w-full md:w-1/3 md:shrink-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={20}
                height={24}
                className="inline-block absolute ml-2 text-gray-400"
                role="presentation"
                style={{ top: 4 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="appearance-none bg-white dark:bg-gray-800 shadow rounded-full h-8 w-full dark:focus:bg-gray-800 appearance-none rounded-full h-8 pl-10 w-full focus:bg-white focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 appearance-none bg-white dark:bg-gray-800 shadow rounded-full h-8 w-full dark:focus:bg-gray-800"
                placeholder="بحث"
                type="search"
                spellCheck="false"
                aria-label="بحث"
              />
            </div>
            <div className="inline-flex items-center gap-2 ml-auto">
              <div className="shrink-0">
                <a
                  size="md"
                  className="shrink-0 h-9 px-4 focus:outline-none ring-primary-200 dark:ring-gray-600 focus:ring text-white dark:text-gray-800 inline-flex items-center font-bold shadow rounded focus:outline-none ring-primary-200 dark:ring-gray-600 focus:ring bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white dark:text-gray-800 inline-flex items-center font-bold px-4 h-9 text-sm shrink-0 h-9 px-4 focus:outline-none ring-primary-200 dark:ring-gray-600 focus:ring text-white dark:text-gray-800 inline-flex items-center font-bold"
                  href="/resources/products/new"
                >
                  <span className="hidden md:inline-block">إنشاء منتج</span>
                  <span className="inline-block md:hidden">إنشاء</span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow">
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
                        data-pc-name="button"
                        data-pc-section="root"
                        id="nova-ui-dropdown-button-7"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-controls="nova-ui-dropdown-menu-8"
                      >
                        <span className="flex items-center gap-1">
                          <div
                            tabIndex={-1}
                            className="group inline-flex shrink-0 items-center gap-2 focus:outline-none pointer-events-none"
                            role="checkbox"
                            aria-label="تحديد هذه الصفحة"
                            aria-disabled="false"
                            data-focus="false"
                            data-state="unchecked"
                          >
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
                          id="nova-ui-dropdown-button-13"
                          aria-expanded="false"
                          aria-haspopup="true"
                          aria-controls="nova-ui-dropdown-menu-14"
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
            <div className="relative">
              <div className="overflow-hidden overflow-x-auto relative">
                <table
                  className="w-full divide-y divide-gray-100 dark:divide-gray-700"
                  data-testid="resource-table"
                >
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="td-fit o1-uppercase text-xxs text-gray-500 o1-tracking-wide o1-pl-5 o1-pr-2 o1-py-2">
                        <span className="o1-sr-only">Selected Resources</span>
                      </th>
                      <th className="text-left o1-px-2 o1-whitespace-nowrap o1-uppercase text-gray-500 text-xxs o1-tracking-wide o1-py-2">
                        <span>صور المنتج</span>
                      </th>
                      <th className="text-left o1-px-2 o1-whitespace-nowrap o1-uppercase text-gray-500 text-xxs o1-tracking-wide o1-py-2">
                        <span>اسم المنتج</span>
                      </th>
                      <th className="text-center o1-px-2 o1-whitespace-nowrap o1-uppercase text-gray-500 text-xxs o1-tracking-wide o1-py-2">
                        <span>اقسام المنتج</span>
                      </th>
                      <th className="text-center o1-px-2 o1-whitespace-nowrap o1-uppercase text-gray-500 text-xxs o1-tracking-wide o1-py-2">
                        <span>متوفر حاليا في المتجر؟</span>
                      </th>
                      <th className="text-left o1-px-2 o1-whitespace-nowrap o1-uppercase text-gray-500 text-xxs o1-tracking-wide o1-py-2">
                        <span>الكمية</span>
                      </th>
                      <th className="text-center o1-px-2 o1-whitespace-nowrap o1-uppercase text-gray-500 text-xxs o1-tracking-wide o1-py-2">
                        <span>توصيل مجاني؟</span>
                      </th>
                      <th className="text-center o1-px-2 o1-whitespace-nowrap o1-uppercase text-gray-500 text-xxs o1-tracking-wide o1-py-2">
                        <span>السماح بالتقييم والتعليق على المنتج؟</span>
                      </th>
                      <th className="text-left o1-px-2 o1-whitespace-nowrap o1-uppercase text-gray-500 text-xxs o1-tracking-wide o1-py-2">
                        <button
                          type="button"
                          className="cursor-pointer inline-flex items-center focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 rounded"
                          aria-sort="none"
                        >
                          <span className="inline-flex font-sans font-bold uppercase text-xxs tracking-wide text-gray-500">
                            الطلبات
                          </span>
                          <svg
                            className="ml-2 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width={8}
                            height={14}
                            viewBox="0 0 8 14"
                          >
                            <path
                              className="fill-gray-300 dark:fill-gray-500"
                              d="M1.70710678 4.70710678c-.39052429.39052429-1.02368927.39052429-1.41421356 0-.3905243-.39052429-.3905243-1.02368927 0-1.41421356l3-3c.39052429-.3905243 1.02368927-.3905243 1.41421356 0l3 3c.39052429.39052429.39052429 1.02368927 0 1.41421356-.39052429.39052429-1.02368927.39052429-1.41421356 0L4 2.41421356 1.70710678 4.70710678z"
                            />
                            <path
                              className="fill-gray-300 dark:fill-gray-500"
                              d="M6.29289322 9.29289322c.39052429-.39052429 1.02368927-.39052429 1.41421356 0 .39052429.39052429.39052429 1.02368928 0 1.41421358l-3 3c-.39052429.3905243-1.02368927.3905243-1.41421356 0l-3-3c-.3905243-.3905243-.3905243-1.02368929 0-1.41421358.3905243-.39052429 1.02368927-.39052429 1.41421356 0L4 11.5857864l2.29289322-2.29289318z"
                            />
                          </svg>
                        </button>
                      </th>
                      <th className="uppercase text-xxs tracking-wide px-2 py-2">
                        <span className="sr-only">Controls</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    draggable="tr"
                    className="o1-divide-y o1-divide-gray-100 dark:o1-divide-gray-700"
                  >
                    <tr className="group">
                      <td className="o1-py-2 o1-border-t border-gray-100 dark:border-gray-700 o1-px-2 o1-cursor-pointer td-fit o1-pl-5 o1-pr-5 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                        <div className="o1-flex o1-items-center">
                          <input
                            type="checkbox"
                            className="checkbox"
                            aria-label="Select Resource فوضة المجتمع"
                            data-testid="products-items-0-checkbox"
                          />
                          <div className="o1-flex o1-items-center o1-ml-4">
                            <div className="o1-flex o1-flex-col">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={12}
                                height={12}
                                className="fill-current outline-none o1-cursor-pointer text-gray-400 hover:text-primary-400 active:text-primary-500 v-popper--has-tooltip"
                              >
                                <path d="M13 5.41V21a1 1 0 0 1-2 0V5.41l-5.3 5.3a1 1 0 1 1-1.4-1.42l7-7a1 1 0 0 1 1.4 0l7 7a1 1 0 1 1-1.4 1.42L13 5.4z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={12}
                                height={12}
                                className="fill-current outline-none o1-cursor-pointer text-gray-400 hover:text-primary-400 active:text-primary-500 v-popper--has-tooltip"
                              >
                                <path d="M11 18.59V3a1 1 0 0 1 2 0v15.59l5.3-5.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 0 1 1.4-1.42l5.3 5.3z" />
                              </svg>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width={22}
                              height={22}
                              className="ml-2 fill-current handle o1-cursor-move text-gray-400 hover:text-primary-400 active:text-primary-500"
                              style={{ flexShrink: 0, minWidth: 22, width: 22 }}
                            >
                              <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            </svg>
                          </div>
                        </div>
                      </td>
                      <td className="o1-px-2 o1-py-2 o1-whitespace-nowrap o1-cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                        <div className="text-left" >
                          <img
                            src="https://rozenama.s3.amazonaws.com/products-images/2907/conversions/حجر-السعادة-thumb.jpg"
                            className="rounded-full w-8 h-8"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      </td>
                      <td className="o1-px-2 o1-py-2 o1-whitespace-nowrap o1-cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                        <div className="text-left" >
                          <span className="whitespace-nowrap">
                            فوضة المجتمع
                          </span>
                        </div>
                      </td>
                      <td className="o1-px-2 o1-py-2 o1-whitespace-nowrap o1-cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                        <div className="text-center">
                          <div>
                            <span>
                              <button
                                className="p-button p-component border inline-flex items-center justify-center appearance-none cursor-pointer rounded text-sm font-bold focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 relative disabled:cursor-not-allowed border-transparent h-9 px-3 text-primary-500 hover:enabled:text-primary-400"
                                type="button"
                                data-pc-name="button"
                                data-pc-section="root"
                                id="nova-ui-dropdown-button-9"
                                aria-expanded="false"
                                aria-haspopup="true"
                                aria-controls="nova-ui-dropdown-menu-10"
                              >
                                <span className="flex items-center gap-1">
                                  عرض
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="o1-px-2 o1-py-2 o1-whitespace-nowrap o1-cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                        <label
                          data-v-0f07ab44
                          className="container nova-switcher text-center"
                        >
                          <input
                            data-v-0f07ab44
                            className="input"
                            type="checkbox"
                          />
                          <span data-v-0f07ab44 className="switch" />
                          <span data-v-0f07ab44 className="label" />
                        </label>
                      </td>
                      <td className="o1-px-2 o1-py-2 o1-whitespace-nowrap o1-cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                        <div className="text-left">
                          <span className="whitespace-nowrap">غير محدود</span>
                        </div>
                      </td>
                      <td className="o1-px-2 o1-py-2 o1-whitespace-nowrap o1-cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                        <label
                          data-v-0f07ab44
                          className="container nova-switcher text-center"
                        >
                          <input
                            data-v-0f07ab44
                            className="input"
                            type="checkbox"
                          />
                          <span data-v-0f07ab44 className="switch" />
                          <span data-v-0f07ab44 className="label" />
                        </label>
                      </td>
                      <td className="o1-px-2 o1-py-2 o1-whitespace-nowrap o1-cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                        <div className="text-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width={24}
                            height={24}
                            className="inline-block text-red-500"
                            role="presentation"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </td>
                      <td className="o1-px-2 o1-py-2 o1-whitespace-nowrap o1-cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                        <div className="text-left">
                          <span className="whitespace-nowrap">0</span>
                        </div>
                      </td>
                      <td className="o1-py-2 o1-cursor-pointer o1-px-2 td-fit o1-text-right o1-align-middle dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                        <div className="o1-flex o1-items-center o1-justify-end o1-space-x-0 text-gray-400">
                          <div>
                            <div>
                              <span>
                                <button
                                  className="p-button p-component border inline-flex items-center justify-center appearance-none cursor-pointer rounded text-sm font-bold focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 relative disabled:cursor-not-allowed bg-transparent border-transparent text-gray-500 dark:text-gray-400 hover:enabled:text-primary-500 h-9 w-9"
                                  type="button"
                                  data-pc-name="button"
                                  data-pc-section="root"
                                  id="nova-ui-dropdown-button-11"
                                  aria-expanded="false"
                                  aria-haspopup="true"
                                  aria-controls="nova-ui-dropdown-menu-12"
                                >
                                  <span className="flex items-center gap-1">
                                    {/**/}
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
                                          d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                        />
                                      </svg>
                                    </span>
                                    {/**/}
                                  </span>
                                  {/**/}
                                </button>
                              </span>
                            </div>
                          </div>
                          <a
                            disabled="false"
                            aria-label="عرض"
                            className="toolbar-button hover:o1-text-primary-500 o1-px-2 disabled:o1-opacity-50 disabled:o1-pointer-events-none v-popper--has-tooltip"
                            href="/resources/products/939"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              width={24}
                              height={24}
                              className="inline-block"
                              role="presentation"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </a>
                          <a
                            disabled="false"
                            aria-label="تحرير"
                            className="toolbar-button hover:o1-text-primary-500 o1-px-2 disabled:o1-opacity-50 disabled:o1-pointer-events-none v-popper--has-tooltip"
                            href="/resources/products/939/edit"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              width={24}
                              height={24}
                              className="inline-block"
                              role="presentation"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </a>
                          <button
                            aria-label="حذف"
                            data-testid="products-items-0-delete-button"
                            className="toolbar-button hover:o1-text-primary-500 o1-px-2 disabled:o1-opacity-50 disabled:o1-pointer-events-none v-popper--has-tooltip"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              width={24}
                              height={24}
                              className="inline-block"
                              role="presentation"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700">
                <div className="rounded-b-lg">
                  <nav className="flex justify-between items-center">
                    <button
                      disabled
                      className="text-xs font-bold py-3 px-4 focus:outline-none rounded-bl-lg focus:ring focus:ring-inset text-gray-300 dark:text-gray-600"
                      rel="prev"
                    >
                      السابق
                    </button>
                    <span className="text-xs px-4">1-1 من 1</span>
                    <button
                      disabled
                      className="text-xs font-bold py-3 px-4 focus:outline-none rounded-br-lg focus:ring focus:ring-inset text-gray-300 dark:text-gray-600"
                      rel="next"
                    >
                      التالي
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/**/}
        </div>
      </div>
      <div className="mt-8 leading-normal text-xs text-gray-500 space-y-1">
        <div className="text-center"></div>
      </div>
    </div>
  );
};

export default ProductsManagement;
