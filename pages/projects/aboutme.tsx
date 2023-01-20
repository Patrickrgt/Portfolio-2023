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
      <Nav></Nav>
      <main className="text-white w-8/12 mt-24 rounded-md relative mx-auto">
        <div className="lg:flex">
          <section className="mx-auto animate-fade-in-up bg-[#4D63E9] p-4 bg-opacity-90 rounded flex h-3/6">
            <img
              className="mx-auto self-center rounded transition-all"
              src={image}
              alt=""
            />
          </section>
          <section className="lg:w-3/4 lg:pl-5">
            <h1 className="mt-6 text-center text-2xl lg:text-3xl">
              <span className="link link-underline link-underline-black">
                Hi, I'm Pat an aspiring Full-Stack Developer based in NYC.
              </span>
            </h1>
            <hr className="mt-6" />
            <p className="text-xl pt-5">
              I am a current graduate student at New York Institute of
              Technology, pursuing a Master's in Computer Science.
              <br />
              <br />
              I am driven by a passion for building innovative products with
              diverse teams and communities. My experience collaborating with
              artists, developers, and leaders to bring a vision to life has
              prepared me for the dynamic and ever-evolving tech industry.
              <br />
              <br />
              Recently, I had the opportunity to work alongside renowned artists
              Vinne and Kyo to create a collection of NFTs known as Aiko
              Virtual. This project not only taught me the importance of staying
              connected during quarantine, but also helped me to break out of my
              comfort zone and connect with other creatives in the NFT space to
              build communities, connections, and projects together.
              <br />
              <br />
              As a Community Manager at Aiko Virtual, I gained valuable
              experience taking on multiple roles, and now as a Software
              Engineer on the team, I am continually learning and being mentored
              by veterans in the crypto and coding space. My skills in frontend,
              backend, and database technologies, combined with my
              specialization in full-stack development, make me a versatile and
              valuable asset to any team.
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
                Commissioning Art{" "}
                <span onClick={handleMouseEnter("/aboutme2full.png")}>📓</span>
              </li>
              {commission ? (
                <p>
                  Nice job finding the Easter Egg!
                  <br />
                  This commission is by{" "}
                  <a href="https://twitter.com/Darr1o">Darrio</a>
                </p>
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
