import React, { useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Image from "next/image";

function aboutme() {
  const [image, setImage] = useState("/aboutmefull.jpg");
  const [commission, setCommission] = useState(false);

  function handleMouseEnter(imagePath: any) {
    return () => {
      setImage(imagePath);
      setCommission(true);
    };
  }
  //
  return (
    <main>
      <Nav aiko="true"></Nav>
      <main className="text-white w-8/12 mt-24 rounded-md relative mx-auto">
        <div className="flex">
          <section className="mx-auto animate-fade-in-up bg-[#4D63E9] p-4 bg-opacity-90 rounded flex h-3/6">
            <img
              className="mx-auto self-center rounded transition-all"
              src={image}
              alt=""
            />
          </section>
          <section className="w-3/4 pl-5 relative">
            <h1 className="text-3xl">
              <span className="link link-underline link-underline-black">
                Hi, I'm Pat an aspiring Full-Stack Developer based in NYC.
              </span>
            </h1>
            <hr className="mt-5" />
            <p className="text-xl pt-5">
              graduated from New York Institute of Technology, receiving a B.S
              in Computer Science with a concentration in Big Data Management
              and Analytics.
              <br />
              <br />
              I'm passionate about building products with diverse teams and
              communities. Helping create a vision, collaborating with artists,
              developers and leaders to execute on projects.
              <br />
              <br />
              More recently I've worked with renowned artists Vinne and Kyo to
              create a collection of NFTs known as Aiko Virtual. Previously I
              was running an LLC selling limited sneakers and apparel. However,
              I'm always picking up new technologies and creating projects. I've
              learned during quarantine how important it is to stay connected
              and my position as a Community Manager at Aiko Virtual taught me
              to break out of my comfort zone and link with other creatives on
              the NFT space to build communities, connections and projects
              together.
              <br />
              <br />
              I've worked with a variety of frontend, backend and database
              technologies, specializing in full-stack development.
            </p>
            <hr className="mt-5 mb-5" />
            <h1 className="text-3xl">Outside of coding I also like . . .</h1>
            <span className="text-xl">
              <li>Digital Painting 🎨</li>
              <li>Music Production 🎵</li>
              <li>Anime Conventions 🌸</li>
              <li>
                Commissioning Art
                <span onMouseEnter={handleMouseEnter("/aboutme2full.png")}>
                  🗣
                </span>
              </li>
              {commission ? (
                <li>
                  Commission by <a href="https://twitter.com/Darr1o">Darrio</a>
                </li>
              ) : (
                ""
              )}
            </span>
          </section>
        </div>
      </main>
      <Footer></Footer>
    </main>
  );
}

export default aboutme;
