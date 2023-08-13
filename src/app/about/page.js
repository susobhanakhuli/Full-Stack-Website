import Image from "next/image";
import "./about.css"
import Article1 from "../images/5.png";
import mem1 from "../images/m1.jpg";
import mem2 from "../images/m2.jpg";
import mem3 from "../images/m3.jpg";
import mem4 from "../images/m4.jpg";
import mem5 from "../images/m5.jpg";
import mem6 from "../images/m6.jpg";
import mem7 from "../images/m7.jpg";
import mem8 from "../images/m8.jpg";

export default function About() {
  return (
    <div className=" text-white">
      <div className="flex flex-col justify-center items-center">

        {/* Abous US part starts*/}
        <div className="flex flex-col bg-black justify-center items-center pt-10">
          <h5>
            About Us
          </h5>
          <h3 className="mt-8">
            Sportzal Fitness Center
          </h3>
          <p className="w-2/3 m-5 text-base md:text-lg">
            Welcome to Sportzal, where fitness is not just a goal, but a way of life. Our journey began in 1998 as a small fitness center that has now grown into a thriving community of individuals of all ages and fitness levels.

            Over the years, we have expanded our services to include personal training, group classes, nutrition counseling, and more. Our team of experienced trainers and coaches are committed to helping you achieve your fitness goals and lead a healthier, happier life.

            We are proud of how far we have come, and we are excited to continue growing and evolving. Our goal is to be the leading fitness center in the country, and we are working hard every day to make that a reality.

            Thank you for being a part of our journey. We look forward to continuing to serve you and help you achieve your fitness goals.

            Thank you for being a part of our journey. Together, let us continue to strive for greatness and redefine our limits.
          </p>
        </div>
        {/* About Us part ends */}

        {/* Faculty list part starts */}
        <div className="w-[100vw] bg-slate-200">
          <div className="flex flex-col flex-wrap my-6 justify-center items-center text-black">
            <h1>Our Team</h1>
            <div className="row-faculty-details">
              <div className="faculty-details">
                <Image className="faculty-image"
                  src={mem1}
                  alt="HOD Image"
                  width={500}
                  height={500}>
                </Image>
                <p className="faculty-name">Shraddha Gadit</p>
                <p className="faculty-role">HOD & Nutritionist</p>
              </div>
              <div className="faculty-details">
                <Image className="faculty-image"
                  src={mem2}
                  alt="Article Image"
                  width={500}
                  height={500}>
                </Image>
                <p className="faculty-name">Vishal Pevekar</p>
                <p className="faculty-role">Head of Faculty</p>
              </div>
              <div className="faculty-details">
                <Image className="faculty-image"
                  src={mem3}
                  alt="Article Image"
                  width={500}
                  height={500}>
                </Image>
                <p className="faculty-name">Ayaan Soni</p>
                <p className="faculty-role">Sr. Exercise Science Faculty</p>
              </div>
            </div>
            <div className="row-faculty-details">
              <div className="faculty-details">
                <Image className="faculty-image"
                  src={mem4}
                  alt="Article Image"
                  width={500}
                  height={500}>
                </Image>
                <p className="faculty-name">Akhil Kumar</p>
                <p className="faculty-role">Exercise Science Faculty</p>
              </div>
              <div className="faculty-details">
                <Image className="faculty-image"
                  src={mem5}
                  alt="Article Image"
                  width={500}
                  height={500}>
                </Image>
                <p className="faculty-name">Shreyash Gujarati</p>
                <p className="faculty-role">Exercise Science Faculty</p>
              </div>
              <div className="faculty-details">
                <Image className="faculty-image"
                  src={mem6}
                  alt="Article Image"
                  width={500}
                  height={500}>
                </Image>
                <p className="faculty-name">Karan Sonic</p>
                <p className="faculty-role">Exercise Science Faculty</p>
              </div>
            </div>
            <div className="row-faculty-details">
              <div className="faculty-details">
                <Image className="faculty-image"
                  src={mem7}
                  alt="Article Image"
                  width={500}
                  height={500}>
                </Image>
                <p className="faculty-name">Nikhil Desale</p>
                <p className="faculty-role">Exercise Science Faculty</p>
              </div>
              <div className="faculty-details">
                <Image className="faculty-image"
                  src={mem8}
                  alt="Article Image"
                  width={500}
                  height={500}>
                </Image>
                <p className="faculty-name">Nikita Nadkarni</p>
                <p className="faculty-role">Exercise Science Faculty</p>
              </div>
            </div>
          </div>
        </div>
        {/* Faculty list part ends */}

        {/* Black and White container Part starts */}
        <div className="flex flex-wrap items-center place-content-evenly bg-slate-200 p-6 text-black gap-6">
          {/* Black container Part starts */}
          <div className="about-container bg-black text-white">
            {/* <div className="membership-section"> */}
            <h3>Membership Plans and Pricing</h3>
            <p className="mt-5 pb-3 text-center">
              At Sportzal, we offer a variety of membership options to suit your fitness goals and lifestyle. Whether you are looking for individual training, group classes, or a combination of both, we have a plan that is right for you.
            </p>
            <div className="membership-options">
              <div className="membership-option">
                <h6>Basic Membership</h6>
                <p>
                  Access to our state-of-the-art gym facilities, including cardio and strength equipment.
                </p>
                <p className="price">$20/month</p>
              </div>
              <div className="membership-option">
                <h6>Premium Membership</h6>
                <p>
                  Unlimited access to all group fitness classes and personalized training sessions.
                </p>
                <p className="price">$50/month</p>
              </div>
              <div className="membership-option">
                <h6>Student Membership</h6>
                <p>
                  Discounted rates for students with valid student IDs. Full access to gym facilities and classes.
                </p>
                <p className="price">$10/month</p>
              </div>
              {/* <!-- Add more membership options as needed --> */}
            </div>
            <p className="special-offer mt-2">
              Special offer: Join now and get free suppliments of a year for free.
            </p>
            {/* </div> */}
            <button className="custom-button-1 hover:text-slate-200 mt-5 button-transition">
              Join Now
            </button>
          </div>
          {/* Black container Part ends */}

          {/* White container Part starts */}
          <div className="about-container bg-white">
            <h3>Mission and Values</h3>
            <p className="mt-5 pb-3">
              At Sportzal, our mission is to inspire and empower individuals to achieve their optimal health and wellness.
              Our core values guide everything we do:
              <span>1. Excellence:</span> We strive for excellence in every aspect of our services, from personalized training programs to state-of-the-art equipment. We believe in continuous improvement and always delivering the best.
              <span>2. Community:</span> We foster a sense of belonging and camaraderie among our members. We believe that together, we can achieve more. Our gym is a place where connections are made and friendships are formed.
              <span>3. Health and Wellness:</span> We prioritize the holistic well-being of our members. Beyond physical fitness, we emphasize mental and emotional wellness. Our goal is to help you lead a balanced and fulfilling life.
              <span>4. Personalization:</span> We recognize that every individual is unique. Our approach is personalized, with tailored fitness and nutrition plans that consider your goals, preferences, and limitations.
            </p>
            <button className="custom-button-3 button-transition">
              Join Now
            </button>
          </div>
          {/* White container Part ends */}
        </div>
        {/* Black and White container Part ends */}
      </div>

    </div>
  );
}
