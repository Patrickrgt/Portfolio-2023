import React from "react";

function Experience() {
  return (
    <div>
      <div className="mx-auto p-8">
        <div className="">
          <div className="tab overflow-hidden shadow-md animate-fade-in-down">
            <input
              className="absolute opacity-0"
              id="tab-multi-one"
              type="checkbox"
              name="tabs"
            />
            <label
              className="text-white bg-[#4D63E9] text-xl lg:text-2xl block p-3 lg:p-5 rounded-r-md leading-loose cursor-pointer"
              htmlFor="tab-multi-one"
            >
              <img src="aikologo.png" className="inline aiko-logo" alt="" />{" "}
              Aiko Virtual
            </label>
            <div className="tab-content bg-[#4D63E9] overflow-hidden  text-white  leading-normal">
              <p className="text-xl p-5 uppercase tracking-wider font-bold lato">
                Software Developer
                <br />
                <span>Remote</span>
                <br />
                <span>Aug 2022 - Present</span>
              </p>
              <p className="text-xl p-5">
                Software Engineer on the Aiko Virtual Core Team. Implemented an
                interactive Discord bot that was used to incentivize user
                participation and engagement through the use of rewards.
                Developed a web app using React, Styled-Components, and useDApp
                frameworks that allowed users to view and redeem NFT stamps for
                prizes in a rewards program. Created a set of personality
                quizzes using JavaScript, which were used to match users with
                shared interests and facilitate connection-building within the
                community.
              </p>
              <p className="text-xl p-5 uppercase tracking-wider font-bold lato">
                Community Manager
                <br />
                <span>Remote</span>
                <br />
                <span>Feb 2022 - Present</span>
              </p>
              <p className="text-xl p-5">
                Community Manager on the Aiko Virtual Core Team. Grew the
                community by over 900% through the use of Discord and Twitter
                Spaces. Collaborated with artists and developers to execute
                successful community-building and brand awareness-boosting
                events, with over 200 participants. Managed a team of over 10
                moderators to build and maintain a positive relationship between
                Aiko and its community. Promoted to core team member due to
                exceptional performance and positive impact on the community.
              </p>
            </div>
          </div>
          <div className="tab w-full overflow-hidden mt-4 rounded-r-md shadow-md animate-fade-in-down">
            <input
              className="absolute opacity-0"
              id="tab-multi-two"
              type="checkbox"
              name="tabs"
            />
            <label
              className="text-white bg-[#4D63E9] text-xl lg:text-2xl block p-3 lg:p-5 leading-normal cursor-pointer"
              htmlFor="tab-multi-two"
            >
              <img
                src="shvrkboylogo.png"
                className="shvrkboy-logo inline aiko-logo"
                alt=""
              />{" "}
              SHVRK LLC
            </label>
            <div className="tab-content overflow-hidden  bg-[#4D63E9] text-white  leading-normal">
              <p className="text-xl p-5 uppercase tracking-wider font-bold lato">
                Freelance Reseller
                <br />
                <span>Remote</span>
                <br />
                <span>Aug 2018 - March 2022</span>
              </p>

              <p className="text-xl p-5">
                Maintaining an LLC and operating a six-figure revenue business
                of buying and selling merchandise.
              </p>
            </div>
          </div>
          <div className="tab w-full overflow-hidden mt-4 rounded-r-md shadow-md animate-fade-in-down">
            <input
              className="absolute opacity-0"
              id="tab-multi-three"
              type="checkbox"
              name="tabs"
            />
            <label
              className="text-white bg-[#4D63E9] text-xl lg:text-2xl block p-3 lg:p-5 leading-normal cursor-pointer"
              htmlFor="tab-multi-three"
            >
              <img src="p2plogo.png" className="shvrkboy-logo inline" alt="" />{" "}
              Passion2Progress
            </label>
            <div className="tab-content overflow-hidden  text-white  bg-[#4D63E9]  leading-normal">
              <p className="text-xl p-5 uppercase tracking-wider font-bold lato">
                Vice President, Lead Designer
                <br />
                <span>New York, NY</span>
                <br />
                <span>Oct 2017 - Oct 2018</span>
              </p>
              <p className="text-xl p-5">
                Collaborated with non-profit organizations in creating websites
                and campaigned towards their goals through hackathons. Mentored
                students in front-end code by hosting weekly workshops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
