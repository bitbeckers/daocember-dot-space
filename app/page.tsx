"use client";

const ballTexts = {
  Welcome: "Welcome to DAOcember!",
  DAOcember: "DAOcember 2023",
  Startdate: "December 1st",
  Moloch: "Slaying Moloch with eggnog",
};

const GRID_SIZE = 10;

import Ball from "./components/ball";
function getRandomBoolean() {
  // Set the probability of returning true to 30%
  const probability = 0.8;
  return Math.random() > probability;
}

const generateBalls = () => {
  let counter = 0;
  let totalField = GRID_SIZE * GRID_SIZE;

  const balls = [];
  for (let i = 0; i < totalField; i++) {
    const row = Math.floor(i / GRID_SIZE) + 1;
    const col = (i % GRID_SIZE) + 1;
    const isInRange = row >= 3 && row <= 8 && col >= 3 && col <= 8;

    if (isInRange) continue;
    if (getRandomBoolean() && counter < Object.keys(ballTexts).length) {
      balls.push(
        <Ball
          key={i}
          text={Object.values(ballTexts)[counter]}
          style={{
            gridRow: row,
            gridColumn: col,
          }}
        />
      );
      counter++;
    }
  }
  return balls;
};

export default function Home() {
  return (
    <main className="min-h-screen bg-cover bg-three-wise-summoners relative">
      <div className="grid grid-cols-10 grid-rows-10 p-24">
        {generateBalls()}
      </div>
    </main>
  );
}
