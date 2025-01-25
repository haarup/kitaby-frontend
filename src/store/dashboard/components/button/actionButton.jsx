import React from 'react';
import PropTypes from 'prop-types';
import "./buttonStyle.css";
import Spinner from '../Spinner/Spinner';

const ActionButton = ({
  text,
  onClick,
  type,
  className,
  disabled,
  textLoading,
  style,
  loading,
  icon: Icon,
  svgIcon,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} action-button overflow-hidden hover:drop-shadow-md cursor-pointer flex flex-nowrap items-center justify-center gap-2 bg-[#DF140A]`}
      disabled={disabled || loading}
      style={style}
    >
      {loading ? (<Spinner textLoading={textLoading} />) : (
        <>
          {text}
          {Icon && <Icon />}
          {svgIcon && <span>{svgIcon}</span>}
        </>
      )}
    </button>
  );
};

ActionButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  textLoading: PropTypes.bool,
  style: PropTypes.object,
  loading: PropTypes.bool,
  icon: PropTypes.elementType,
  svgIcon: PropTypes.element,
};

export default ActionButton;
