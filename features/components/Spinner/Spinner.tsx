import React from "react";

export function Spinner() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-12 h-12 border-4 border-blue-10 border-solid border-t-4 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
