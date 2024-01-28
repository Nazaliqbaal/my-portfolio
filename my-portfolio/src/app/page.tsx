import Image from "next/image";
import { Poppins } from "next/font/google";
import { Github } from "lucide-react";
import Link from "next/link";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <nav className="bg-[#212529] h-18 w-screen flex py-4 px-8 justify-between items-center">
        <div className="flex gap-3 items-center justify-center cursor-pointer">
          <h2 style={{ letterSpacing: "8px" }}>NAZAL IQBAL</h2>
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

        <ul className="text-[#edf2f4] flex gap-8 justify-center cursor-pointer text-sm tracking-wider [&>li]:pb-1">
          <li
            className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
          >
            ABOUT
          </li>
          <li
            className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
          >
            PROJECTS
          </li>
          <li
            className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
          >
            CONTACT
          </li>
          <li
            className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
          >
            RESUME
          </li>
        </ul>
      </nav>
      <main className="p-24">
        <section className={`text-lg ${poppins.className}`}>
          <div className="space-y-2 mb-14">
            <p className="text-2xl font-poppins">Hi, I am</p>
            <h1 className="text-6xl font-semibold">Nazal Mohammed Iqbal</h1>
            <p className="text-[#adb5bd]">FULL STACK WEB DEVELOPER</p>
          </div>
          <div className="space-y-8 mb-12">
            <h2 className="text-3xl">
              I like to craft frontend products with great user experience.
            </h2>
            <p className="text-lg">
              Passionate about turning ideas into reality, I leverage my skills
              in frontend technologies to build robust and scalable web
              solutions. My goal is to create digital experiences that not only
              meet but exceed user expectations.
            </p>
          </div>

          <Link
            href="https://github.com/Nazaliqbaal"
            className="bg-white flex text-base gap-2 p-2 rounded-md items-center text-black opacity-75 hover:scale-105 w-1/6 justify-center"
          >
            <span>Check out my Github</span>
            <Github className="w-5 h-5" />
          </Link>
        </section>
      </main>
    </div>
  );
}
