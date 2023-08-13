import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Subscriber from "./Subscriber";
// import insta from "../images/instagram.png";
// import Image from "next/image";

// const links = ["Services", "Blog", "About"];
export default function Footer() {
  return (
    <footer className="bg-black block justify-between items-center px-4 py-16">
      <div className="text-white mx-20 mb-10">
        <div className="container">
          <div className="flex gap-24 footer-a-links">
            <div className="footer-section-description">
              <div className="">
                <h4 className="text-white mt-5 mb-3">Company</h4>
                <ul className="flex flex-col">
                  <li>
                    <a href="#">Legal</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">In Media</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-section-description">
              <div className="">
                <h4 className="footer-description-heads">Explore</h4>
                <ul className="flex flex-col">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/articles">Articles</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-section-description">
              <div className="">
                <h4 className="footer-description-heads">About Us</h4>
                <ul className="flex flex-col">
                  <li>
                    <a href="#">Our Story</a>
                  </li>
                  <li>
                    <a href="/client-feedback">Client Feedback</a>
                  </li>
                  <li>
                    <a href="#">CEO Desk</a>
                  </li>
                  <li>
                    <a href="#">Employee of the Year</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-6">
              <Subscriber/>
            </div>
          </div>
        </div>
      </div>

      {/* Under Line */}
      <div className="text-white ml-20 mr-20">
        <div className="container">
          <hr className=" mx-auto" />

          <div className="col-span-12 md:col-span-8 mt-3">
            <div className="col-span-12 lg:col-span-8 text-white">
              Copyright ©2023 All rights reserved.
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="flex justify-center md:justify-end gap-7 mt-3 md:mt-0">
                <a
                  href="https://www.instagram.com/susobhanakhuli/"
                  target="_blank"
                >
                  <div className="flex justify-center items-center rounded-full mb-3">
                    {/* <i className="fa-brands fa-instagram"></i> */}
                    {/* <Image
                    src={insta}
                    width={500}
                    height={500}
                    alt="Instagram"
                    className="w-6 h-6 invert-1 text-yellow hover:text-black hover:bg-yellow rounded-full"
                    // className="w-7 md:w-10 lg:w-12 h-8 md:h-11 lg:h-13 text-white mt-1 invert"
                  /> */}
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="w-7 h-6 text-yellow hover:text-black hover:bg-yellow rounded-full"
                    />
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/susobhan.akhuli.1/"
                  target="_blank"
                >
                  <div className="flex justify-center items-center rounded-full mb-3">
                    {/* <i className="fa-brands fa-whatsapp"></i> */}
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="w-7 h-6 text-yellow hover:text-black hover:bg-yellow rounded-full"
                    />
                  </div>
                </a>
                <a href="https://twitter.com/SusobhanAkhuli" target="_blank">
                  <div className="flex justify-center items-center rounded-full mb-3">
                    {/* <Image src={insta} className="fa-Brands fa-Twitter"></Image> */}
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="w-7 h-6 text-yellow hover:text-black hover:bg-yellow rounded-full"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
