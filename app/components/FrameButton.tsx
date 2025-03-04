'use client';

import { useState } from 'react';

export function FrameButton() {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = async (): Promise<void> => {
    try {
      const response = await fetch('/api/frame', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to process frame action');
      }
      
      setClicked(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      disabled={clicked}
    >
      {clicked ? 'Hello sent!' : 'Send Hello'}
    </button>
  );
}