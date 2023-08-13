"use client";
import { useState } from "react";

export default function Subscriber() {
    const [subscriber, setSubscriber] = useState({
        email: ""
    });

    const subscription = async (e) => {
        e.preventDefault();
        console.log(subscriber);
        try {
            const response = await fetch("http://localhost:8000/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(subscriber),
            });

            const data = await response.json();
            alert(data.message);
            // fetch("http://localhost:8000/subscribe", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(subscriber),
            // });
            //     .then((res) => res.json())
            // .then((data) => {
            //     alert(data.message);
            //     // console.log(data.message);
            // })
        }
        catch(err) {
            console.log(err);
        };
        // Do it this way if you want to clear the input field after submission
        // But for that you need to add value={subscriber.email} in the input tag
        setSubscriber({ email: "" });
    };

    return (
        <div>
            <h4 className="footer-description-heads">Subscribe</h4>
            <div className="mb-3">
                <input
                    type="email"
                    className="w-96 h-9 rounded-l-[4px] rounded-r-none outline-none"
                    placeholder="Recipient's Email-id/Username"
                    required
                    onChange={(e) => {
                        setSubscriber({email: e.target.value });
                    }}
                    value={subscriber.email}
                />
                <button
                    className="bg-yellow hover:bg-amber-500 text-black w-24 h-9 px-3 mt-[2px] rounded-l-none rounded-r-[4px]"
                    onClick={subscription}
                >
                    Subscribe
                </button>
            </div>
        </div>
    );
};