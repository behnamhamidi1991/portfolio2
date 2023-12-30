import Image from "next/image";

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
    </main>
  );
}
