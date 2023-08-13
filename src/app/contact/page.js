export default function Contact() {
    return (
        <div className="flex flex-col items-center bg-black text-yellow">
            <h1>CONTACT US</h1>
            <div>
                <div className="container text-white">
                    <div className="form-section mx-auto py-10">
                        <form>
                            <div className="mb-3">
                                <div className="flex">
                                    <div className="flex flex-col mr-5">
                                        <label className="form-label" for="first-name">First name</label>
                                        <input
                                            id="first-name"
                                            placeholder="First name"
                                            aria-label="First name"
                                            type="text"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label for="last-name" className="form-label">Last name</label>
                                        <input
                                            type="text"
                                            id="last-name"
                                            placeholder="Last name"
                                            aria-label="Last name"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3 flex flex-col">
                                <label for="exampleInputEmail1" className="">Email address</label>
                                <input
                                    type="email"
                                    id="exampleInputEmail1"
                                    required
                                    placeholder="Enter your email"
                                    aria-describedby="emailHelp"
                                />
                                <div id="emailHelp" className="form-text text-white text-xs">
                                    We'll never share your email with anyone else.
                                </div>
                            </div>
                            <div className="mb-3 flex flex-col">
                                <label for="exampleFormControlTextarea1" className="form-label flex flex-col">Drop your feedback/query</label>
                                <textarea
                                    id="exampleFormControlTextarea1"
                                    required
                                    placeholder="Enter your message "
                                    rows="3"
                                ></textarea>
                            </div>
                            <button type="submit" className="bg-yellow hover:bg-black text-black hover:text-white border-2 border-yellow w-32 h-10 input-group-text rounded-lg">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}