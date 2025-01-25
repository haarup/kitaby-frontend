import React from "react";

const Home = () => {
  return (
    <div className="p-4 md:py-8 md:px-12 lg:ml-60 space-y-8">
      <nav
        className="text-gray-500 font-semibold"
        aria-label="breadcrumb"
        dusk="breadcrumbs"
      >
        <ol>
          <li className="inline-block">
            <div className="flex items-center">
              <span>عام</span>
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
              <span>الرئيسية</span>
              {/**/}
            </div>
          </li>
        </ol>
      </nav>
      <div className>
        {/**/}
        <div className="relative space-y-3" dusk="dashboard-main">
          {/**/}
          {/**/}
          <div>
            <div>
              <button className="md:hidden h-8 py-3 mb-3 uppercase tracking-widest font-bold text-xs inline-flex items-center justify-center focus:outline-none focus:ring-primary-200 border-1 border-primary-500 focus:ring focus:ring-offset-4 focus:ring-offset-gray-100 dark:ring-gray-600 dark:focus:ring-offset-gray-900 rounded">
                <span>Hide Cards</span>
                <svg
                  className="shrink-0 transform ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width={10}
                  height={6}
                  viewBox="0 0 10 6"
                >
                  <path
                    className="fill-current"
                    d="M8.292893.292893c.390525-.390524 1.023689-.390524 1.414214 0 .390524.390525.390524 1.023689 0 1.414214l-4 4c-.390525.390524-1.023689.390524-1.414214 0l-4-4c-.390524-.390525-.390524-1.023689 0-1.414214.390525-.390524 1.023689-.390524 1.414214 0L5 3.585786 8.292893.292893z"
                  />
                </svg>
              </button>
              <div className="grid md:grid-cols-12 gap-6">
                <div
                  className="verify-email md:col-span-12 min-h-40 h-full"
                  resourcename
                  resourceid
                  lens
                >
                  <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow border-[#ffc107] border border-1">
                    <div className="px-3 py-3 flex gap-2">
                      <div className="flex-none flex items-center px-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="#ffc107"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div flex="grow">
                        <h1 className="text-xl text-gray-500 font-light mb-3">
                          يرجى تأكيد عنوان البريد الالكتروني{" "}
                          <strong>nody.iq@gmail.com</strong> للوصول لكافة ميزات
                          و خدمات المنصة
                        </h1>
                        <div className="!w-max text-center text-lg border transition duration-200 ease-in-out border-1 rounded border-[#e7787a] text-[#e7787a] px-2 hover:bg-[#e7787a] hover:text-white">
                          <a href="#">تأكيد</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow md:col-span-12 h-full"
                  resourcename
                  resourceid
                  lens
                >
                  <div className="px-3 py-3 flex gap-2">
                    <div className="flex-none flex items-center px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        transform="scale(-1, 1)"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                        />
                      </svg>
                    </div>
                    <div flex="grow flex flex-col">
                      <div>
                        <h1 className="text-3xl text-gray-500 font-light mb-3">
                          اهلا بك في لوحة التحكم بمتجرك !
                        </h1>
                      </div>
                      <div>
                        <p className="text-lg text-gray-500">
                          راح تكدر تستخدم النظام بأريحية اكثر من شاشة الحاسوب او
                          التابلت , و لا تنسى تضيف كل منتجاتك من قسم المنتجات
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow isolate px-6 py-4 md:col-span-3 min-h-40 h-full">
                  <div
                    className="absolute inset-0 z-30 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800"
                    style={{ display: "none" }}
                  >
                    <svg
                      className="mx-auto block text-gray-300"
                      viewBox="0 0 120 30"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      style={{ width: 30 }}
                    >
                      <circle cx={15} cy={15} r={15}>
                        <animate
                          attributeName="r"
                          from={15}
                          to={15}
                          begin="0s"
                          dur="0.8s"
                          values="15;9;15"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from={1}
                          to={1}
                          begin="0s"
                          dur="0.8s"
                          values="1;.5;1"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx={60} cy={15} r={9} fillOpacity="0.3">
                        <animate
                          attributeName="r"
                          from={9}
                          to={9}
                          begin="0s"
                          dur="0.8s"
                          values="9;15;9"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from="0.5"
                          to="0.5"
                          begin="0s"
                          dur="0.8s"
                          values=".5;1;.5"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx={105} cy={15} r={15}>
                        <animate
                          attributeName="r"
                          from={15}
                          to={15}
                          begin="0s"
                          dur="0.8s"
                          values="15;9;15"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from={1}
                          to={1}
                          begin="0s"
                          dur="0.8s"
                          values="1;.5;1"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>
                  </div>
                  <div className="h-6 flex items-center mb-4">
                    <h3 className="mr-3 leading-tight text-sm font-bold">
                      الارباح القادمة
                    </h3>
                    <div className="absolute right-0 bottom-0 p-2 z-20">
                      <span className="sr-only">
                        مجموع الربح من الطلبات التي حالتها قيد التوصيل او تم
                        التوصيل (يتم احتساب الربح من الفرق بين السعر الاصلي
                        للمنتج و سعر البيع)
                      </span>
                      <div className="v-popper v-popper--theme-Nova v-popper--theme-tooltip">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            width={20}
                            height={20}
                            className="inline-block cursor-pointer text-gray-400 dark:text-gray-500"
                            role="presentation"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    {/**/}
                  </div>
                  <div className="flex items-center mb-4 space-x-4">
                    <div className="rounded-lg bg-primary-500 text-white h-14 w-14 flex items-center justify-center">
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
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="flex items-center text-4xl" rounded="false">
                        <span className="v-popper--has-tooltip"> د.ع 0</span>
                        {/**/}
                      </p>
                      <div className>
                        <p className="flex items-center font-bold text-sm">
                          {/**/}
                          {/**/}
                          <span className="text-gray-400 font-semibold">
                            {/**/}
                            {/**/}
                            {/**/}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow isolate px-6 py-4 md:col-span-3 min-h-40 h-full">
                  <div
                    className="absolute inset-0 z-30 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800"
                    style={{ display: "none" }}
                  >
                    <svg
                      className="mx-auto block text-gray-300"
                      viewBox="0 0 120 30"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      style={{ width: 30 }}
                    >
                      <circle cx={15} cy={15} r={15}>
                        <animate
                          attributeName="r"
                          from={15}
                          to={15}
                          begin="0s"
                          dur="0.8s"
                          values="15;9;15"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from={1}
                          to={1}
                          begin="0s"
                          dur="0.8s"
                          values="1;.5;1"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx={60} cy={15} r={9} fillOpacity="0.3">
                        <animate
                          attributeName="r"
                          from={9}
                          to={9}
                          begin="0s"
                          dur="0.8s"
                          values="9;15;9"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from="0.5"
                          to="0.5"
                          begin="0s"
                          dur="0.8s"
                          values=".5;1;.5"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx={105} cy={15} r={15}>
                        <animate
                          attributeName="r"
                          from={15}
                          to={15}
                          begin="0s"
                          dur="0.8s"
                          values="15;9;15"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from={1}
                          to={1}
                          begin="0s"
                          dur="0.8s"
                          values="1;.5;1"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>
                  </div>
                  <div className="h-6 flex items-center mb-4">
                    <h3 className="mr-3 leading-tight text-sm font-bold">
                      الارباح المستلمة
                    </h3>
                    <div className="absolute right-0 bottom-0 p-2 z-20">
                      <span className="sr-only">
                        مجموع الفرق بين السعر الاصلي و سعر البيع لكل منتج في
                        الطلبات التي تم التحاسب عليها
                      </span>
                      <div className="v-popper v-popper--theme-Nova v-popper--theme-tooltip">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            width={20}
                            height={20}
                            className="inline-block cursor-pointer text-gray-400 dark:text-gray-500"
                            role="presentation"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    {/**/}
                  </div>
                  <div className="flex items-center mb-4 space-x-4">
                    <div className="rounded-lg bg-primary-500 text-white h-14 w-14 flex items-center justify-center">
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
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="flex items-center text-4xl" rounded="false">
                        <span className="v-popper--has-tooltip"> د.ع 0</span>
                        {/**/}
                      </p>
                      <div className>
                        <p className="flex items-center font-bold text-sm">
                          {/**/}
                          {/**/}
                          <span className="text-gray-400 font-semibold">
                            {/**/}
                            {/**/}
                            {/**/}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow isolate px-6 py-4 md:col-span-3 min-h-40 h-full">
                  <div
                    className="absolute inset-0 z-30 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800"
                    style={{ display: "none" }}
                  >
                    <svg
                      className="mx-auto block text-gray-300"
                      viewBox="0 0 120 30"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      style={{ width: 30 }}
                    >
                      <circle cx={15} cy={15} r={15}>
                        <animate
                          attributeName="r"
                          from={15}
                          to={15}
                          begin="0s"
                          dur="0.8s"
                          values="15;9;15"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from={1}
                          to={1}
                          begin="0s"
                          dur="0.8s"
                          values="1;.5;1"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx={60} cy={15} r={9} fillOpacity="0.3">
                        <animate
                          attributeName="r"
                          from={9}
                          to={9}
                          begin="0s"
                          dur="0.8s"
                          values="9;15;9"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from="0.5"
                          to="0.5"
                          begin="0s"
                          dur="0.8s"
                          values=".5;1;.5"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx={105} cy={15} r={15}>
                        <animate
                          attributeName="r"
                          from={15}
                          to={15}
                          begin="0s"
                          dur="0.8s"
                          values="15;9;15"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from={1}
                          to={1}
                          begin="0s"
                          dur="0.8s"
                          values="1;.5;1"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>
                  </div>
                  <div className="h-6 flex items-center mb-4">
                    <h3 className="mr-3 leading-tight text-sm font-bold">
                      المبيعات المعلقة
                    </h3>
                    <div className="absolute right-0 bottom-0 p-2 z-20">
                      <span className="sr-only">
                        مجموع قيمة سعر البيع للمنتجات في الطلبات التي حالتها قيد
                        التوصيل و تم التوصيل
                      </span>
                      <div className="v-popper v-popper--theme-Nova v-popper--theme-tooltip">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            width={20}
                            height={20}
                            className="inline-block cursor-pointer text-gray-400 dark:text-gray-500"
                            role="presentation"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    {/**/}
                  </div>
                  <div className="flex items-center mb-4 space-x-4">
                    <div className="rounded-lg bg-primary-500 text-white h-14 w-14 flex items-center justify-center">
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
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="flex items-center text-4xl" rounded="false">
                        <span className="v-popper--has-tooltip"> د.ع 0</span>
                        {/**/}
                      </p>
                      <div className>
                        <p className="flex items-center font-bold text-sm">
                          {/**/}
                          {/**/}
                          <span className="text-gray-400 font-semibold">
                            {/**/}
                            {/**/}
                            {/**/}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow isolate px-6 py-4 md:col-span-3 min-h-40 h-full">
                  <div
                    className="absolute inset-0 z-30 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800"
                    style={{ display: "none" }}
                  >
                    <svg
                      className="mx-auto block text-gray-300"
                      viewBox="0 0 120 30"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      style={{ width: 30 }}
                    >
                      <circle cx={15} cy={15} r={15}>
                        <animate
                          attributeName="r"
                          from={15}
                          to={15}
                          begin="0s"
                          dur="0.8s"
                          values="15;9;15"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from={1}
                          to={1}
                          begin="0s"
                          dur="0.8s"
                          values="1;.5;1"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx={60} cy={15} r={9} fillOpacity="0.3">
                        <animate
                          attributeName="r"
                          from={9}
                          to={9}
                          begin="0s"
                          dur="0.8s"
                          values="9;15;9"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from="0.5"
                          to="0.5"
                          begin="0s"
                          dur="0.8s"
                          values=".5;1;.5"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx={105} cy={15} r={15}>
                        <animate
                          attributeName="r"
                          from={15}
                          to={15}
                          begin="0s"
                          dur="0.8s"
                          values="15;9;15"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from={1}
                          to={1}
                          begin="0s"
                          dur="0.8s"
                          values="1;.5;1"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>
                  </div>
                  <div className="h-6 flex items-center mb-4">
                    <h3 className="mr-3 leading-tight text-sm font-bold">
                      المبيعات
                    </h3>
                    <div className="absolute right-0 bottom-0 p-2 z-20">
                      <span className="sr-only">
                        مجموع قيمة سعر البيع للمنتجات في الطلبات التي حالتها تم
                        التوصيل
                      </span>
                      <div className="v-popper v-popper--theme-Nova v-popper--theme-tooltip">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            width={20}
                            height={20}
                            className="inline-block cursor-pointer text-gray-400 dark:text-gray-500"
                            role="presentation"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    {/**/}
                  </div>
                  <div className="flex items-center mb-4 space-x-4">
                    <div className="rounded-lg bg-primary-500 text-white h-14 w-14 flex items-center justify-center">
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
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="flex items-center text-4xl" rounded="false">
                        <span className="v-popper--has-tooltip"> د.ع 0</span>
                        {/**/}
                      </p>
                      <div className>
                        <p className="flex items-center font-bold text-sm">
                          {/**/}
                          {/**/}
                          <span className="text-gray-400 font-semibold">
                            {/**/}
                            {/**/}
                            {/**/}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow isolate px-6 py-4 md:col-span-4 min-h-40 h-full">
                  <div
                    className="absolute inset-0 z-30 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800"
                    style={{ display: "none" }}
                  >
                    <svg
                      className="mx-auto block text-gray-300"
                      viewBox="0 0 120 30"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      style={{ width: 30 }}
                    >
                      <circle cx={15} cy={15} r={15}>
                        <animate
                          attributeName="r"
                          from={15}
                          to={15}
                          begin="0s"
                          dur="0.8s"
                          values="15;9;15"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from={1}
                          to={1}
                          begin="0s"
                          dur="0.8s"
                          values="1;.5;1"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx={60} cy={15} r={9} fillOpacity="0.3">
                        <animate
                          attributeName="r"
                          from={9}
                          to={9}
                          begin="0s"
                          dur="0.8s"
                          values="9;15;9"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from="0.5"
                          to="0.5"
                          begin="0s"
                          dur="0.8s"
                          values=".5;1;.5"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx={105} cy={15} r={15}>
                        <animate
                          attributeName="r"
                          from={15}
                          to={15}
                          begin="0s"
                          dur="0.8s"
                          values="15;9;15"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from={1}
                          to={1}
                          begin="0s"
                          dur="0.8s"
                          values="1;.5;1"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>
                  </div>
                  <div className="h-6 flex items-center mb-4">
                    <h3 className="mr-3 leading-tight text-sm font-bold">
                      عدد الزبائن
                    </h3>
                    {/**/}
                    <div className="flex relative ml-auto w-[6rem] shrink-0">
                      <select
                        aria-label="Select Ranges"
                        className="w-full block form-control form-select form-control-xxs form-select-bordered"
                      >
                        <option value={1}>خلال يوم</option>
                        <option value={7}>خلال اسبوع</option>
                        <option value={30}>خلال 30 يوم</option>
                        <option value={60}>خلال 60 يوم</option>
                        <option value={90}>خلال 90 يوم</option>
                        <option value={365}>خلال سنة</option>
                      </select>
                      <svg
                        className="shrink-0 pointer-events-none form-select-arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={6}
                        viewBox="0 0 10 6"
                      >
                        <path
                          className="fill-current"
                          d="M8.292893.292893c.390525-.390524 1.023689-.390524 1.414214 0 .390524.390525.390524 1.023689 0 1.414214l-4 4c-.390525.390524-1.023689.390524-1.414214 0l-4-4c-.390524-.390525-.390524-1.023689 0-1.414214.390525-.390524 1.023689-.390524 1.414214 0L5 3.585786 8.292893.292893z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center mb-4 space-x-4">
                    <div className="rounded-lg bg-primary-500 text-white h-14 w-14 flex items-center justify-center">
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
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="flex items-center text-4xl" rounded="false">
                        <span className="v-popper--has-tooltip">0</span>
                        {/**/}
                      </p>
                      <div className="v-popper--has-tooltip">
                        <p className="flex items-center font-bold text-sm">
                          {/**/}
                          {/**/}
                          <span className="text-gray-400 font-semibold">
                            {/**/}
                            {/**/}
                            {/**/}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow isolate px-6 py-4 md:col-span-4 min-h-40 h-full">
                  <div
                    className="absolute inset-0 z-30 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800"
                    style={{ display: "none" }}
                  >
                    <svg
                      className="mx-auto block text-gray-300"
                      viewBox="0 0 120 30"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      style={{ width: 30 }}
                    >
                      <circle cx={15} cy={15} r={15}>
                        <animate
                          attributeName="r"
                          from={15}
                          to={15}
                          begin="0s"
                          dur="0.8s"
                          values="15;9;15"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from={1}
                          to={1}
                          begin="0s"
                          dur="0.8s"
                          values="1;.5;1"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx={60} cy={15} r={9} fillOpacity="0.3">
                        <animate
                          attributeName="r"
                          from={9}
                          to={9}
                          begin="0s"
                          dur="0.8s"
                          values="9;15;9"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from="0.5"
                          to="0.5"
                          begin="0s"
                          dur="0.8s"
                          values=".5;1;.5"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx={105} cy={15} r={15}>
                        <animate
                          attributeName="r"
                          from={15}
                          to={15}
                          begin="0s"
                          dur="0.8s"
                          values="15;9;15"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from={1}
                          to={1}
                          begin="0s"
                          dur="0.8s"
                          values="1;.5;1"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>
                  </div>
                  <div className="h-6 flex items-center mb-4">
                    <h3 className="mr-3 leading-tight text-sm font-bold">
                      عدد المنتجات
                    </h3>
                    {/**/}
                    <div className="flex relative ml-auto w-[6rem] shrink-0">
                      <select
                        aria-label="Select Ranges"
                        className="w-full block form-control form-select form-control-xxs form-select-bordered"
                      >
                        <option value={1}>خلال يوم</option>
                        <option value={7}>خلال اسبوع</option>
                        <option value={30}>خلال 30 يوم</option>
                        <option value={60}>خلال 60 يوم</option>
                        <option value={90}>خلال 90 يوم</option>
                        <option value={365}>خلال سنة</option>
                      </select>
                      <svg
                        className="shrink-0 pointer-events-none form-select-arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={6}
                        viewBox="0 0 10 6"
                      >
                        <path
                          className="fill-current"
                          d="M8.292893.292893c.390525-.390524 1.023689-.390524 1.414214 0 .390524.390525.390524 1.023689 0 1.414214l-4 4c-.390525.390524-1.023689.390524-1.414214 0l-4-4c-.390524-.390525-.390524-1.023689 0-1.414214.390525-.390524 1.023689-.390524 1.414214 0L5 3.585786 8.292893.292893z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center mb-4 space-x-4">
                    <div className="rounded-lg bg-primary-500 text-white h-14 w-14 flex items-center justify-center">
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
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="flex items-center text-4xl" rounded="false">
                        <span className="v-popper--has-tooltip">0</span>
                        {/**/}
                      </p>
                      <div className="v-popper--has-tooltip">
                        <p className="flex items-center font-bold text-sm">
                          {/**/}
                          {/**/}
                          <span className="text-gray-400 font-semibold">
                            {/**/}
                            {/**/}
                            {/**/}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow isolate px-6 py-4 md:col-span-4 min-h-40 h-full">
                  <div
                    className="absolute inset-0 z-30 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800"
                    style={{ display: "none" }}
                  >
                    <svg
                      className="mx-auto block text-gray-300"
                      viewBox="0 0 120 30"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      style={{ width: 30 }}
                    >
                      <circle cx={15} cy={15} r={15}>
                        <animate
                          attributeName="r"
                          from={15}
                          to={15}
                          begin="0s"
                          dur="0.8s"
                          values="15;9;15"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from={1}
                          to={1}
                          begin="0s"
                          dur="0.8s"
                          values="1;.5;1"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx={60} cy={15} r={9} fillOpacity="0.3">
                        <animate
                          attributeName="r"
                          from={9}
                          to={9}
                          begin="0s"
                          dur="0.8s"
                          values="9;15;9"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from="0.5"
                          to="0.5"
                          begin="0s"
                          dur="0.8s"
                          values=".5;1;.5"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx={105} cy={15} r={15}>
                        <animate
                          attributeName="r"
                          from={15}
                          to={15}
                          begin="0s"
                          dur="0.8s"
                          values="15;9;15"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from={1}
                          to={1}
                          begin="0s"
                          dur="0.8s"
                          values="1;.5;1"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>
                  </div>
                  <div className="h-6 flex items-center mb-4">
                    <h3 className="mr-3 leading-tight text-sm font-bold">
                      عدد الطلبات
                    </h3>
                    {/**/}
                    <div className="flex relative ml-auto w-[6rem] shrink-0">
                      <select
                        aria-label="Select Ranges"
                        className="w-full block form-control form-select form-control-xxs form-select-bordered"
                      >
                        <option value={1}>خلال يوم</option>
                        <option value={7}>خلال اسبوع</option>
                        <option value={30}>خلال 30 يوم</option>
                        <option value={60}>خلال 60 يوم</option>
                        <option value={90}>خلال 90 يوم</option>
                        <option value={365}>خلال سنة</option>
                      </select>
                      <svg
                        className="shrink-0 pointer-events-none form-select-arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={6}
                        viewBox="0 0 10 6"
                      >
                        <path
                          className="fill-current"
                          d="M8.292893.292893c.390525-.390524 1.023689-.390524 1.414214 0 .390524.390525.390524 1.023689 0 1.414214l-4 4c-.390525.390524-1.023689.390524-1.414214 0l-4-4c-.390524-.390525-.390524-1.023689 0-1.414214.390525-.390524 1.023689-.390524 1.414214 0L5 3.585786 8.292893.292893z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center mb-4 space-x-4">
                    <div className="rounded-lg bg-primary-500 text-white h-14 w-14 flex items-center justify-center">
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
                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="flex items-center text-4xl" rounded="false">
                        <span className="v-popper--has-tooltip">0</span>
                        {/**/}
                      </p>
                      <div className="v-popper--has-tooltip">
                        <p className="flex items-center font-bold text-sm">
                          {/**/}
                          {/**/}
                          <span className="text-gray-400 font-semibold">
                            {/**/}
                            {/**/}
                            {/**/}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow isolate px-6 py-4 md:col-span-6 min-h-40 h-full">
                  <div
                    className="absolute inset-0 z-30 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800"
                    style={{ display: "none" }}
                  >
                    <svg
                      className="mx-auto block text-gray-300"
                      viewBox="0 0 120 30"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      style={{ width: 30 }}
                    >
                      <circle cx={15} cy={15} r={15}>
                        <animate
                          attributeName="r"
                          from={15}
                          to={15}
                          begin="0s"
                          dur="0.8s"
                          values="15;9;15"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from={1}
                          to={1}
                          begin="0s"
                          dur="0.8s"
                          values="1;.5;1"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx={60} cy={15} r={9} fillOpacity="0.3">
                        <animate
                          attributeName="r"
                          from={9}
                          to={9}
                          begin="0s"
                          dur="0.8s"
                          values="9;15;9"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from="0.5"
                          to="0.5"
                          begin="0s"
                          dur="0.8s"
                          values=".5;1;.5"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx={105} cy={15} r={15}>
                        <animate
                          attributeName="r"
                          from={15}
                          to={15}
                          begin="0s"
                          dur="0.8s"
                          values="15;9;15"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from={1}
                          to={1}
                          begin="0s"
                          dur="0.8s"
                          values="1;.5;1"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>
                  </div>
                  <div className="h-6 flex items-center mb-4">
                    <h3 className="mr-3 leading-tight text-sm font-bold">
                      بيان عدد الطلبات
                    </h3>
                    {/**/}
                    <div className="flex relative ml-auto w-[6rem] shrink-0">
                      <select
                        aria-label="Select Ranges"
                        className="w-full block form-control form-select form-control-xxs form-select-bordered"
                      >
                        <option value={30}>خلال 30 يوم</option>
                        <option value={1}>خلال يوم</option>
                        <option value={7}>خلال اسبوع</option>
                        <option value={60}>خلال 60 يوم</option>
                        <option value={90}>خلال 90 يوم</option>
                        <option value={365}>خلال سنة</option>
                      </select>
                      <svg
                        className="shrink-0 pointer-events-none form-select-arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={6}
                        viewBox="0 0 10 6"
                      >
                        <path
                          className="fill-current"
                          d="M8.292893.292893c.390525-.390524 1.023689-.390524 1.414214 0 .390524.390525.390524 1.023689 0 1.414214l-4 4c-.390525.390524-1.023689.390524-1.414214 0l-4-4c-.390524-.390525-.390524-1.023689 0-1.414214.390525-.390524 1.023689-.390524 1.414214 0L5 3.585786 8.292893.292893z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="flex items-center text-4xl mb-4">0 {/**/}</p>
                  <div
                    className="absolute inset-0 rounded-b-lg ct-chart"
                    style={{ top: "60%" }}
                  >
                    <svg
                      xmlns:ct="http://gionkunz.github.com/chartist-js/ct"
                      width="100%"
                      height="100%"
                      className="ct-chart-line"
                      style={{ width: "100%", height: "100%" }}
                    >
                      <g className="ct-grids" />
                      <g>
                        <g className="ct-series ct-series-a">
                          <path
                            d="M0,64L0,64L11.345,64L22.69,64L34.034,64L45.379,64L56.724,64L68.069,64L79.414,64L90.759,64L102.103,64L113.448,64L124.793,64L136.138,64L147.483,64L158.828,64L170.172,64L181.517,64L192.862,64L204.207,64L215.552,64L226.897,64L238.241,64L249.586,64L260.931,64L272.276,64L283.621,64L294.966,64L306.31,64L317.655,64L329,64L329,64Z"
                            className="ct-area"
                          />
                          <path
                            d="M0,64L11.345,64L22.69,64L34.034,64L45.379,64L56.724,64L68.069,64L79.414,64L90.759,64L102.103,64L113.448,64L124.793,64L136.138,64L147.483,64L158.828,64L170.172,64L181.517,64L192.862,64L204.207,64L215.552,64L226.897,64L238.241,64L249.586,64L260.931,64L272.276,64L283.621,64L294.966,64L306.31,64L317.655,64L329,64"
                            className="ct-line"
                          />
                          <line
                            x1={0}
                            y1={64}
                            x2="0.01"
                            y2={64}
                            className="ct-point ct-point__left"
                            ct:value={0}
                            ct:meta="ديسمبر 12, 2024"
                          />
                          <line
                            x1="11.344827586206897"
                            y1={64}
                            x2="11.354827586206897"
                            y2={64}
                            className="ct-point ct-point__left"
                            ct:value={0}
                            ct:meta="ديسمبر 13, 2024"
                          />
                          <line
                            x1="22.689655172413794"
                            y1={64}
                            x2="22.699655172413795"
                            y2={64}
                            className="ct-point"
                            ct:value={0}
                            ct:meta="ديسمبر 14, 2024"
                          />
                          <line
                            x1="34.03448275862069"
                            y1={64}
                            x2="34.04448275862069"
                            y2={64}
                            className="ct-point"
                            ct:value={0}
                            ct:meta="ديسمبر 15, 2024"
                          />
                          <line
                            x1="45.37931034482759"
                            y1={64}
                            x2="45.389310344827585"
                            y2={64}
                            className="ct-point"
                            ct:value={0}
                            ct:meta="ديسمبر 16, 2024"
                          />
                          <line
                            x1="56.724137931034484"
                            y1={64}
                            x2="56.73413793103448"
                            y2={64}
                            className="ct-point"
                            ct:value={0}
                            ct:meta="ديسمبر 17, 2024"
                          />
                          <line
                            x1="68.06896551724138"
                            y1={64}
                            x2="68.07896551724139"
                            y2={64}
                            className="ct-point"
                            ct:value={0}
                            ct:meta="ديسمبر 18, 2024"
                          />
                          <line
                            x1="79.41379310344828"
                            y1={64}
                            x2="79.42379310344829"
                            y2={64}
                            className="ct-point"
                            ct:value={0}
                            ct:meta="ديسمبر 19, 2024"
                          />
                          <line
                            x1="90.75862068965517"
                            y1={64}
                            x2="90.76862068965518"
                            y2={64}
                            className="ct-point"
                            ct:value={0}
                            ct:meta="ديسمبر 20, 2024"
                          />
                          <line
                            x1="102.10344827586206"
                            y1={64}
                            x2="102.11344827586207"
                            y2={64}
                            className="ct-point"
                            ct:value={0}
                            ct:meta="ديسمبر 21, 2024"
                          />
                          <line
                            x1="113.44827586206897"
                            y1={64}
                            x2="113.45827586206897"
                            y2={64}
                            className="ct-point"
                            ct:value={0}
                            ct:meta="ديسمبر 22, 2024"
                          />
                          <line
                            x1="124.79310344827587"
                            y1={64}
                            x2="124.80310344827588"
                            y2={64}
                            className="ct-point"
                            ct:value={0}
                            ct:meta="ديسمبر 23, 2024"
                          />
                          <line
                            x1="136.13793103448276"
                            y1={64}
                            x2="136.14793103448275"
                            y2={64}
                            className="ct-point"
                            ct:value={0}
                            ct:meta="ديسمبر 24, 2024"
                          />
                          <line
                            x1="147.48275862068965"
                            y1={64}
                            x2="147.49275862068964"
                            y2={64}
                            className="ct-point"
                            ct:value={0}
                            ct:meta="ديسمبر 25, 2024"
                          />
                          <line
                            x1="158.82758620689657"
                            y1={64}
                            x2="158.83758620689656"
                            y2={64}
                            className="ct-point"
                            ct:value={0}
                            ct:meta="ديسمبر 26, 2024"
                          />
                          <line
                            x1="170.17241379310346"
                            y1={64}
                            x2="170.18241379310345"
                            y2={64}
                            className="ct-point"
                            ct:value={0}
                            ct:meta="ديسمبر 27, 2024"
                          />
                          <line
                            x1="181.51724137931035"
                            y1={64}
                            x2="181.52724137931034"
                            y2={64}
                            className="ct-point"
                            ct:value={0}
                            ct:meta="ديسمبر 28, 2024"
                          />
                          <line
                            x1="192.86206896551724"
                            y1={64}
                            x2="192.87206896551723"
                            y2={64}
                            className="ct-point"
                            ct:value={0}
                            ct:meta="ديسمبر 29, 2024"
                          />
                          <line
                            x1="204.20689655172413"
                            y1={64}
                            x2="204.21689655172412"
                            y2={64}
                            className="ct-point"
                            ct:value={0}
                            ct:meta="ديسمبر 30, 2024"
                          />
                          <line
                            x1="215.55172413793105"
                            y1={64}
                            x2="215.56172413793104"
                            y2={64}
                            className="ct-point"
                            ct:value={0}
                            ct:meta="ديسمبر 31, 2024"
                          />
                          <line
                            x1="226.89655172413794"
                            y1={64}
                            x2="226.90655172413793"
                            y2={64}
                            className="ct-point"
                            ct:value={0}
                            ct:meta="يناير 1, 2025"
                          />
                          <line
                            x1="238.24137931034483"
                            y1={64}
                            x2="238.25137931034482"
                            y2={64}
                            className="ct-point"
                            ct:value={0}
                            ct:meta="يناير 2, 2025"
                          />
                          <line
                            x1="249.58620689655174"
                            y1={64}
                            x2="249.59620689655173"
                            y2={64}
                            className="ct-point"
                            ct:value={0}
                            ct:meta="يناير 3, 2025"
                          />
                          <line
                            x1="260.9310344827586"
                            y1={64}
                            x2="260.9410344827586"
                            y2={64}
                            className="ct-point"
                            ct:value={0}
                            ct:meta="يناير 4, 2025"
                          />
                          <line
                            x1="272.2758620689655"
                            y1={64}
                            x2="272.2858620689655"
                            y2={64}
                            className="ct-point"
                            ct:value={0}
                            ct:meta="يناير 5, 2025"
                          />
                          <line
                            x1="283.62068965517244"
                            y1={64}
                            x2="283.63068965517243"
                            y2={64}
                            className="ct-point"
                            ct:value={0}
                            ct:meta="يناير 6, 2025"
                          />
                          <line
                            x1="294.9655172413793"
                            y1={64}
                            x2="294.9755172413793"
                            y2={64}
                            className="ct-point"
                            ct:value={0}
                            ct:meta="يناير 7, 2025"
                          />
                          <line
                            x1="306.3103448275862"
                            y1={64}
                            x2="306.3203448275862"
                            y2={64}
                            className="ct-point"
                            ct:value={0}
                            ct:meta="يناير 8, 2025"
                          />
                          <line
                            x1="317.65517241379314"
                            y1={64}
                            x2="317.66517241379313"
                            y2={64}
                            className="ct-point ct-point__right"
                            ct:value={0}
                            ct:meta="يناير 9, 2025"
                          />
                          <line
                            x1={329}
                            y1={64}
                            x2="329.01"
                            y2={64}
                            className="ct-point ct-point__right"
                            ct:value={0}
                            ct:meta="يناير 10, 2025"
                          />
                        </g>
                      </g>
                      <g className="ct-labels">
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x={0}
                          y={69}
                          width="11.344827586206897"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            ديسمبر 12, 2024
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="11.344827586206897"
                          y={69}
                          width="11.344827586206897"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            ديسمبر 13, 2024
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="22.689655172413794"
                          y={69}
                          width="11.344827586206897"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            ديسمبر 14, 2024
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="34.03448275862069"
                          y={69}
                          width="11.344827586206897"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            ديسمبر 15, 2024
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="45.37931034482759"
                          y={69}
                          width="11.344827586206897"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            ديسمبر 16, 2024
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="56.724137931034484"
                          y={69}
                          width="11.344827586206897"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            ديسمبر 17, 2024
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="68.06896551724138"
                          y={69}
                          width="11.344827586206904"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            ديسمبر 18, 2024
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="79.41379310344828"
                          y={69}
                          width="11.34482758620689"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            ديسمبر 19, 2024
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="90.75862068965517"
                          y={69}
                          width="11.34482758620689"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            ديسمبر 20, 2024
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="102.10344827586206"
                          y={69}
                          width="11.344827586206904"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            ديسمبر 21, 2024
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="113.44827586206897"
                          y={69}
                          width="11.344827586206904"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            ديسمبر 22, 2024
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="124.79310344827587"
                          y={69}
                          width="11.34482758620689"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            ديسمبر 23, 2024
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="136.13793103448276"
                          y={69}
                          width="11.34482758620689"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            ديسمبر 24, 2024
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="147.48275862068965"
                          y={69}
                          width="11.344827586206918"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            ديسمبر 25, 2024
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="158.82758620689657"
                          y={69}
                          width="11.34482758620689"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            ديسمبر 26, 2024
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="170.17241379310346"
                          y={69}
                          width="11.34482758620689"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            ديسمبر 27, 2024
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="181.51724137931035"
                          y={69}
                          width="11.34482758620689"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            ديسمبر 28, 2024
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="192.86206896551724"
                          y={69}
                          width="11.34482758620689"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            ديسمبر 29, 2024
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="204.20689655172413"
                          y={69}
                          width="11.344827586206918"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            ديسمبر 30, 2024
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="215.55172413793105"
                          y={69}
                          width="11.34482758620689"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            ديسمبر 31, 2024
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="226.89655172413794"
                          y={69}
                          width="11.34482758620689"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            يناير 1, 2025
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="238.24137931034483"
                          y={69}
                          width="11.344827586206918"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            يناير 2, 2025
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="249.58620689655174"
                          y={69}
                          width="11.344827586206861"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            يناير 3, 2025
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="260.9310344827586"
                          y={69}
                          width="11.344827586206918"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            يناير 4, 2025
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="272.2758620689655"
                          y={69}
                          width="11.344827586206918"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            يناير 5, 2025
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="283.62068965517244"
                          y={69}
                          width="11.344827586206861"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            يناير 6, 2025
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="294.9655172413793"
                          y={69}
                          width="11.344827586206918"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            يناير 7, 2025
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="306.3103448275862"
                          y={69}
                          width="11.344827586206918"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            يناير 8, 2025
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x="317.65517241379314"
                          y={69}
                          width="11.344827586206861"
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 11, height: 0 }}
                          >
                            يناير 9, 2025
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          x={329}
                          y={69}
                          width={30}
                          height={0}
                        >
                          <span
                            className="ct-label ct-horizontal ct-end"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ width: 30, height: 0 }}
                          >
                            يناير 10, 2025
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          y={37}
                          x={0}
                          height={27}
                          width={0}
                        >
                          <span
                            className="ct-label ct-vertical ct-start"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ height: 27, width: 0 }}
                          >
                            0
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          y={10}
                          x={0}
                          height={27}
                          width={0}
                        >
                          <span
                            className="ct-label ct-vertical ct-start"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ height: 27, width: 0 }}
                          >
                            0.5
                          </span>
                        </foreignObject>
                        <foreignObject
                          style={{ overflow: "visible" }}
                          y={-20}
                          x={0}
                          height={30}
                          width={0}
                        >
                          <span
                            className="ct-label ct-vertical ct-start"
                            xmlns="http://www.w3.org/2000/xmlns/"
                            style={{ height: 30, width: 0 }}
                          >
                            1
                          </span>
                        </foreignObject>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow isolate flex flex-col px-6 py-4 md:col-span-3 min-h-40 h-full">
                  <div
                    className="absolute inset-0 z-30 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800"
                    style={{ display: "none" }}
                  >
                    <svg
                      className="mx-auto block text-gray-300"
                      viewBox="0 0 120 30"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      style={{ width: 30 }}
                    >
                      <circle cx={15} cy={15} r={15}>
                        <animate
                          attributeName="r"
                          from={15}
                          to={15}
                          begin="0s"
                          dur="0.8s"
                          values="15;9;15"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from={1}
                          to={1}
                          begin="0s"
                          dur="0.8s"
                          values="1;.5;1"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx={60} cy={15} r={9} fillOpacity="0.3">
                        <animate
                          attributeName="r"
                          from={9}
                          to={9}
                          begin="0s"
                          dur="0.8s"
                          values="9;15;9"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from="0.5"
                          to="0.5"
                          begin="0s"
                          dur="0.8s"
                          values=".5;1;.5"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx={105} cy={15} r={15}>
                        <animate
                          attributeName="r"
                          from={15}
                          to={15}
                          begin="0s"
                          dur="0.8s"
                          values="15;9;15"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from={1}
                          to={1}
                          begin="0s"
                          dur="0.8s"
                          values="1;.5;1"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>
                  </div>
                  <div className="h-6 flex items-center mb-4">
                    <h3 className="flex-1 mr-3 leading-tight text-sm font-bold">
                      حدود المنتجات
                    </h3>
                    {/**/}
                    <div className="flex-none text-right">
                      <span className="text-gray-500 font-medium inline-block">
                        30 / 1 {/**/}
                      </span>
                    </div>
                  </div>
                  <p className="flex items-center text-4xl mb-4">3.33%</p>
                  <div className="flex h-full justify-center items-center flex-grow-1 mb-4">
                    <div
                      className="bg-gray-200 dark:bg-gray-900 w-full overflow-hidden h-4 flex rounded-full"
                      title="30 / 1"
                    >
                      <div
                        className="bg-green-300"
                        style={{ width: "3.33%" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-v-3ef0ff5a
                  className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow flex flex-col px-6 py-4 md:col-span-3 min-h-40 h-full"
                  resourcename
                  resourceid
                  lens
                >
                  <div
                    data-v-3ef0ff5a
                    className="h-6 flex items-center justify-between mb-4"
                  >
                    <h3
                      data-v-3ef0ff5a
                      className="mr-3 leading-tight text-sm font-bold"
                    >
                      رابط متجرك
                    </h3>
                    <button
                      data-v-3ef0ff5a
                      type="button"
                      className="rounded inline-flex items-center px-2 space-x-1 -mx-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:text-gray-500 active:text-gray-600 dark:hover:bg-gray-900"
                    >
                      <span data-v-3ef0ff5a className="px-1 font-bold">
                        نسخ
                      </span>
                      <svg
                        data-v-3ef0ff5a
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block text-gray-400 dark:text-gray-500"
                        role="presentation"
                        width={14}
                        height={20}
                      >
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                      </svg>
                    </button>
                  </div>
                  <div
                    data-v-3ef0ff5a
                    className="px-3 py-3 flex items-center gap-2 justify-center overflow-auto"
                  >
                    <h1
                      data-v-3ef0ff5a
                      className="text-center text-lg text-gray-500 font-bold"
                    >
                      https://5gur.rozenama.com
                    </h1>
                  </div>
                </div>
                <div
                  className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow flex flex-col py-4 table-metric-card-scoped md:col-span-4 min-h-40 h-full"
                  resourcename
                  resourceid
                  lens
                >
                  <div className="h-6 flex items-center justify-between mb-4 px-6">
                    <h3 className="mr-3 leading-tight text-sm font-bold">
                      المحافظات الاكثر طلبا
                    </h3>
                  </div>
                  <div className="pb-4">
                    <div className="overflow-hidden overflow-x-auto relative">
                      <table className="w-full table-default border-separate border-spacing-3">
                        <tbody className="border-t border-b border-gray-100 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700" />
                      </table>
                    </div>
                  </div>
                  <div className="flex-1 flex justify-center items-center">
                    <p className="text-gray-400 text-lg">
                      There are no recent governorates.
                    </p>
                  </div>
                </div>
                <div
                  className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow flex flex-col py-4 table-metric-card-scoped md:col-span-4 min-h-40 h-full"
                  resourcename
                  resourceid
                  lens
                >
                  <div className="h-6 flex items-center justify-between mb-4 px-6">
                    <h3 className="mr-3 leading-tight text-sm font-bold">
                      المنتجات الاكثر طلبا
                    </h3>
                  </div>
                  <div className="pb-4">
                    <div className="overflow-hidden overflow-x-auto relative">
                      <table className="w-full table-default border-separate border-spacing-3">
                        <tbody className="border-t border-b border-gray-100 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700" />
                      </table>
                    </div>
                  </div>
                  <div className="flex-1 flex justify-center items-center">
                    <p className="text-gray-400 text-lg">لايوجد منتجات مؤخرا</p>
                  </div>
                </div>
                <div
                  className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow flex flex-col px-6 py-4 md:col-span-4 min-h-40 h-full"
                  resourcename
                  resourceid
                  lens
                >
                  <div className="h-6 flex items-center justify-between mb-4">
                    <h3 className="mr-3 leading-tight text-sm font-bold">
                      الزبائن الاكثر طلبا
                    </h3>
                    <div>
                      <img
                        src="https://rozenama.s3.us-east-2.amazonaws.com/assets/%7FAsset+2.png"
                        style={{ width: 18 }}
                      />
                    </div>
                  </div>
                  <div className="px-3 py-3 text-center flex flex-col justify-center flex-1">
                    <p className="text-lg">
                      لتفعيل هذه الميزة، يجب عليك ترقية باقتك إلى احترافي.
                    </p>
                    <a
                      className="text-lg text-primary-500"
                      href="/resources/subscriptions?upgrade=required"
                    >
                      ترقية الباقة
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/**/}
        </div>
      </div> 
    </div>
  );
};

export default Home;
