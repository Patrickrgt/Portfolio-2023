import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Image from "next/image";

function aiko() {
  return (
    <main>
      <Nav aiko="true"></Nav>
      <main className="text-white w-11/12 mt-24 rounded-md relative mx-auto">
        <div className="flex lg:flex-row flex-col">
          <section className="lg:w-2/4 relative">
            <h1 className="text-5xl mb-1">AIKO VIRTUAL</h1>
            <div className="w-11/12">
              <p className="text-xl">
                Contributed to advisement in Product Development as well as
                growing a community and managing a moderator team.
              </p>
            </div>

            <article className="mt-2">
              <a href="https://opensea.io/collection/aikovirtual">
                <Image src="/opensea.svg" width="50" height="50" />
              </a>

              <span className="ml-4">
                <a href="https://aikovirtual.com/">
                  <Image src="/web.svg" width="50" height="50" />
                </a>
              </span>
            </article>
          </section>

          <section className="mt-6 mx-auto animate-fade-in-up">
            <img className="mx-auto max-h-fit" src={"/aiko.png"} alt="" />
          </section>
        </div>

        <div className="lg:flex pt-1 pb-1 justify-center items-center mx-auto bg-[#4D63E9] lg:w-fit m-12 rounded-md">
          <article className="m-6">
            <h2 className="text-xl lato uppercase font-bold tracking-wider">
              Role
            </h2>
            <h2 className="text-xl">Community Manager</h2>
          </article>

          <article className="m-6">
            <h2 className="text-xl lato uppercase font-bold tracking-wider">
              Team
            </h2>
            <h2 className="text-xl">
              Vinne, Kyo, Garrid, Matarelli, Crystal, Kiwi, Chase
            </h2>
          </article>

          <article className="m-6">
            <h2 className="text-xl lato uppercase font-bold tracking-wider">
              Skills
            </h2>
            <h2 className="text-xl">React</h2>
          </article>
        </div>

        <section>
          <h2 className="text-3xl">Goal</h2>
          <p className="text-xl">
            Aiko Virtual is a collection of 8,888 NFTs that are all about "Cyber
            Cute", an aesthetic that blends future tech with anime vibes to
            create a unique look with broad appeal and an even broader vision.
            Our goal is simple: create a premium concept straddling the line
            between art and fashion, the digital and physical, and East and
            West. Aikos represents a never-before-seen concept rich in lore and
            personalization. Visit{" "}
            <a href="https://www.aikovirtual.com">
              https://www.aikovirtual.com
            </a>{" "}
            for more details.
            <br />
            <br />
            Join us on our journey into the virtual unknown. Simply accept
            "A:"and become virtual.
          </p>
        </section>
      </main>
      <Footer></Footer>
    </main>
  );
}

export default aiko;
