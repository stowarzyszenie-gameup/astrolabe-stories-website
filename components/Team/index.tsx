import React from "react";

const Team = () => {
  return (
    <div
      id="team"
      className="w-full px-5 py-10 max-w-screen-md 2xl:max-w-screen-lg 3xl:max-w-screen-xl mx-auto flex flex-col items-center"
    >
      <h2 className="text-primary text-center text-xl font-bold uppercase mb-8">
        TEAM
      </h2>
      <div className="border-8 border-primary p-8 relative">
        <div className="bg-dots rounded-full w-10 h-10 relative top-0 -left-14 float-left"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 text-sm text-white lg:gap-8">
          <ul className="list-disc">
            <li>
              <span className="text-primary">Adam Flamma</span> - Father of
              chaos (and games)
            </li>
            <li>
              <span className="text-primary">Róża Hnatkowska</span> - Ninja (PR,
              and much more!)
            </li>
            <li>
              <span className="text-primary">Nina Świłło</span> - Miracle maker
              (art, graphics, and managing)
            </li>
            <li>
              <span className="text-primary">Szymon Stoczek</span> - Father of
              stories (yep, that&apos;s him!)
            </li>
            <li>
              <span className="text-primary">Szymon Makuch</span> - Wizard of
              finances (and copyright - love of his life)
            </li>
            <li>
              <span className="text-primary">Fazal Khan</span> - Video and VFX
              Magic Maker (visual magic - bringing imagination to life)
            </li>
            <li>
              <span className="text-primary">Kacper Łach</span> - Social media
              guy (always connected with the whole world)
            </li>
          </ul>
          <ul className="list-disc">
            <li>
              <span className="text-primary">Aleksandra Browarska</span> - Lady
              of Stories (writer)
            </li>
            <li>
              <span className="text-primary">Patrycja Skałecka-Wodziczko</span>{" "}
              - Lady of Art (lead graphic designer)
            </li>
            <li>
              <span className="text-primary">Sara Grzelak</span> - 2d miracle
              maker (2d artist)
            </li>
            <li>
              <span className="text-primary">Antoni Jastrzębski</span> - 2d
              miracle maker (2d artist)
            </li>
            <li>
              <span className="text-primary">Bartosz Wardaszko</span> - 2d
              miracle maker (2d artist)
            </li>
            <li>
              <span className="text-primary">Wiktor Pawlik</span> - Master of
              Design (gameplay designer)
            </li>
            <li>
              <span className="text-primary">Ilias Abdeljalil</span> - Lord of
              the code (programmer)
            </li>
          </ul>
        </div>
        <div className="bg-dots rounded-full w-14 h-14 relative -bottom-16 ml-auto -rotate-90 float-right"></div>
      </div>
    </div>
  );
};

export default Team;
