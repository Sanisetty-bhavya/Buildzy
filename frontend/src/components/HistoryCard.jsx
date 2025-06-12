import React from "react";

const HistoryCard = ({ prompt, response, date }) => {
  return (
    <div className="border rounded p-3 mb-2 bg-white shadow">
      <div className="font-semibold">Prompt:</div>
      <div className="mb-2">{prompt}</div>
      <div className="font-semibold">Response:</div>
      <div className="mb-2 text-gray-700">{response}</div>
      <div className="text-xs text-gray-400">{date}</div>
    </div>
  );
};

export default HistoryCard;