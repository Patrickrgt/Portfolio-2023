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
              className="text-white bg-[#4D63E9] text-2xl block p-5 rounded-r-md leading-loose cursor-pointer"
              htmlFor="tab-multi-one"
            >
              <img src="aikologo.png" className="inline aiko-logo" alt="" />{" "}
              Aiko Virtual
            </label>
            <div className="tab-content bg-[#4D63E9] overflow-hidden  text-white  leading-normal">
              <p className="text-xl p-5 uppercase tracking-wider font-bold lato">
                Community Manager
                <br />
                <span>Remote</span>
                <br />
                <span>Feb 2022 - Present</span>
              </p>
              <p className="text-xl p-5">
                Community Manager on the Aiko Virtual Core Team. We grew the
                Aiko community by more than 900% after engaging users through
                Discord and Twitter Spaces. We collaborate with artists and
                developers across the web3 space to organize and participate in
                community building and brand awareness boosting events, with
                audiences upwards of 200+. I have Conducted member feedback
                regularly to improve NFT collection prior to launch. I also
                manage a moderation team comprised of 10+ team members to
                develop and nurture the relationship between Aiko and its
                community. Have been promoted 3 times due to strong performance
                and community impact.
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
              className="text-white bg-[#4D63E9] text-2xl block p-5 leading-normal cursor-pointer"
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
                Managed an LLC that generated a six-figure revenue from buying
                and selling merchandise.
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
              className="text-white bg-[#4D63E9] text-2xl block p-5 leading-normal cursor-pointer"
              htmlFor="tab-multi-three"
            >
              <img
                src="p2plogo.png"
                className="shvrkboy-logo inline aiko-logo"
                alt=""
              />{" "}
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
