const links = ["Home", "Articles", "Services", "About", "Contact Us"];
import Image from "next/image";
import mygym from "../images/logo.png";
import './navstyle.css';

export default function Side() {
  return (
    <nav className="bg-black flex justify-between items-center h-20 p-4 sticky top-0">
      <a href="/" className="flex ml-4 md:ml-8">
        <Image
          src={mygym}
          width={500}
          height={500}
          alt="MY GYM"
          className="w-7 md:w-10 lg:w-12 h-8 md:h-11 lg:h-13 text-white mt-1 invert"
        />
        <p className="text-yellow ml-2 font-bold text-xl md:text-2xl lg:text-3xl xl:text-[2rem] font-delicious">
          Sportzal
        </p>
      </a>
      <div>
        <ul className="flex text-yellow p-2 list-none text-xs md:text-sm lg:text-base xl:text-lg">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/articles">Articles</a>
          </li>
          <li className="dropdown">
            <a href="#" className="dropbtn">
              Services
            </a>
            <div className="dropdown-content">
              <a href="/services/gym">GYM</a>
              <a href="/services/yoga">Yoga</a>
              <a href="/services/zumba">Zumba</a>
            </div>
          </li>

          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a id="black-yellow" href="/contact">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
