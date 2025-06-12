import React, { useState } from "react";

const PromptForm = ({ onSubmit }) => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt);
      setPrompt("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt..."
        className="border rounded px-3 py-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Generate
      </button>
    </form>
  );
};

export default PromptForm;