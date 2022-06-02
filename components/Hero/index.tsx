import React from "react";

const Hero = () => {
  return (
    <div className="min-h-60 sm:min-h-96 xl:min-h-[50vh] w-full px-5 py-20 max-w-screen-md xxl:max-w-screen-xl xxxl:max-w-screen-xxl mx-auto grid grid-cols-2">
      <div className="flex flex-col gap-4 items-center justify-around">
        <h1 className="text-primary">Astrolabe Stories</h1>
        <p className=" text-white">
          It&apos;s all about stories. Our past, future, and present. Now we
          want to tell our stories - meaningful and unique.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-primary">LOGO PLACEHOLDER</h1>
      </div>
    </div>
  );
};

export default Hero;
