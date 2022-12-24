import React from 'react';
import ProfilePic from '../../assets/images/WIN_20220907_10_34_27_Pro.jpg';

function About() {
    return (
        <section>
            <div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
            <div className="center">
				<img
					src={ProfilePic}
					alt="about-me"
					className="photo"
				/>
			</div>
            <div className="about-me">
                <p>
                    Hi I'm Kevin - an aspiring full-stack web developer based out of Bothell, Washington. My journey into tech started in after I left the Navy and pursued my associate's degree in Information Security and Digital Forensics at Edmonds Community College. Instead of finishing my degree I started a career as a Security Officer for Sound Transit in Seattle Washington.
                </p>
                <p>
                    I have a strong background in law enforcement, training, and security work. I spent 8 years as a US Navy Master at Arms 3rd Class Petty Officer. Learning all aspects of physical security, mobile patrols, harbor patrol, and training future officers. 
                </p>
                <p>
                    When I'm not coding, I enjoy time with my family and friends, building Lego sets, and taking vacations. My next big project is getting back into shape.
                </p>
            </div>
        </section>
    );
}

export default About;