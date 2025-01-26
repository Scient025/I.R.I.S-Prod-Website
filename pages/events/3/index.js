import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';


const Event3 = () => {
  return (
    <>
      <div className={"eventPage"}>
        <div className={"overlay"}></div>
        <main className="container">
          <div className={"content"}>
            <div className={"eventImageContainer"}>
              {/* <Image
                src="/sephackathon.jpg"
                alt="IRIS Innovation Hackathon 2024"
                className={"eventImage"}
                width={800}
                height={500} 
              /> */ }
            </div>
            <h1 className={"title"}> I.R.I.S. Ice Breaker 2025 </h1>
            

            <div className={"eventDetails"}>
              <p>Date: 24th January 2025</p>
              <p>Venue: MIT-WPU Campus</p>
              <p>Host: IRIS </p>
            </div>
            <section className={"eventObjective"}> 
              <h3>Event Objective</h3>
              <ul>
                <li>
                To welcome and familiarize the new recruits with the IRIS team.
                </li>
                <li>
                To engage in interactive activities for a fun, lighthearted experience. 
                </li>
                <li>
                To discuss and exchange ideas for the upcoming events being planned by IRIS.
                </li>
              </ul>
              <div className={"sectionDivider"}></div>
            </section>
            <section className={"eventJourney"}> 
                
              <h3>How It Happened </h3>
              <p>Over 25+ members enthusiastically join the IRIS Ice Breaker 2025 session, along with the core team and existing members.s</p> 

              <ol>
                <li>Opening Session</li>
                <ul> 
                    <li> A brief introduction about IRIS, its mission, and vision was shared to inspire the new recruits.
                    </li>
                </ul>
                <li>Team Introductions</li>
                <ul> 
                    <li> A brief introduction about IRIS, its mission, and vision was shared to inspire the new recruits.
                    </li>
                </ul>
                <li>Ice Breaker Games & Activities</li>
                <ul>
                    <li>
                    Core members introduced themselves, including their roles and contributions to IRIS.
                    </li>
                    <li>New members were given the opportunity to introduce themselves and share their interests. </li>
                </ul>
                <li>Discussion on Upcoming Events</li>
                <ul>
                    <li>A brainstorming session was held to discuss the next big event planned by IRIS.</li>
                </ul>
                <li>Feedback and Closing Remarks</li>
                <ul>
                <li>New members shared their initial impressions and excitement about joining IRIS.</li>
                </ul>
                <ul>
                <li>The club President thanked everyone for their active participation and enthusiasm.</li>   
                </ul>
                <ul>
                <li>The event concluded with a group photo to commemorate the successful session.</li>
                </ul>
              </ol>
              <div className={"sectionDivider"}></div>
            </section>
            

           

            <section className={"eventHighlights"}>
              <h3>Session Highlights</h3>
              <ol>
                <li>Strengthened relationships among IRIS members, both old and new.</li>
                <li>Increased enthusiasm and involvement from the recruits. </li>
                <li>Valuable inputs and ideas gathered for the upcoming event.</li>
                <li>Fostered a collaborative and welcoming environment.</li>
              </ol>
              <div className={"sectionDivider"}></div>
            </section>


            <section className={"eventConclusion"}>
              <h3>Conclusion</h3>
              <p>
              The IRIS Ice Breaker 2025 successfully achieved its objectives of building team spirit, engaging recruits, and laying the foundation for future activities. The session reflected the vibrant and innovative spirit of IRIS and set a positive tone for the year ahead.
              </p>
              <div className={"sectionDivider"}></div>
            </section>

           <section className={"eventRegistration"}>
              <h3>Stay Connected </h3>
              <p>If you&apos;re interested in participating in future events or have any questions, feel free to reach out to us!
              <Link href="/contact" className={"registerBtn"}>
              Contact Us
              </Link>
              </p>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Event3;
