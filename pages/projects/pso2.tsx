import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Youtube from "../../components/Youtube.js";
import Image from "next/image";

function pso2() {
  return (
    <main>
      <Nav pso2="true"></Nav>
      <main className="text-white w-11/12 mt-24 rounded-md relative mx-auto">
        <div className="flex">
          <section className="w-3/4">
            <h1 className="text-5xl mb-1">PSO2 SCRATCH TICKET DATABASE</h1>
            <div className="w-5/6">
              <p className="text-xl">
                Consumer driven project with updating database that scrapes new
                information off several webpages using in-house API.
              </p>
            </div>
            <article className="mt-2">
              <a href="https://github.com/Patrickrgt/pso2db">
                <Image src="/github.svg" width="50" height="50" />
              </a>
            </article>

            <article className="animate-fade-in-up bg-[#4D63E9] flex p-4 bg-opacity-90 rounded bottom-64 mt-6 mb-6 w-min mx-auto">
              <Youtube embedId="n7PzEkzTNds" width="250" height="250" />
            </article>
          </section>

          <section className="animate-fade-in-up mx-auto">
            <img className="mx-auto" src={"/pso2.png"} alt="" />
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
            <h2 className="text-xl">
              React, Express, Puppeteer, Firebase, Firestore
            </h2>
          </article>
        </div>

        <section>
          <h2 className="text-3xl">Problem</h2>
          <p className="text-xl">
            Phantasy Star Online 2’s problem is that new players are usually
            overwhelmed with the amount of cosmetic items that are already in
            the game. The current amount of items in the game ranges from the
            thousands. With that many cosmetics involved, the user is likely to
            purchase something off the player marketplace and regret the
            purchase soon after for the sole reason that they will find
            something more appealing than the item they just bought. Something
            that seems rather silly is a common issue since finding the perfect
            cosmetic item in the game is a hassle. Scratch Ticket groups are
            also limited, so once a Scratch Ticket event ends, the Scratch
            Ticket is unlikely to come back. Items from the Scratch Ticket can
            be sold and traded however through the player marketplace. Most of
            the time, the newer player is unaware of the items that are no
            longer in rotation and miss the chance of obtaining or knowing about
            previous items. As mentioned before, the website displays all the
            scratch tickets and cosmetic items available, but searching through
            the official website is not elegant nor seamless. There is no real
            filter system offered and players will be blindly clicking and
            searching through Scratch Ticket links to find items they deem
            appealing. The in-game player marketplace is not as helpful either
            as the user interface displays only a small list of the current most
            popular
            <br />
            <br />
            items which are usually the current Scratch Tickets in rotation for
            the month. Our motivation was to save time for the player by
            improving the user interface and design for cosmetic searching. Our
            solution was offering a one-page web display integrated with a
            dynamic database of items to filter through.
          </p>
        </section>

        <section>
          <h2 className="text-3xl">Solution</h2>
          <p className="text-xl">
            Phantasy Star Online 2 needs an application that stores items within
            a database and lets a player filter items based on keyword or group
            values. Players are not usually aware of all the items in the game
            and feel limited as it takes time to search for items through the
            official web page. The game’s online market is fueled by cosmetic
            items. The application will effectively assist in helping users find
            what items they are looking for, inform them of the item’s name and
            set and further research that item within the in-game market.
          </p>
        </section>
      </main>
      <Footer></Footer>
    </main>
  );
}

export default pso2;
