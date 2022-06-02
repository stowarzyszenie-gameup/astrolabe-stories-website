import React from "react";

const Games = () => {
  return (
    <div
      id="games"
      className="min-h-60 sm:min-h-96 xl:min-h-[50vh] w-full px-5 py-20 max-w-screen-md xxl:max-w-screen-xl xxxl:max-w-screen-xxl mx-auto"
    >
      <div className="flex flex-col gap-4 items-center justify-around">
        <h1 className="text-primary">Games</h1>
        <p className=" text-white">
          &quot;Last Threshold&quot; is a visual novel game inspired by the
          works of H.P. Lovecraft, as well as historical events (exile to
          Siberia). During the game, the player learns the history of the
          expedition to investigate the mysterious ruins of a temple belonging
          to the Siberian people of Chukchi.
          <br />
          Steam link: https://store.steampowered.com/app/1840770/Last_Threshold/
          <br />
          The game is available in Polish, English, German, French, and in near
          future also in Spanish.
        </p>
      </div>
    </div>
  );
};

export default Games;
