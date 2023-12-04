import { promises as fs } from "fs";
import { Suspense } from "react";

import Details from "./components/Details";
import Intro from "./components/Intro";
import Logo from "./components/Logo";
import PartnersList from "./components/PartnersList";
import Acts from "./components/Acts";
import Schedule from "./components/Schedule";

export const revalidate = 600;

export default async function Home() {
  const involvedFile = await fs.readFile(
    process.cwd() + "/app/resources/involved.json",
    "utf8"
  );
  const involvedPartners: Partner[] = JSON.parse(involvedFile);

  const representedFile = await fs.readFile(
    process.cwd() + "/app/resources/represented.json",
    "utf8"
  );
  const representedPartners: Partner[] = JSON.parse(representedFile);

  return (
    <main className="flex flex-col min-h-screen min-w-screen text-white justify-center">
      <div className="flex flex-col bg-sunrise-upper bg-[length:100%] bg-no-repeat bg-[#111028] bg-top text-white justify-center">
        <Logo />
        <Intro />
        <Acts />
      </div>
      <div className="flex flex-col bg-sunrise-lower bg-[length:100%] bg-no-repeat bg-[#111028] bg-bottom pb-[25vw] text-white justify-center">
        <PartnersList partners={involvedPartners} title="DAOists involved" />
        <PartnersList partners={representedPartners} title="DAOs represented" />
        <Details />
        <Suspense
          fallback={
            <p className="text-center text-xl my-12">Loading schedule...</p>
          }
        >
          <Schedule />
        </Suspense>
      </div>
    </main>
  );
}
