import React from "react";

const CodePreview = ({ code }) => {
  return (
    <div className="bg-gray-900 text-green-200 p-4 rounded font-mono whitespace-pre overflow-x-auto">
      {code || "No code generated yet."}
    </div>
  );
};

export default CodePreview;