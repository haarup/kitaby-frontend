import HaderTable from "../../components/table/HaderTable";
import PaginationTable from "../../components/table/PaginationTable";

const CategoryMangement = () => {
  return (
    <div className="p-4 md:py-8 md:px-12 lg:ml-60 space-y-8">
      <nav className="text-gray-500 font-semibold" aria-label="breadcrumb">
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
          <li className="inline-block">
            <div className="flex items-center">
              <span>اقسام المتجر</span>
              {/**/}
            </div>
          </li>
        </ol>
      </nav>
      <div className>
        <div className="relative">
          <div className="mb-6 resource-cards">
            {/**/}
            <div className="grid md:grid-cols-12 gap-6">
              <div className="help-center-card-scoped md:col-span-12 h-full">
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
          {/**/}
        </div>
        <div className="relative">
          <div></div>
          <h1 className="font-normal text-xl md:text-xl mb-3 flex items-center mt-6">
            <span>اقسام المتجر</span>
          </h1>
          <div className="flex gap-2 mb-6">
            <div className="relative h-9 w-full md:w-1/3 md:shrink-0">
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
                  href="/resources/categories/new"
                >
                  <span className="hidden md:inline-block">إنشاء قسم</span>
                  <span className="inline-block md:hidden">إنشاء</span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow">
            <HaderTable />
            <div className="relative">
              <div className="overflow-hidden overflow-x-auto relative">
                <table
                  className="w-full divide-y divide-gray-100 dark:divide-gray-700"
                  data-testid="resource-table"
                >
                  {/* thader */}
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="td-fit o1-uppercase text-xxs text-gray-500 o1-tracking-wide o1-pl-5 o1-pr-2 o1-py-2">
                        <span className="o1-sr-only">Selected Resources</span>
                      </th>
                      <th className="text-left o1-px-2 o1-whitespace-nowrap o1-uppercase text-gray-500 text-xxs o1-tracking-wide o1-py-2">
                        <span>اسم القسم</span>
                      </th>
                      <th className="text-left o1-px-2 o1-whitespace-nowrap o1-uppercase text-gray-500 text-xxs o1-tracking-wide o1-py-2">
                        <span>المنتجات</span>
                      </th>
                      <th className="text-center o1-px-2 o1-whitespace-nowrap o1-uppercase text-gray-500 text-xxs o1-tracking-wide o1-py-2">
                        <span>فعال</span>
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
                            aria-label="Select Resource روايات"
                            data-testid="categories-items-0-checkbox"
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
                        <div className="text-left">
                          <span className="whitespace-nowrap">روايات</span>
                        </div>
                      </td>
                      <td className="o1-px-2 o1-py-2 o1-whitespace-nowrap o1-cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                        <div className="text-left">
                          <span className="whitespace-nowrap">1</span>
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
                      <td className="o1-py-2 o1-cursor-pointer o1-px-2 td-fit o1-text-right o1-align-middle dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                        <div className="o1-flex o1-items-center o1-justify-end o1-space-x-0 text-gray-400">
                          <a
                            disabled="false"
                            aria-label="عرض"
                            className="toolbar-button hover:o1-text-primary-500 o1-px-2 disabled:o1-opacity-50 disabled:o1-pointer-events-none v-popper--has-tooltip"
                            href="/resources/categories/3334"
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
                            href="/resources/categories/3334/edit"
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
                            data-testid="categories-items-0-delete-button"
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
                          {/**/}
                        </div>
                      </td>
                    </tr>
                    {/**/}
                  </tbody>
                </table>
              </div>
              {/* footer */}
              <PaginationTable />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 leading-normal text-xs text-gray-500 space-y-1">
        <div className="text-center"></div>
      </div>
    </div>
  );
};

export default CategoryMangement;
