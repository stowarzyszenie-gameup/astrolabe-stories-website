/* eslint-disable @next/next/no-img-element */
import React from "react";
import steam from "./steam.webp";
import poster from "./poster.webp";

const Games = () => {
  return (
    <div
      id="games"
      className="min-h-60 sm:min-h-96 xl:min-h-[50vh] w-full px-5 py-10 max-w-screen-md 2xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto"
    >
      <h2 className="text-primary text-center text-xl font-bold uppercase mb-8">
        GAMES
      </h2>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 gap-8">
        <div className="col-start-2 lg:col-start-1 lg:col-end-3 flex flex-col-reverse lg:flex-col items-center gap-4">
          <img src={poster.src} alt="" />
          <a href="https://store.steampowered.com/app/1840770/Last_Threshold/">
            <img src={steam.src} alt="Available on Steam" className="w-48" />
          </a>
        </div>

        <div className="flex flex-col gap-4 items-start justify-center lg:col-start-3 lg:col-end-4">
          <h3 className="text-primary text-base">LAST THRESHOLD</h3>
          <p className=" text-white text-sm">
            &quot;Last Threshold&quot; is a visual novel game inspired by the
            works of H.P. Lovecraft, as well as historical events (exile to
            Siberia). During the game, the player learns the history of the
            expedition to investigate the mysterious ruins of a temple belonging
            to the Siberian people of Chukchi.
          </p>
          <p className=" text-white text-sm">
            The game is available in Polish, English, German, French, and in
            near future also in Spanish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Games;
