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
      <div className="flex gap-4">
        <a
          href="https://www.facebook.com/astrolabestories"
          aria-label="Facebook Page link"
        >
          <FontAwesomeIcon icon={faFacebookSquare} size="1x" />
        </a>
        <a
          href="https://www.linkedin.com/company/astrolabe-stories/"
          aria-label="LinkedIn Page link"
        >
          <FontAwesomeIcon icon={faLinkedin} size="1x" />
        </a>
        <a
          href="https://store.steampowered.com/search/?developer=Astrolabe%20Stories"
          aria-label="Steam Page link"
        >
          <FontAwesomeIcon icon={faSteamSquare} size="1x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
