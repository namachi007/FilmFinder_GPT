import React from 'react'

export const VideoTitle = ({title, overview}) => {
  return (
    <div className="md:pt-40 md:pl-20 md:mt-8 mt-5 pt-14 pl-7  absolute z-40 w-[70%]">
      <h2 className="md:font-bold md:text-5xl text-xl font-semibold md:pb-10 pb-2 text-white">
        {title}
      </h2>
      <p className="md:text-lg text-sm text-white md:w-[50%] truncate w-full  sm:whitespace-normal sm:overflow-visible  ">
        {overview}
      </p>
      <div className="md:my-12 my-6 flex ">
        <button className="bg-white text-black md:p-3  md:px-10 px-3 h-8 w-16 md:h-auto md:w-auto rounded-lg text-center flex items-center hover:bg-opacity-90 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-caret-right-fill"
            viewBox="0 0 16 16"
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
          <span className="text-sm font-semibold md:text-md ">Play</span>
        </button>
        <button className="bg-gray-900 text-white md:p-3 p-1 md:px-10 px-5 font-xl rounded-lg bg-opacity-50 md:ml-10 ml-7 flex hover:bg-opacity-40 text-sm font-semibold md:text-md  h-8  md:h-auto md:w-auto">
          More Info
        </button>
      </div>
    </div>
  );
}
