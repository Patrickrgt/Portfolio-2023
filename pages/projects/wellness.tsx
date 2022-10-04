import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Youtube from "../../components/Youtube.js";
import Image from "next/image";

function wellness() {
  return (
    <main>
      <Nav wellness="true"></Nav>
      <main className="text-white w-11/12 mt-24 rounded-md relative mx-auto">
        <div className="flex lg:flex-row flex-col">
          <section className="lg:w-4/12">
            <h1 className="text-5xl mb-1">WELLNESS</h1>
            <p className="text-xl">
              Web application that uses Spoonacular API where users can plan
              their meals by ingredient, set number of calories for each meal,
              and get recipe suggestions from their friends to stay motivated.
            </p>
            <article className="mt-2">
              <a href="https://github.com/Patrickrgt/CSCI665-GroupProject-WellnessApp">
                <Image src="/github.svg" width="50" height="50" />
              </a>
            </article>

            <article className="animate-fade-in-up bg-[#4D63E9] flex p-4 bg-opacity-90 rounded bottom-64 mt-6 mb-6 w-min mx-auto">
              <Youtube embedId="wZ9qdlRrBF8" width="250" height="250" />
            </article>
          </section>

          <section className="mx-auto animate-fade-in-up">
            <img className="mx-auto" src={"/wellness2.png"} alt="" />
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
            <h2 className="text-xl">Angular, Spoonacular</h2>
          </article>
        </div>

        <section>
          <h2 className="text-3xl">Purpose</h2>
          <p className="text-xl">
            The aim of this project was to create a web application that users
            can use to plan their daily meals. Users can set the number of
            calories they wish for the meals to have and or even specify
            ingredients they wish to include in the meals and our application
            will showcase all dishes that meet the requirements. The application
            also has a social feature where the user can follow other users and
            get recipe suggestions that their friends follow to keep them
            motivated.
            <br />
            <br />
            WellnessApp proposes a web application that provides users with the
            tools to find their desired meals while also helping them maintain a
            healthy calorie intake. Our purpose for the application is to
            inspire users to eat healthier and try new recipes as well as
            provide a good way to filter through and view and keep track of
            recipes. We wanted to create a social feature that would motivate
            users to add friends and recipes as well as recommend recipes to
            their friends.
          </p>
        </section>

        <img className="mt-6 mb-6 mx-auto" src={"/wellness.png"} alt="" />
      </main>
      <Footer></Footer>
    </main>
  );
}

export default wellness;
