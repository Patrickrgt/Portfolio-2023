import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useAnimation, motion } from "framer-motion";
import { InView } from "react-intersection-observer";

function Tab({ project, projectImg, first, tools }: any) {
  const [inView, setInView] = React.useState(false);

  return (
    <main
      className={
        inView
          ? "animate-fade-in-up w-11/12 bg-[#4D63E9] mt-24 rounded-md relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-101 hover:shadow-lg shadow-indigo-500/40 duration-300 "
          : "w-11/12 bg-[#4D63E9] mt-24 rounded-md relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-101 hover:shadow-lg shadow-indigo-500/40 duration-300 "
      }
    >
      <div>
        <InView onChange={setInView}>
          <Link href={`/projects/${project.toLowerCase().split(" ")[0]}`}>
            <article className="flex lg:h-90-screen cursor-pointer">
              <img
                className="mx-auto my-auto h-5/6 object-cover object-center"
                src={
                  projectImg
                    ? projectImg
                    : "https://via.placeholder.com/150C/O https://placeholder.com/"
                }
                alt=""
              />
            </article>
          </Link>
        </InView>

        <section className="p-6 lg:absolute lg:bottom-12 lg:left-12 bg-[#4D63E9] rounded-md">
          <h1 className=" text-white text-5xl">
            {project ? project : "Insert Title"}
          </h1>
          <h1 className=" text-white text-2xl uppercase">
            {tools ? tools : "Insert Tools"}
          </h1>
        </section>
      </div>
    </main>
  );
}

export default Tab;
