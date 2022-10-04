import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Image from "next/image";

function shvrkboy() {
  return (
    <main>
      <Nav shvrkboy="true"></Nav>
      <main className="text-white w-11/12 mt-24 rounded-md relative mx-auto">
        <div className="flex lg:flex-row flex-col">
          <section className="lg:w-4/12">
            <h1 className="text-5xl mb-1">SHVRKBOY</h1>
            <p className="text-xl">
              Business related project with applied understanding of web
              scraping, API creation and cloud functions.
            </p>

            <article className="mt-2">
              <a href="https://github.com/Patrickrgt/shvrkboy">
                <Image src="/github.svg" width="50" height="50" />
              </a>

              <span className="ml-4">
                <a href="https://shvrkboy.com/">
                  <Image src="/web.svg" width="50" height="50" />
                </a>
              </span>
            </article>
          </section>

          <section className="mt-6 mx-auto animate-fade-in-up">
            <img className="mx-auto" src={"/shvrkboy.png"} alt="" />
          </section>
        </div>

        <div className="lg:flex pt-1 pb-1 justify-center items-center mx-auto bg-[#4D63E9] lg:w-fit m-12 rounded-md">
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
            <h2 className="text-xl">N/A</h2>
          </article>

          <article className="m-6">
            <h2 className="text-xl lato uppercase font-bold tracking-wider">
              Skills
            </h2>
            <h2 className="text-xl">React, Puppeteer</h2>
          </article>
        </div>

        <section>
          <h2 className="text-3xl">Purpose</h2>
          <p className="text-xl">
            SHVRKBOY Focuses on my journey as a reseller with an ABOUT section
            that highlights how I started, TESTIMONIALS to prove legitamacy,
            SALES that fetches revenue from several third-party platforms, and
            FUTURE that discuesses where I see myself in five years. Both
            desktop and mobile designs are curated with unique paralax
            experiences. For best experience please view on desktop. Created
            using React.js, Express.js, Heroku, Cloud Firestore, Firebase Cloud
            Functions, and Puppeteer. Hardest challenge was scraping Twitter to
            create an in-house API to fetch for replies under a tweet. Learned
            that Puppeteer works for logins as well and can bypass more secured
            logins that prevent automation with the Puppeteer-extra-stealth
            library.
          </p>
        </section>

        <img className="mt-6 mb-6 mx-auto" src={"/shvrkboy2.png"} alt="" />
      </main>
      <Footer></Footer>
    </main>
  );
}

export default shvrkboy;
