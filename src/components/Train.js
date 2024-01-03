import React from "react";
import css from "./Train.css";

export default function Train() {
  return (
    <>
      <section id="home-t">
        <h1>Training That Works For All</h1>
        <p>
          Whether you’re a workout newbie or a fitness pro, our coaches lead
          team and one-on-one workouts that actually work. Workouts are designed
          using science and experience to maximize calorie burn, build strength,
          and cultivate community.
        </p>
        <div className="mainfat">
          <div className="mainbox">
            <div className="manele">
              <div className="imag">
                <img
                  src="https://moonlit-pithivier-51e278.netlify.app/static/media/wer.218ee1fd6ae3a9c7aab9.jpg"
                  alt=""
                />
              </div>
              <div className="mp">
                <h3>FITNESS CONSULTATION</h3>
                <p>
                  Through a short survey, conversation, and a movement
                  assessment, your coach will prescribe the perfect program to
                  get you started and on track to meet your fitness goals.
                </p>
              </div>
            </div>
            <div className="manele">
              <div className="imag">
                <img
                  src="https://moonlit-pithivier-51e278.netlify.app/static/media/jkl.779af5dbab95dbf19861.jpg"
                  alt=""
                />
              </div>
              <div className="mp">
                <h3>Team Workout Session</h3>
                <p>
                  Full-body workouts are designed to build strength and
                  endurance, using the energy of the group and the expertise of
                  the coach to maximize your results
                </p>
              </div>
            </div>
            <div className="manele">
              <div className="imag">
                <img
                  src="https://moonlit-pithivier-51e278.netlify.app/static/media/wer2.0416b0d9555cc99fec4c.jpg"
                  alt=""
                />
              </div>
              <div className="mp">
                <h3>one to one Training</h3>
                <p>
                  One-on-one personalized workouts with your coach are designed
                  to make you stronger from the inside out
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr/>

      <div id="where">
        <h1>We Are Present At</h1>
        <div class="locfat">
          <div class="loc">
            <ul>
              <div class="small">
                <li>Painpat,Model Town</li>
                <div class="ss">Go</div>
              </div>
              <div class="small">
                <li>Jaipur,Jamdoli</li>
                <div class="ss">Go</div>
              </div>
              <div class="small">
                <li>Karnatka,Jaisal Road</li>
                <div class="ss">Go</div>
              </div>
              <div class="small">
                <li>Jammu,Mall Road</li>
                <div class="ss">Go</div>
              </div>
              <div class="small">
                <li>Punjab,Shaan Singh Road</li>
                <div class="ss">Go</div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
