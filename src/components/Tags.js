import React from 'react';

const Tags = () => {
  return (
    <div className="flex flex-wrap py-6 space-x-2 border-t border-dashed dark:border-gray-400">
      <a
        rel="noopener noreferrer"
        href="#"
        className="px-3 py-1 rounded-sm bg-gray-800 text-white"
      >
        #job search
      </a>
      <a
        rel="noopener noreferrer"
        href="#"
        className="px-3 py-1 rounded-sm bg-gray-800 text-white"
      >
        #canada
      </a>
      <a
        rel="noopener noreferrer"
        href="#"
        className="px-3 py-1 rounded-sm bg-gray-800 text-white"
      >
        #life in canada
      </a>
    </div>
  );
};

export default Tags;
