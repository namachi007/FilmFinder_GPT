import React from 'react'

export const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-44 pl-36 absolute z-40">
      <h2 className="font-bold text-5xl pb-10 text-white">{title}</h2>
      <p className="text-lg w-2/4 text-white ">{overview}</p>
      <div className="my-12 flex ">
        <button className="bg-white text-black p-3 px-10 font-xl rounded-lg text-center flex items-center hover:bg-opacity-90 ">
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
          <span className="">Play</span>
        </button>
        <button className="bg-gray-900 text-white p-3 px-10 font-xl rounded-lg bg-opacity-50 ml-3 flex hover:bg-opacity-40">
          More Info
        </button>
      </div>
    </div>
  );
}
