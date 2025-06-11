// Reusable UI component: PromptCard for Buildzy
import React from "react";

const PromptCard = ({ prompt, onClick }) => (
  <div className="p-4 bg-white rounded shadow hover:bg-gray-50 cursor-pointer" onClick={onClick}>
    <h3 className="font-bold text-lg mb-2">{prompt.title}</h3>
    <p className="text-gray-700">{prompt.description}</p>
  </div>
);

export default PromptCard;