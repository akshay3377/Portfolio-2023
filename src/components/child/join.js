// src/components/JoinDocument.js
import React, { useState } from 'react';

const JoinDocument = ({ onJoin }) => {
  const [docId, setDocId] = useState('');

  const handleJoinClick = () => {
    onJoin(docId);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Enter Document ID"
        className="border rounded p-2"
        value={docId}
        onChange={(e) => setDocId(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-2 rounded" onClick={handleJoinClick}>
        Join Document
      </button>
    </div>
  );
};

export default JoinDocument;
