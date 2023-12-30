import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="top-container">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-xl tracking-widest font-semibold intro-text">
          I&apos;m Behnam Hamidi and I work as a{" "}
        </span>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 font-black text-[55px] my-3">
          Frontend Developer
        </h1>
        <h2>
          {" "}
          <span> What&apos;s up? </span> Here you can discover my creative ideas
          ...{" "}
        </h2>
      </div>

      <div className="top-btnContainer">
        <div className="btnContainer">
          <Link
            href="/about"
            className="btn aboutBtn bg-gradient-to-r from-purple-700 to-cyan-600"
          >
            About Me
          </Link>
          <a href="/" className="btn cvBtn">
            Download My CV
          </a>
          <Link href="/hireme" className="btn hireBtn">
            Hire Me
          </Link>
        </div>
      </div>
    </main>
  );
}
