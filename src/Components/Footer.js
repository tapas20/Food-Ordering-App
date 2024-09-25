import React from "react";
import { faLinkedin, faGithub, faDiscord, faXTwitter, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="flex flex-col w-full text-white items-center justify-center py-5 bg-[#02060c]">
        <p className="mt-3 justify-between">Made with ❤️ by <a href="https://www.linkedin.com/in/tapas-jyoti/">Tapas Jyoti</a></p>
        <div className="my-3 flex items-center justify-center">
          <a
            className="ml-3 text-4xl transition-all hover:text-linkedIn"
            href="https://www.linkedin.com/in/tapas-jyoti/"
            target="_blank"
            title="Tapas's Linkedin Profile"
          >
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
          <a
            className="ml-3 text-4xl transition-all hover:text-github"
            href="https://github.com/tapas20"
            target="_blank"
            title="Tapas's GitHub"
          >
            <FontAwesomeIcon icon={faGithub}/>
          </a>
          <a
            className="ml-3 text-3xl transition-all hover:text-twitter"
            href="https://x.com/Tapas_jyoti_20"
            target="_blank"
            title="Tapas's Twitter Profile"
          >
            <FontAwesomeIcon icon={faXTwitter}/>
          </a>
          <a
            className="ml-3 text-3xl transition-all hover:text-discord"
            href="https://www.instagram.com/tapas_jyoti20/?hl=en"
            target="_blank"
            title="Tapas's Discord Profile"
          >
            <FontAwesomeIcon icon={faInstagram}/>
          </a>
          <a
            className="ml-3 text-3xl transition-all hover:text-discord"
            href="https://www.facebook.com/tapasjyoti.mohanta"
            target="_blank"
            title="Tapas's Discord Profile"
          >
            <FontAwesomeIcon icon={faFacebook}/>
          </a>
        </div>
        <p className="pb-10" title="Just Kiddin' There is no Copyright for this">©️ 2024 FoodVilla. All rights reserved.</p>
    </div>
  );
};

export default Footer;
