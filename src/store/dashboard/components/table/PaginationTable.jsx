
const PaginationTable = () => {
  return (
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
  );
};

export default PaginationTable;
