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
                Aiko Virtual is a project that presents a collection of 8,888
                non-fungible tokens, embodying the 'Cyber Cute' aesthetic - a
                fusion of futuristic technology and anime influences, resulting
                in a distinct and widely appealing appearance. Our objective is
                to establish a premium concept that bridges the gap between art,
                fashion, the digital realm, and the physical realm, as well as
                between Eastern and Western cultures. The Aikos represent an
                unprecedented concept, brimming with backstory and customization
                options. For further information, please visit our website at{" "}
                <a href="https://aikovirtual.com">https://aikovirtual.com.</a>
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
            <h2 className="text-xl">Software Engineer and Community Manager</h2>
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
            <h2 className="text-xl">
              Community Management, Teamwork, Leadership, Problem Solving
            </h2>
          </article>
        </div>

        <section>
          <h2 className="text-3xl">Experience</h2>
          <p className="text-xl">
            I had the opportunity to receive guidance and acquire knowledge from
            seasoned veterans in the cryptocurrency industry, Kiwi and Chase, on
            the development of decentralized applications utilizing web3
            technology. I also developed bots for the Community platform
            Discord, aimed at delivering immersive and engaging user experiences
            across the web and social media platforms. Implemented an
            interactive Discord bot that was used to incentivize user
            participation and engagement through the use of rewards. Developed a
            web app using React, Styled-Components, and useDApp frameworks that
            allowed users to view and redeem NFT stamps for prizes in a rewards
            program. Created a set of personality quizzes using JavaScript,
            which were used to match users with shared interests and facilitate
            connection-building within the community.
          </p>
        </section>
      </main>
      <Footer></Footer>
    </main>
  );
}

export default aiko;
