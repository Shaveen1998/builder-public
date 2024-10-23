"use client";
import Image from "next/image";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const jobs = [
    "Company Portfolios",
    "Saas ",
    "Admin Dashboards",
    "Personal Websites",
  ];

  const animationContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/images/hero/hero.json",
      });
    }
  }, []);

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                We take care of {"   "}
              </h1>
              <div>
                <span className="text- mb-5 pr-16 text-black dark:text-white xl:text-hero ">
                  <Typewriter
                    options={{
                      strings: jobs,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>
              <p>
                We build beautiful products with the latest technologies and
                frameworks. We are a team of passionate developers and designers
                that love to build amazing products.
              </p>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-gif.gif"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-gif.gif"
                    alt="Hero"
                    fill
                  />
                  {/* <div ref={animationContainer}></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
