"use client";

import { Orbitron } from "next/font/google";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const orbitron = Orbitron({ weight: "400", subsets: ["latin"], preload: true });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const menuItems = [
    { id: 1, text: "ABOUT", href: "#about" },
    { id: 2, text: "PROJECTS", href: "#projects" },
    { id: 3, text: "CONTACTS", href: "#contacts" },
  ];

  const cardData = [
    {
      id: 1,
      title: "Movie OTT",
      description:
        "Movie OTT streaming platform, offers an immersive entertainment experience. With this app, users can sign up and sign in, enabling them to search for their favorite movies, TV shows, and series.",
      demoLink: "https://movie-ott-watch.netlify.app/",
      backgroundImage: "/movie-ott-bg.png",
    },
    {
      id: 2,
      title: "Truth or Dare",
      description:
        "This is a simple web-based 'Truth or Dare' game where users can play and enjoy the classic party game virtually.",
      demoLink: "https://play-truth-or-dare.netlify.app/",
      backgroundImage: "/truth-dare-bg.png",
    },
    {
      id: 3,
      title: "Blood Pressure checker",
      description:
        "Blood Pressure State Checker is a web application designed to help users monitor their blood pressure readings using diastolic (dia) and systolic (sys) values.",
      demoLink: "https://smartbp-checkbloodpressure.netlify.app/",
      backgroundImage: "/smartbp-bg.png",
    },
    {
      id: 4,
      title: "Splitter App",
      description:
        "Movie OTT streaming platform, offers an immersive entertainment experience. With this app, users can sign up and sign in, enabling them to search for their favorite movies, TV shows, and series.",
      demoLink: "https://split-tip-app.netlify.app/",
      backgroundImage: "/splitter-bg.png",
    },
  ];

  return (
    <div className="styled-scrollbar ">
      <nav
        className={`bg-[#003566] h-16 max-w-screen flex py-4 px-8 justify-between items-center max-h-screen sticky top-0  ${orbitron.className} z-10`}
      >
        <div className="flex gap-3 items-center justify-center cursor-pointer text-xs md:text-sm">
          <h5 className="text-gray-300 tracking-[.3em] ">NAZAL IQBAL</h5>
          <div className="spinner">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className="text-[#edf2f4] flex gap-8 justify-center cursor-pointer text-sm tracking-wider">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="relative before:content-[''] before:absolute before:block before:w-full before:h-[1.5px] 
    before:bottom-0 before:left-0 before:bg-white
    before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
    before:transition before:ease-in-out before:duration-300 hidden md:block"
            >
              <Link href={item.href}>
                <span>{item.text}</span>
              </Link>
            </li>
          ))}

          <li className="block md:hidden">
            <input
              hidden
              className="check-icon"
              id="check-icon"
              name="check-icon"
              type="checkbox"
              onClick={handleClick}
            />
            <label className="icon-menu" htmlFor="check-icon">
              <div className="bar bar--1"></div>
              <div className="bar bar--2"></div>
              <div className="bar bar--3"></div>
            </label>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <div className="bg-black fixed top-16 left-0 right-0 p-4 block md:hidden z-50 opacity-90">
          <ul className="text-white flex flex-col gap-4 justify-center cursor-pointer text-sm tracking-wider text-center">
            {menuItems.map((item) => (
              <li key={item.id} className="hover:scale-105 duration-200">
                <Link href={item.href}>
                  <span>{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <main className="p-6 md:p-24 scroll-smooth bg-white text-black">
        <section className="text-lg">
          <div className="space-y-2 mb-10 md:mb-14">
            <p className="text-xl md:text-2xl font-poppins">Hi, I am</p>
            <h1 className="text-3xl md:text-5xl font-semibold">
              Nazal Mohammed Iqbal
            </h1>
            <p>FRONT END WEB DEVELOPER</p>
          </div>
          <div className="space-y-8 mb-12">
            <h2 className="text-xl md:text-2xl">
              I like to craft frontend products with great user experience!
            </h2>
            <p className="text-lg">
              Passionate about turning ideas into reality, I leverage my skills
              in frontend technologies to build robust and scalable web
              solutions. My goal is to create digital experiences that not only
              meet but exceed user expectations.
            </p>
          </div>

          <Link
            href="https://drive.google.com/file/d/13yhNBQF9Ke-oK9Q0bcBdP0T8jsjnk5Q0/view?usp=sharing"
            className="bg-[#003566] flex min-w-max text-sm md:text-base gap-2 p-2 rounded-md items-center text-white opacity-75 hover:scale-105 w-1/6 justify-center hover:ease-in duration-200"
          >
            <span>Check out my Resume!</span>
          </Link>
        </section>

        {/* About Section */}

        <section id="about" className="p-20 md:pt-28">
          <h1 className=" text-center text-5xl" id="headings">
            About Me
          </h1>
          <div className="flex flex-col-reverse md:flex-row gap-4 justify-around mt-16 items-center text-xl">
            <div className="text-lg md:w-3/5">
              <h3>
                Hello! My name is Nazal Mohammed Iqbal. I completed my college
                education at PA College of Engineering, specializing in Computer
                Science Engineering. My journey into web development began with
                the excitement of building small websites using HTML and CSS,
                which eventually sparked my passion for pursuing a career as a
                web developer. Currently, I am employed as a web developer at
                Codecraft Technologies, Mangalore, where I have had the
                opportunity to work on multiple projects, honing my skills in
                various technologies including React, Next.js, Angular, .NET,
                and delving into Node.js and Nest.js. I am passionate about
                crafting innovative solutions and leveraging technology to
                create impactful digital experiences.
              </h3>
            </div>
            <div className="flex justify-center items-center md:w-2/5 ">
              <Image
                src="/me.jpg"
                width={300}
                height={10}
                alt="My pic"
                className="rounded-full"
              />
            </div>
          </div>
        </section>
        <section id="projects" className="pt-28">
          <h1 className="text-center text-5xl" id="headings">
            My Projects
          </h1>
          <div className="flex flex-wrap justify-around gap-14 mt-16">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="relative flex w-full md:w-72 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:scale-105 ease-out duration-200 "
              >
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                  <Image
                    src={card.backgroundImage}
                    alt=""
                    width={100}
                    height={100}
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h5 className="mb-2  text-xl font-semibold  tracking-normal">
                    {card.title}
                  </h5>
                  <p>{card.description}</p>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href={card.demoLink}
                    data-ripple-light="true"
                    type="Link"
                    className="rounded-lg bg-[#003566] py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    Preview
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="contacts" className="pt-28">
          <h1 className="text-center text-5xl" id="headings">
            Contacts
          </h1>
          <div className="mt-16 flex flex-col items-center gap-8 md:flex-row justify-around ">
            <div className="space-y-8 md:w-1/2 w-full">
              <h1 className="text-3xl text-center md:text-left ">
                You can contact me at
              </h1>
              <div className="flex justify-around md:flex-col md:gap-4">
                <div className="flex gap-3 ">
                  <Phone />
                  +91 6282810365
                </div>
                <Link
                  className="flex gap-3"
                  href="mailto:nazaliqbal786@gmail.com"
                >
                  <Mail />
                  nazaliqbal786@gmail.com
                </Link>
              </div>
            </div>

            <div className="main">
              <div className="up">
                <Link className="card1" href=" https://wa.me/6282810365">
                  <svg
                    className="whatsapp"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height="30"
                    width="30"
                  >
                    <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.916 9.916 0 0 0 4.737 1.206h.005c5.46 0 9.908-4.448 9.913-9.913A9.872 9.872 0 0 0 19 4.908h.001ZM11.992 20.15A8.216 8.216 0 0 1 7.797 19l-.3-.18-3.117.818.833-3.041-.196-.314a8.2 8.2 0 0 1-1.258-4.381c0-4.533 3.696-8.23 8.239-8.23a8.2 8.2 0 0 1 5.825 2.413 8.196 8.196 0 0 1 2.41 5.825c-.006 4.55-3.702 8.24-8.24 8.24Zm4.52-6.167c-.247-.124-1.463-.723-1.692-.808-.228-.08-.394-.123-.556.124-.166.246-.641.808-.784.969-.143.166-.29.185-.537.062-.247-.125-1.045-.385-1.99-1.23-.738-.657-1.232-1.47-1.38-1.716-.142-.247-.013-.38.11-.504.11-.11.247-.29.37-.432.126-.143.167-.248.248-.413.082-.167.043-.31-.018-.433-.063-.124-.557-1.345-.765-1.838-.2-.486-.404-.419-.557-.425-.142-.009-.309-.009-.475-.009a.911.911 0 0 0-.661.31c-.228.247-.864.845-.864 2.067 0 1.22.888 2.395 1.013 2.56.122.167 1.742 2.666 4.229 3.74.587.257 1.05.408 1.41.523.595.19 1.13.162 1.558.1.475-.072 1.464-.6 1.673-1.178.205-.58.205-1.075.142-1.18-.061-.104-.227-.165-.475-.29Z"></path>
                  </svg>
                </Link>
                <Link
                  className="card2"
                  href="https://www.linkedin.com/in/nazal-iqbaal/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="linkedin"
                    height="1.6em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path>
                  </svg>
                </Link>
              </div>
              <div className="down">
                <Link className="card3" href="/truth-dare-bg.png">
                  <svg
                    className="github"
                    height="30px"
                    width="30px"
                    viewBox="0 0 30 30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
                </Link>
                <Link
                  className="card4"
                  href="https://www.instagram.com/nazal_iqbaal/?next=%2F"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0,0,256,256"
                    width="30px"
                    height="30px"
                    className="instagram"
                  >
                    <g
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="none"
                      textAnchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <g transform="scale(8,8)">
                        <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path>
                      </g>
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
