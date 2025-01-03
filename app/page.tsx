"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="app">
      <motion.div
        className="top-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Link href="/contact" className="contactBtn">
          <Image
            src="/contactg.gif"
            width={150}
            height={120}
            alt="contact"
            className="contactBtnImg"
          />
          <span className="contactText">Contact Me</span>
        </Link>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-xl tracking-widest font-semibold intro-text">
          I&apos;m Behnam Hamidi and I work as a{" "}
        </span>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 font-black text-[55px] my-3">
          Backend Developer
        </h1>
        <h2>
          {" "}
          <span> What&apos;s up? </span> Here you can discover my creative ideas
        </h2>
      </motion.div>

      <motion.div
        className="top-btnContainer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
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
      </motion.div>
    </main>
  );
}
