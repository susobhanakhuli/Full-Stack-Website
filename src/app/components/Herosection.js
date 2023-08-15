import Image from "next/image";
import HeroImage from "../images/4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faInstagram,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function HeroSection() {
    return (
        <div className="flex bg-black px-10">
            <div className="w-[40vw] text-white mt-[25vh]">
                <div>
                    <h1>
                        YORBE WRERLT <br />
                        <span className="text-yellow">BRR ETES CIV RANBN</span>
                    </h1>
                    <p className="mt-10">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
                        quos quisquam sunt nostrum distinctio explicabo quae esse
                        reprehenderit beatae. Non commodi qui itaque at ab doloribus quam
                        perferendis fuga id? Harum accu obcaecati magni doloremque molestiae
                        modi provident rem, ullam ea fugiat adipisci totam saepe ipsam
                        temporibus quod! Magni earum similique ullam reprehenderit error
                        eligendi quidem magnam iusto? Distinctio minus at aliquid?
                    </p>
                    <div className="flex mt-10 ml-8">
                        <a href="/register">
                            <button className="custom-button-1">
                                Join Us
                            </button>
                        </a>
                        <a href="/login">
                            <button className="custom-button-2">
                                CLICK TO BECOME HEALTHY
                            </button>
                        </a>
                    </div>
                </div>
                <div className="flex gap-4 align-bottom mt-[6rem]">
                    <a href="https://www.facebook.com/susobhan.akhuli.1/" target="_blank">
                        <div className="flex justify-center items-center rounded-full mb-3">
                            <FontAwesomeIcon
                                icon={faFacebook}
                                className="w-7 h-6 text-yellow hover:text-black hover:bg-yellow rounded-full"
                            />
                        </div>
                    </a>
                    <a href="https://www.instagram.com/susobhanakhuli/" target="_blank">
                        <div className="flex justify-center items-center rounded-full mb-3">
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className="w-7 h-6 text-yellow hover:text-black hover:bg-yellow rounded-full"
                            />
                        </div>
                    </a>
                    <a href="https://twitter.com/SusobhanAkhuli" target="_blank">
                        <div className="flex justify-center items-center rounded-full mb-3">
                            <FontAwesomeIcon
                                icon={faTwitter}
                                className="w-7 h-6 text-yellow hover:text-black hover:bg-yellow rounded-full"
                            />
                        </div>
                    </a>
                </div>
            </div>
            <Image
                className="backimage h-[42rem] w-[60vw]"
                src={HeroImage}
                alt="Hero Image"
                width={500}
                height={500}
                priority={true}
            />
        </div>
    );
}
