import React from 'react';

export default function Youtube() {
  const videoId = 'qhQfr6eqIFY';

  return (
    <div className='p-2 md:p-0 w-full'>
      <iframe
        width="360"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video"
        allowFullScreen
        className='md:w-full' >

      </iframe>
    </div>
  );
}

