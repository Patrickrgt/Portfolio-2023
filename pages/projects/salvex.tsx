import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Youtube from "../../components/Youtube.js";
import Image from "next/image";

function salvex() {
  return (
    <main>
      <Nav salvex="true"></Nav>
      <main className="text-white w-11/12 mt-24 rounded-md relative mx-auto">
        <div className="flex">
          <section className="w-2/4">
            <h1 className="text-5xl mb-1">SALVEX</h1>

            <p className="text-xl">
              Health focused project that applied leadership abilities under
              group setting, understanding of algorithm design and application
              integration of a populated database of 3000+ entries.
            </p>
            <article className="mt-2">
              <a href="https://github.com/Patrickrgt/SLAVEX">
                <Image src="/github.svg" width="50" height="50" />
              </a>

              <span className="ml-4">
                <a href="https://www.asksalvex.com/">
                  <Image src="/web.svg" width="50" height="50" />
                </a>
              </span>
            </article>
            {/* <div className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4"> */}
            <article className="animate-fade-in-up bg-[#4D63E9] flex p-4 bg-opacity-90 rounded bottom-64 mt-6 mb-6 w-min mx-auto">
              <Youtube embedId="dZeNel6Wexw" width="250" height="450" />
            </article>
            {/* </div> */}
          </section>

          <section className="animate-fade-in-up mx-auto">
            <img className="mx-auto" src={"/salvex.png"} alt="" />
          </section>
        </div>

        <div className="flex justify-center items-center mx-auto bg-[#4D63E9] w-fit m-12 rounded-md">
          <article className="m-6">
            <h2 className="text-xl lato uppercase font-bold tracking-wider">
              Role
            </h2>
            <h2 className="text-xl">
              Full Stack Developer, UX / UI / Development
            </h2>
          </article>

          <article className="m-6">
            <h2 className="text-xl lato uppercase font-bold tracking-wider">
              Team
            </h2>
            <h2 className="text-xl">
              Maria-Victoria V., Matthew W., Isabella M.
            </h2>
          </article>

          <article className="m-6">
            <h2 className="text-xl lato uppercase font-bold tracking-wider">
              Skills
            </h2>
            <h2 className="text-xl">
              React, Express, Puppeteer, Firebase, Firestore
            </h2>
          </article>
        </div>

        <section>
          <h2 className="text-3xl">Problem</h2>
          <p className="text-xl w-4/12">
            Inability to find timely and adequate healthcare because of
            inconsistent self-diagnosis tools and feedback without a clear track
            to find healthcare providers who can assist.
          </p>
        </section>
        <section>
          <h2 className="mt-6 text-3xl">Solution</h2>
          <p className="text-xl">
            Salvex is a self-diagnosis tool which maps user committed symptoms
            to matched diseases based on a calculated probability and returns
            the resultant disease and its definition to the user. The symptoms
            offered for user commitment and the diseases returned are ranked by
            the order of the calculated probability to help guide user input and
            to satisfy the requirement of consistent results. Creating using
            React, Cloud Firestore, Firebase Cloud Functions and Puppeteer. Most
            challenging part was the algorithm design to determine probability
            of a diesease based off user symtpoms. We calculate the matched
            disease based on a reoccuring sum of the symptom occurrence in
            respect to the disease by dividing by the overall disease occurance.
            At the end of the calculation we multiply by one hundred to get a
            percentage. This percentage is documented for each of the matching
            diseases based on the user symptom list.
          </p>
        </section>
        <section>
          <img className="mt-6 mb-6 mx-auto" src={"/salvex2.png"} alt="" />
        </section>
      </main>
      <Footer></Footer>
    </main>
  );
}

export default salvex;
