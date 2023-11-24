"use client";
import Details from "./components/Details";
import Intro from "./components/Intro";
import Logo from "./components/Logo";
import Partners from "./components/Partners";
import Forms from "./components/Forms";
import Footer from "./components/Footer";
import Acts from "./components/Acts";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen min-w-screen text-white justify-center">
      <div className="flex flex-col bg-sunrise-upper bg-cover text-white justify-center">
        <Logo />
        <Intro />
        <Acts />
      </div>
      <div className="flex flex-col bg-sunrise-lower bg-[length:100%] bg-no-repeat bg-[#111028] bg-bottom pb-[25vw] text-white justify-center">
        <Partners />
        <Details />
        <Forms />
      </div>
    </main>
  );
}
