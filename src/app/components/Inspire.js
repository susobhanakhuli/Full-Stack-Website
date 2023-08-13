import PartInspire from "./PartInspire";

export default function Inspire() {
    return (
        <div className="bg-black rounded-t-lg">
            <div className="flex py-12 gap-6">
                <div className="text-white w-1/3 ml-10">
                    <h1><span className="text-yellow">DEG</span>T CUPLAR TDHUT RTE HIIY</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                        fugit facere non, adipisci sed nihil ipsum incidunt molestiae in
                        tempora impedit nostrum aperiam corrupti tenetur, dolores recusandae
                        numquam odit fugiat nam. Ipsa suscipit repudiandae iure veniam,
                        accusamus et velit odit unde laudantium error tempore sint, temporibus
                        placeat consequatur? Placeat, officiis?
                    </p>
                    <a href="/register">
                    <button className="custom-button-1 mt-8">
                        Join Us
                        </button>
                    </a>
                </div>
                <PartInspire />
            </div>
            <div className="bg-gray-950 h-6"></div>
        </div>
    );
}