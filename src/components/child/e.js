// src/components/Editor.js
import React, { useState, useEffect } from 'react';
import { database } from '../../../firebaseConfig';

const Editor = ({ docId }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    // Attach a listener to the Firebase document
    const docRef = database.ref(`/documents/${docId}`);
    docRef.on('value', (snapshot) => {
      if (snapshot.exists()) {
        setContent(snapshot.val().content);
      }
    });

    return () => {
      // Detach the listener when the component unmounts
      docRef.off('value');
    };
  }, [docId]);

  const handleInputChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);

    // Update the document in Firebase
    database.ref(`/documents/${docId}`).set({
      content: newContent,
    });
  };

  return (
    <div className="p-4">
      <textarea
        className="w-full h-64 border rounded p-2"
        value={content}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Editor;
