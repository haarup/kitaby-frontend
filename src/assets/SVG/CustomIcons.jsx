import { iconPropTypes } from "./propTypes";

export const UserIcon = ({ className = "h-6 w-6" }) => {
  return (
    <svg
      fill="none"
      height={24}
      viewBox="0 0 24 24"
      width={24}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.582 8.938a5.543 5.543 0 10-11.087 0 5.543 5.543 0 0011.087 0z"
        fill="#58B3F4"
      />
      <path
        d="M9.58 14.813h5.05A5.187 5.187 0 0119.819 20c0 .102 0 .206.002.308.016 1.15-.918 1.985-2.067 1.985h-.233a.3.3 0 01-.3-.3v-2.456a.747.747 0 10-1.496 0v2.456a.3.3 0 01-.3.3H8.792a.3.3 0 01-.3-.3v-2.456a.75.75 0 00-1.5 0v2.456a.3.3 0 01-.3.3h-.234c-1.15 0-2.082-.835-2.067-1.985.002-.102.003-.206.003-.308a5.187 5.187 0 015.187-5.188z"
        fill="#58B3F4"
        opacity="0.4"
      />
    </svg>
  );
};

UserIcon.propTypes = iconPropTypes;

export const StoreIcon = ({ className = "h-6 w-6 text-[#58B3F4]" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        fill="#58B3F4"
        d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z"
      />
      <path
        fillRule="evenodd"
        fill="#b6dbf5"
        d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

StoreIcon.propTypes = iconPropTypes;

export const DomainIcon = ({ className = "h-6 w-6 text-[#58B3F4]" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
    </svg>
  );
};

DomainIcon.propTypes = iconPropTypes;

export const MapIcon = ({ className = "h-6 w-6" }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.532 2.937a6.89 6.89 0 017.034.058C17.71 4.327 19.012 6.705 19 9.26c-.05 2.54-1.447 4.929-3.193 6.775a18.727 18.727 0 01-3.358 2.82 1.174 1.174 0 01-.408.144.82.82 0 01-.39-.119 18.514 18.514 0 01-4.839-4.547A9.28 9.28 0 015 9.134l.005-.273c.09-2.456 1.42-4.7 3.527-5.924zm4.375 4.098a2.346 2.346 0 00-2.594.52 2.455 2.455 0 00-.519 2.64 2.378 2.378 0 002.198 1.497 2.339 2.339 0 001.683-.701c.446-.454.696-1.07.694-1.713a2.423 2.423 0 00-1.462-2.243z"
        fill="#58B3F4"
      />
      <path
        d="M12 22c2.761 0 5-.448 5-1s-2.239-1-5-1-5 .448-5 1 2.239 1 5 1z"
        fill="#58B3F4"
        opacity="0.4"
      />
    </svg>
  );
};

MapIcon.propTypes = iconPropTypes;

export const Map2Icon = ({ className = "h-6 w-6" }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#58B3F4" opacity="0.4">
        <path d="M7.372 2.485L3.523 4.186a2.674 2.674 0 00-1.584 2.44v12.663a1.791 1.791 0 002.522 1.64l2.998-1.333a.11.11 0 00.065-.1V2.586a.109.109 0 00-.152-.101zM20.866 9.838c.265.132.574-.074.574-.37V4.501c0-.61-.31-1.17-.82-1.51-.51-.33-1.14-.38-1.7-.13l-3.007 1.334a2.674 2.674 0 01-.042.064l-.021.032v5.16c.64-.2 1.32-.31 2.03-.31 1.075 0 2.088.25 2.986.697z" />
      </g>
      <path
        d="M14.35 4.375v5.767a6.746 6.746 0 00-3.25 5.78c0 1.358.475 2.74 1.202 3.98.194.333-.123.725-.486.593a1023.3 1023.3 0 01-1.877-.683l-.003-.001-.846-.309c-.04-.01-.07-.05-.07-.1V2.532c0-.08.07-.13.15-.11.654.244 3.43 1.248 4.63 1.683l.482.174.068.096zM17.778 14.58h.049a1.067 1.067 0 110 2.136c-.59 0-1.093-.478-1.093-1.068 0-.591.453-1.068 1.044-1.068z"
        fill="#58B3F4"
      />
      <path
        clipRule="evenodd"
        d="M13.416 15.739a4.392 4.392 0 014.386-4.387c2.42 0 4.388 1.969 4.388 4.387 0 2.846-3.258 5.79-4.388 5.79s-4.386-2.944-4.386-5.79zm1.602 0c0 1.853 2.05 3.758 2.784 4.148.734-.39 2.786-2.295 2.786-4.148a2.789 2.789 0 00-2.786-2.785 2.788 2.788 0 00-2.784 2.785z"
        fill="#58B3F4"
        fillRule="evenodd"
      />
    </svg>
  );
};

Map2Icon.propTypes = iconPropTypes;

export const PhoneIcon = ({ className = "h-6 w-6" }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M14.748 2.5h-5.5a4.104 4.104 0 00-4.1 4.099V17.4c0 2.261 1.84 4.1 4.1 4.1h5.5c2.261 0 4.1-1.839 4.1-4.1V6.599a4.104 4.104 0 00-4.1-4.099z"
        fill="#58B3F4"
        fillRule="evenodd"
        opacity="0.4"
      />
      <path
        clipRule="evenodd"
        d="M13.402 7.45h-2.8a.75.75 0 010-1.5h2.8a.75.75 0 010 1.5zm-1.4 10.7a.94.94 0 01-.95-.95c0-.544.502-.95.95-.95.448 0 .95.406.95.95 0 .544-.502.95-.95.95z"
        fill="#58B3F4"
        fillRule="evenodd"
      />
    </svg>
  );
};

PhoneIcon.propTypes = iconPropTypes;
