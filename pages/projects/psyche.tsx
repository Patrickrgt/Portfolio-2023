import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Image from "next/image";

function psyche() {
  return (
    <main>
      <Nav psyche="true"></Nav>
      <main className="text-white w-11/12 mt-24 rounded-md relative mx-auto">
        <div className=" flex">
          <section className="w-4/12">
            <h1 className="text-5xl mb-1">PSYCHE OF PAT</h1>
            <p className="text-xl">
              Personal project that reinforced stronger understanding of CSS web
              layouts.
            </p>

            <article className="mt-2">
              <a href="https://github.com/Patrickrgt/animereview">
                <Image src="/github.svg" width="50" height="50" />
              </a>

              <span className="ml-4">
                <a href="https://psycheofpat.com/">
                  <Image src="/web.svg" width="50" height="50" />
                </a>
              </span>
            </article>
          </section>

          <section className="animate-fade-in-up mx-auto">
            <img className="mx-auto" src={"/psyche.png"} alt="" />
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
            <h2 className="text-xl">N/A</h2>
          </article>

          <article className="m-6">
            <h2 className="text-xl lato uppercase font-bold tracking-wider">
              Skills
            </h2>
            <h2 className="text-xl">React</h2>
          </article>
        </div>

        <section>
          <h2 className="text-3xl">Purpose</h2>
          <p className="text-xl">
            PSYCHEOFPAT is a website curated towards my favorite pieces of
            media. There I include a scrollable navigation of the media with the
            STORY, my THOUGHTS, and REVIEW of each piece. Developed a stronger
            understanding of flexbox and transitions using React without
            excessive need of other libraries. Heightened confident in
            manipulating the DOM, React states and refractoring.
          </p>
        </section>
      </main>
      <Footer></Footer>
    </main>
  );
}

export default psyche;
