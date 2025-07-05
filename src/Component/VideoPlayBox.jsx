import React from 'react'

const VideoPlayBox = ({ videoSrc, onClose }) => {
  return (
    <div className="fixed backdrop-blur-xl z-50 inset-0 bg-black/50 flex items-center justify-center px-4">
      <div className="w-[800px] h-[500px] bg-white rounded-[15px] p-10 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-2xl font-bold"
        >
          ✕
        </button>
        <div className="w-full h-full overflow-hidden object-cover">
          <video width="100%" height="100%" controls autoPlay>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayBox
