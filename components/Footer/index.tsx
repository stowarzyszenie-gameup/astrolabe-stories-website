import {
  faFacebookSquare,
  faLinkedin,
  faSteamSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white font-secondary p-4 flex justify-center items-center gap-4">
      Astrolabe Stories 2022
      <li className="flex gap-4">
        <a href="https://www.facebook.com/astrolabestories">
          <FontAwesomeIcon icon={faFacebookSquare} size="1x" />
        </a>
        <a href="https://www.linkedin.com/company/astrolabe-stories/">
          <FontAwesomeIcon icon={faLinkedin} size="1x" />
        </a>
        <a href="https://store.steampowered.com/search/?developer=Astrolabe%20Stories">
          <FontAwesomeIcon icon={faSteamSquare} size="1x" />
        </a>
      </li>
    </footer>
  );
};

export default Footer;
