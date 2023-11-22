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
    <main className="flex flex-col min-h-screen min-w-screen bg-campsite bg-cover text-white justify-center">
      <Logo />
      <Intro />
      <Acts />
      <Partners />
      <Details />
      <Forms />
      <Footer />
    </main>
  );
}
