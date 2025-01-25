import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  previousLabel = "السابق",
  nextLabel = "التالي",
  showIcon = true,
}) => {
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const goToPage = (page) => {
    onPageChange(page);
  };

  const getVisiblePages = () => {
    const pages = [];
    const maxVisible = 5; 
    const firstPage = 1;
    const lastPage = totalPages;

    if (totalPages <= maxVisible) {
      for (let i = firstPage; i <= lastPage; i++) {
        pages.push(i);
      }
    } else {
      pages.push(firstPage);

      if (currentPage > 3) {
        pages.push("...");
      }

      const start = Math.max(currentPage - 1, firstPage + 1);
      const end = Math.min(currentPage + 1, lastPage - 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) {
        pages.push("...");
      }
      pages.push(lastPage);
    }
    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <nav className="flex justify-center mt-4">
      <ul
        className="flex rounded-md overflow-hidden"
        style={{ border: "1px solid hsl(0, 0%, 90%)" }}
      >
        <li>
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-3 py-2 ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            style={{ borderRight: "1px solid hsl(0, 0%, 90%)" }}
          >
            {showIcon && <HiChevronRight className="inline mr-1" />}
            {previousLabel}
          </button>
        </li>
        {visiblePages.map((page, index) => (
          <li key={index}>
            {page === "..." ? (
              <div className="h-full items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1  ring-gray-300">
                ...
              </div>
            ) : (
              <button
                onClick={() => goToPage(page)}
                className={`px-3 py-2 ${
                  page === currentPage
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                style={{
                  borderRight:
                    index < visiblePages.length - 1
                      ? "1px solid hsl(0, 0%, 90%)"
                      : "none",
                }}
              >
                {page}
              </button>
            )}
          </li>
        ))}
        <li>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {nextLabel}
            {showIcon && <HiChevronLeft className="inline ml-1" />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
