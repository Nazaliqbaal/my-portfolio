import Image from "next/image";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <nav className="bg-[#212529] h-18 w-screen flex py-4 px-8 justify-between items-center">
      <div className="flex gap-3 items-center justify-center cursor-pointer">
        <h2
          className={`text-lg ${orbitron.className}`}
          style={{ letterSpacing: "8px" }}
        >
          NAZAL IQBAL
        </h2>
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
  );
}
