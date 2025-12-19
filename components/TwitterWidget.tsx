import React from 'react';

export const TwitterWidget: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-4 w-full max-w-sm mx-auto h-[400px] overflow-hidden flex flex-col items-center justify-center text-center">
       <div className="text-gray-500 mb-4">Twitter Timeline Embed Placeholder</div>
       <p className="text-xs text-gray-600">
         (Twitter widgets require external scripts which are mocked here for security/performance in this demo.)
       </p>
       <a href="https://twitter.com/izakayatarusuke" target="_blank" rel="noreferrer" className="mt-4 px-4 py-2 bg-[#1DA1F2] text-white rounded-full text-sm font-bold hover:bg-opacity-90">
         View on Twitter
       </a>
    </div>
  );
};
