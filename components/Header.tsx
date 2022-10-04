import React from "react";
import Image from "next/image";
import { useTypedWord } from "./useTypedWord";
import Experience from "../components/Experience";

const words = [
  "Full Stack Developer.",
  "Graphic Designer",
  "Building Products.",
  "Leading Teams.",
];

function Header() {
  const word = useTypedWord(words);
  return (
    <main className="w-4/5 justify-center items-center">
      <div className="flex flex-row justify-center items-center">
        <img
          className="ml-16 object-contain h-96 rounded-md animate-fade-in-down"
          src="phos.png"
          alt=""
        />
        <div className="w-3/6 ml-16">
          <h1 className="text-5xl	text-white">
            Patrick Torres
            <br />
            <span className="blinking-cursor"> {word}</span>
            <br />
          </h1>

          <p className="text-2xl	text-white">
            I enjoy art, web3, collect NFTs, admire fashion design and
            occasionally attend anime conventions.
          </p>
          <article className="mt-2">
            <a href="https://github.com/Patrickrgt">
              <Image src="/github.svg" width="50" height="50" />
            </a>

            <span className="ml-4">
              <a href="https://www.linkedin.com/in/patrick-torr/">
                <Image src="/linkedin.svg" width="50" height="50" />
              </a>
            </span>
          </article>
        </div>
      </div>
      <div className="w-4/5 mx-auto">
        <Experience> </Experience>
      </div>
    </main>
  );
}

export default Header;
