import React from "react";

const History = () => {
  return (
    <div
      id="history"
      className="min-h-60 sm:min-h-96 xl:min-h-[50vh] w-full px-5 py-20 max-w-screen-md xxl:max-w-screen-xl xxxl:max-w-screen-xxl mx-auto"
    >
      <div className="flex flex-col gap-4 items-center justify-around">
        <h1 className="text-primary">History</h1>
        <p className=" text-white">
          01. 2021 - We started thinking about making our debut game.
          <br />
          02. 2021 - We made a team ready for all types of challenges :)
          <br />
          03. 2021 - Conceptual work on the game has started - the fun has just
          begun!
          <br />
          06.2021- We started the real game development process. It&apos;s
          starting to get serious;)
          <br />
          25.03. 2022 - The release of our first game “Last Threshold”!
        </p>
      </div>
    </div>
  );
};

export default History;
