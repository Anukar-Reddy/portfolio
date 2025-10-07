import React from "react";
import "./About.css";
import Navbar from "../NAVBAR/Navbar.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faMobile,
  faMicrochip,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <div className="about">
      {/* <div className='about_navbar'>
            <Navbar/>
        </div> */}
      <div className="about_section">
        <div className="about_section1">
          <h1 style={{ marginBottom: "1vh" }}>About Me</h1>
          <div className="line1"></div>
        </div>
        <div className="text">
          <p>
            I'm Anukar Reddy, a student at brilliant group of institution, with a passion for
            creative direction and UI/UX design. I'm currently studying and
            exploring the realms of web development and print media. I find
            great satisfaction in transforming intricate problems into elegant,
            user-friendly, and visually appealing designs
          </p>
          <p>
            My job is to build your website so that it is functional and
            user-friendly but at the same time attractive. Moreover, I add
            personal touch to your product and make sure that is eye-catching
            and easy to use. My aim is to bring across your message and identity
            in the most creative way. I created web design for many famous brand

          </p>
        </div>
        <div className="about_section2">
          <h2>What I'm Doing</h2>
          <div className="about_work">
            <div className="about_work_info_box">
              <div className="about_work_image">
                <FontAwesomeIcon icon={faDesktop} size="2x" />
              </div>
              <div className="about_work_info">
                <h4>Front_End Development</h4>
                <p>
                  Passionate Front-End Developer skilled in building responsive, user-friendly web applications 
                  using modern technologies like HTML, CSS, JavaScript, and React. Focused on creating clean UI 
                  designs and seamless user experiences
                </p>
              </div>
            </div>
            <div className="about_work_info_box">
              <div className="about_work_image">
                <FontAwesomeIcon icon={faMicrochip} size="2x" />
              </div>
              <div className="about_work_info">
                <h4>Back_End Development</h4>
                <p>
                  Back-End Developer experienced in building scalable and secure server-side applications. 
                  Skilled in working with databases, APIs, and frameworks to ensure smooth data flow and
                   application performance
                </p>
              </div>
            </div>
            
            <div className="about_work_info_box">
              <div className="about_work_image">
                <FontAwesomeIcon icon={faChartSimple} size="2x" />
              </div>
              <div className="about_work_info">
                <h4>Problem Solving</h4>
                <p>
                  Strong problem-solving skills with the ability to analyze complex challenges, 
                  break them into manageable steps, and deliver efficient solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
