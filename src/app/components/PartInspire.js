"use client"

import Image from "next/image";
import Insp from "../images/inspire.png";
import { useState } from "react";

export default function PartInspire() {
    const [show, setShow] = useState(true);

    const visib = () => {
        setShow(!show);
    };

    const style1 = { borderRadius: "16px 9999px 16px 9999px" };
    const style2 = { borderRadius: "16px 0px 0px 64px", backgroundColor: "white" };

    const style3 = { borderRadius: "0px 16px 64px 0px", backgroundColor: "white", display: "block" };
    const style4 = { display: "none" };

    return (
        <div className="w-2/3 flex">
            <div className="w-1/2 bg-gray-200 text-black pl-4 pt-1"
                style={show ? { ...style1} : {...style2} }>
                <h2>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, ad.
                </h2>
                <p className="mt-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                    fugit facere non, adipisci sed nihil ipsum incidunt molestiae in
                    tempora impedit nostrum aperiam corrupti tenetur, dolores recusandae
                    numquam odit fugiat nam. Ipsa suscipit repudiandae iure veniam,
                </p>
                <button onClick={() => visib()} className="custom-button-3 font-extrabold w-44 h-12 ml-64 mb-1">
                    {show ? "Read Full" :"Hide It"}
                </button>
            </div>
            <div className="w-1/2 bg-black text-white mr-10">
                <div style={{ display: show ? "block" : "none" }}>
                    <h1><span className="text-yellow">DEG</span>T CUPLAR TDHUT RTE HIIY</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                        fugit facere non, adipisci sed nihil ipsum incidunt molestiae in
                        tempora impedit nostrum aperiam corrupti tenetur, dolores recusandae
                        numquam odit fugiat nam. Ipsa suscipit repudiandae iure veniam,
                        accusamus et velit odit unde laudantium error tempore sint, temporibus
                        placeat consequatur? Placeat, officiis?
                    </p>
                </div>
                <div style={show ? {...style4} : {...style3} }>
                    <a href="/articles">
                        <Image
                            className="overflow-hidden h-[316px] w-[40vw] rounded-tr-[4rem] rounded-br-2xl"
                            src={Insp}
                            alt="Inspire Image"
                            width={500}
                            height={500}>
                        </Image>
                    </a>
                </div>
            </div>
        </div>
    );
}