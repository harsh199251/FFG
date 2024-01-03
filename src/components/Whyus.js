import React from "react";
import css from './Whyus.css'

export default function Whyus() {
  return (
    <>
      <section id="home-w">
        <div className="container">
          <h1>Why Us?</h1>
          <div className="para">
            <p>
              we are committed to providing a transformative fitness experience
              that caters to your individual goals and needs. Our
              state-of-the-art facilities boast a wide range of top-notch
              equipment and amenities to ensure your workouts are both enjoyable
              and effective.
            </p>
          </div>
        </div>
        <a href="https://www.youtube.com/watch?v=TfnQHo9eX6Q">
          <div>
            <button className="btn">Watch Here</button>
          </div>
        </a>
      </section>
      <hr/>

      <h1 className="primarycenter">Much More Here...</h1>
      <div className="muchmore">
        <div className="icon">
            <div className="image">
                <img src="https://moonlit-pithivier-51e278.netlify.app/static/media/support.3e4785a93e75e01ee960.webp"/>
            </div>
            <h3>Support</h3>
            <div className="parag">
                <p>What happens when you enroll in the top membership in India? You get a free, personalized Get Started Plan when you join. Our friendly, professional staff is trained to help you along your fitness journey, no matter how much support you need.</p>
            </div>
        </div>
        <div className="icon">
            <div className="image">
                <img src="https://moonlit-pithivier-51e278.netlify.app/static/media/tools.21a06e2c2e9ea75a22b0.webp"/>
            </div>
            <h3>Tools and Traing</h3>
            <div className="parag">
                <p>Getting to a healthier place is about more than going to the gym or availing a top gym membership. That’s why we offer personal training and classes when you’re here, and the right tools to keep you on track when you’re not.</p>
            </div>
        </div>
     </div>
     <div className="muchmore">
     <div className="icon">
            <div className="image">
                <img src="https://moonlit-pithivier-51e278.netlify.app/static/media/con.0d2079d2f9aa1d761aab.webp"/>
            </div>
            <h3>Convinience</h3>
            <div className="parag">
                <p>24/7 access to more than 4,500 locations worldwide and nearly 100 in India. You’re joining the most convenient gym with the best gym membership on the planet!</p>
            </div>
        </div>
        <div className="icon">
            <div className="image">
                <img src="https://moonlit-pithivier-51e278.netlify.app/static/media/com.339bdb75c366b8a4e98d.webp"/>
            </div>
            <h3>Community</h3>
            <div className="parag">
                <p>You’re not just joining a gym. You’re joining a supportive community of like-minded people who are here to give you the encouragement you need.</p>
            </div>
        </div>
     </div>
    <hr/>

    <h1 className="primarycenter">Family Benifits</h1>

    <section className="servicescontainer">
        <div id="services">
            <div className="box">
                <h3 className="hsecondary">Equipment</h3>
                <h5>Treadmills</h5>
                <h5>Ellipticals</h5>
                <h5>Exercise Cycles</h5>
                <h5>Stair Climbers</h5>
                <h5>Rowing Machines</h5>
                <h5>Free Weights</h5>
                <h5>Racks</h5>
                <h5>Synergy 360 Systems</h5>
            </div>
            <div className="box">
                <h3 className="hsecondary">Lifestyle</h3>
                <h5>Personal Training</h5>
                <h5>Team Workouts</h5>
                <h5>Tanning</h5>
                <h5>Adaptive Motion Trainers</h5>
                <h5>Spinning Cycles &amp; Classes</h5>
                <h5>Zumba Classes</h5>
                <h5>Cardio Classes</h5>
                <h5>Body Conditioning Classes</h5>
            </div>
            <div className="box">
                <h3 className="hsecondary">Services</h3>
                <h5>Anywhere Gym Access</h5>
                <h5>Wellness Programs</h5>
                <h5>24-Hour Security</h5>
                <h5>TVs And HDTVs</h5>
                <h5>Health Plan Discounts</h5>
                <h5>Convenient Parking</h5>
                <h5>Private Restrooms</h5>
                <h5>Private Showers</h5>
            </div>
        </div>
    <div className="enq">
    <a href="/"><div><button className="btn">Enquiry</button></div> </a></div>
    </section>
    </>
  );
}
