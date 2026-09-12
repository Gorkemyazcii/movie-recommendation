import React from "react";
export default function Loading() {
  return (
    <div className="min-h-full min-w-full flex items-center justify-center">
      <div className="inline-block w-20 h-20 border-4 border-indigo-800 border-opacity-75 rounded-full border-t-white animate-spin sm:w-36 sm:h-36"></div>
    </div>
  );
}
