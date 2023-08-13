// For responsive screen always set screen size from sm to 2xl
// means small to large

// Always put the default value at first for responsive screen
// it is applicabe from xs till your mentioning size

// In resposive we can omit lower range and make it default by only naming style without xs, sm etc.
// and only use md, lg if require
// in such case first name the dafault, then as per screen

export default function About() {
    return (
        <section className="w-screen mt-12">
            <div className="flex flex-1 justify-start items-center flex-col gap-6">
                <h5 className="font-bold xs:text-xl sm:text-2xl md:text-4xl ">
                    Activites
                </h5>
                <p className="text-xl md:text-2xl uppercase font-light ">
                    EduHub Technology LTD.
                </p>
                {/* We can set arbitary value like instead of text-2xl we can define its size by text-[22px] */}
                <p className="w-3/5 text-center xs:text-[15px] md:text-[22px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ratione
                    praesentium, hic, quia minus aut deleniti nam sit vero quisquam iusto
                    eaque quis in. Totam molestiae laudantium magnam reiciendis magni.
                </p>
                <div className="flex xs:flex-col md:flex-row justify-center items-center gap-6">
                    <img
                        className="xs:w-3/4 md:w-1/4 shadow-lg rounded-xl hover:shadow-2xl hover:rounded-2xl"
                        src="https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_640.jpg"
                        alt="Library"
                    ></img>
                    <img
                        className="xs:w-3/4 md:w-1/4 shadow-lg rounded-xl hover:shadow-2xl hover:rounded-2xl"
                        src="https://cdn.pixabay.com/photo/2017/07/15/22/07/library-2507902_640.jpg"
                        alt="Coridor"
                    ></img>
                    <img
                        className="xs:w-3/4 md:w-1/4 shadow-lg rounded-xl hover:shadow-2xl hover:rounded-2xl"
                        src="https://cdn.pixabay.com/photo/2020/11/19/08/03/college-5757815_640.jpg"
                        alt="Main Building"
                    ></img>
                </div>
                {/* Here we use our custom theme font-fantasy which we define in tailwing config file */}
                <button className="border-red-500 border-2 p-2 rounded-md font-fantasy ">
                    View More
                </button>
            </div>
        </section>
    );
}
