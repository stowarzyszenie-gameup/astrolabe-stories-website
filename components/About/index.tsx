/* eslint-disable @next/next/no-img-element */
import React from "react";
import card from "./card.webp";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-60 sm:min-h-96 xl:min-h-[50vh] w-full px-5 py-20 max-w-screen-md xxl:max-w-screen-xl xxxl:max-w-screen-xxl mx-auto "
    >
      <h2 className="text-primary text-center text-xl font-bold uppercase mb-8">
        ABOUT US
      </h2>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="flex justify-center items-center">
          <img src={card.src} alt="" />
        </div>
        <div className="flex flex-col gap-4 items-center justify-around lg:col-start-2 lg:col-end-4 text-sm">
          <p className=" text-white ">
            Astrolabe Stories is a gaming project of Games’ Development and
            Research Association GameUP. The main aim of Astrolabe Stories is to
            make meaningful games with unforgettable stories. We are a group of
            experienced storytellers and enthusiasts of story design. Just as
            the astrolabe showed the direction of travel, for us such a way of
            navigating is telling unique stories. With a group of our students,
            we decided to start our journey together and make our first game.
          </p>
          <p className=" text-white">
            Each of us appreciates games with stories that touch the heart and
            make us think about life. That is why we want to create stories that
            will leave a mark on players&apos; memories.
          </p>
          <p className=" text-white">
            &quot;Last Threshold&quot; is our first game, heavily inspired by
            the work of H.P. Lovecraft and his followers, which allows you to
            learn about the extraordinary history of a mysterious temple in
            Siberia. We decided on the visual novel genre because we wanted the
            player to empathize with the hero struggling with the dark secrets
            of the temple, difficult weather conditions, and his own past.
          </p>

          <p className=" text-white">
            Now we are working on new projects, in which we want to focus on
            telling the stories of protagonists, whose fates will allow us to
            tell a bit more about human nature and much more! You will have to
            wait a little longer for more information. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
