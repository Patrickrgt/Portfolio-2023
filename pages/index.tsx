import type { NextPage } from "next";
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Experience from "../components/Experience";
import Tab from "../components/Tab";
import Footer from "../components/Footer";

const Home: NextPage = (props: any) => {
  const { project, projectImg } = props;

  return (
    <>
      <Head>
        <meta
          name="Pat's Portfolio"
          content="Full Stack Developer, Designer, Art Enjoyer."
        />
      </Head>
      <div>
        <Nav></Nav>
        <div className="flex min-h-screen flex-col items-center justify-center py-3 mt-32">
          <Header></Header>
          <div className="lg:w-3/4 mx-auto">
            <Experience />
          </div>
          <Tab
            project={"SALVEX"}
            projectImg={"salvex.png"}
            tools={"react, express, puppeteer, firebase, firestore"}
          ></Tab>
          <Tab
            project={"WELLNESS"}
            projectImg={"wellness.png"}
            tools={"angular, spoonacular"}
          ></Tab>
          <Tab
            project={"PSO2 SCRATCH TICKET DATABASE"}
            projectImg={"pso2.png"}
            tools={"react, python, firebase, firestore"}
          ></Tab>
          <Tab
            project={"SHVRKBOY SNEAKERS"}
            projectImg={"shvrkboy.png"}
            tools={"react, puppeteer"}
          ></Tab>
          <Tab
            project={"PSYCHE OF PAT"}
            projectImg={"psyche.png"}
            tools={"react"}
          ></Tab>
          <Tab
            project={"AIKO VIRTUAL"}
            projectImg={"aiko.png"}
            tools={
              "COMMUNITY MANAGEMENT, TEAMWORK, LEADERSHIP, PROBLEM SOLVING"
            }
          ></Tab>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
