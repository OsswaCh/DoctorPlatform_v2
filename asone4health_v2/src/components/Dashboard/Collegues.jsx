import React from "react";
import { useState, useEffect } from "react";

function Collegues({ imageSrc, name }) {
  const [imageExists, setImageExists] = useState(!!imageSrc);

  //getting the initials just in case

  //   const getInitials = (name) => {
  //     if (!name) return '';
  //     return name
  //       .split(' ')
  //       .map(word => word[0])
  //       .join('')
  //       .toUpperCase()
  //       .slice(0, 2);
  //   };

  useEffect(() => {
    if (!imageSrc) {
      setImageExists(false);
      return;
    }

    const img = new Image();
    img.onload = () => setImageExists(true);
    img.onerror = () => setImageExists(false);
  }, [imageSrc]);

  const handleImageError = () => {
    setImageExists(false);
  };

  return imageExists ? (
    <span className="flex items-center space-x-3 ">
      <img
        className="w-10 h-10 rounded-full ring-4 ring-color-main dark:ring-gray-500"
        src={imageSrc}
        alt="Bordered avatar"
        onError={handleImageError}
      />
      <h1 className="text-lg font-semibold text-color-white max-w-[6vw]"> {name} </h1>
    </span>
  ) : (
    <span className="inline-block">
      <div className="w-10 h-10 rounded-full ring-4 ring-color-main dark:ring-gray-500  flex items-center justify-center">
        <svg
          className="w-6 h-6 text-color-client-dark"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </span>
  );
}

export default Collegues;
