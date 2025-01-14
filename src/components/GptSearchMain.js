import React from 'react'

export const GptSearchMain = () => {
  return (
    <div className="flex flex-col ">
      <div className=" relative w-full  overflow-hidden h-screen">
        <img
          className=" h-full w-full "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg"
          srcset="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_small.jpg 959w"
          alt=""
          aria-hidden="true"
          class="default-ltr-cache-19j6xtr"
        ></img>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/90"></div>
      </div>
      <div className="absolute w-full h-screen">
        <div className="flex justify-center w-full h-screen items-center flex-col">
          <h1 className="text-white text-4xl font-extrabold mb-8">
            Discover your next favorite show or movie with the power of AI !
          </h1>
          <form
            className="flex justify-center items-center w-full "
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              placeholder="Type a movie or show name..."
              className="w-[40%] p-3 text-lg rounded-lg "
            ></input>
            <button className="bg-red-500 text-white p-3 w-32 rounded-lg ml-10 text-lg font-bold">Find</button>
          </form>
        </div>
      </div>
    </div>
  );
}
