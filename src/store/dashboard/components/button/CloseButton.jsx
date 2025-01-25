import React from "react";
import PropTypes from "prop-types";

const CloseButton = ({
  onClick,
  className,
}) => {
  return (
    <button
      className={`inline-flex items-center bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white ${className}`}
      style={{ borderRadius: "5px" }}
      onClick={onClick}
    >
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>
  );
};

CloseButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default CloseButton;
