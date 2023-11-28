type ActCardInfo = {
  id: string;
  romanNumeral: string;
  title: string;
  topics: string[];
};

const actInfo: ActCardInfo[] = [
  {
    id: crypto.randomUUID(),
    romanNumeral: "I",
    title: "Wait wut?",
    topics: [
      "WTF are DAOs",
      "Why DAO, to DAO or not to DAO",
      "Types of DAOs",
      "Become The Best DAO Contributor",
      "The Art of DAOing",
      "Mission, Purpose & Personas",
      "Membership, Roles & Authorities",
      "Tools, Building Blocks & Mechanisms",
    ],
  },
  {
    id: crypto.randomUUID(),
    romanNumeral: "II",
    title: "DAO summoning",
    topics: [
      "Strategy, Focus & Prioritization",
      "Sustainability Models & Tokenomics",
      "Governance Patterns",
      "Building Healthy Communities",
      "Reputation, Rewards & Compensation",
      "Transparency, Accountability & Privacy",
      "Capture & Censorship Resistance",
      "Rhythms, Phases & Feedback Loops",
      "DAO Canvas",
    ],
  },
  {
    id: crypto.randomUUID(),
    romanNumeral: "III",
    title: "DAO thriving",
    topics: [
      "Internal & External Communication",
      "Product or Community Market Fit",
      "Conflict Resolution",
      "Funding & Resource Allocation",
      "Marketing, Growth & Scaling",
      "Legal Structures & Concerns",
      "Advisors, Stewards & Councils",
      "Death, Decomposition or Resurrection",
      "Future of DAOs & The Bigger Picture",
    ],
  },
];

const ActCard = ({ romanNumeral, topics, title }: ActCardInfo) => {
  return (
    <article className="sm:w-2/3 md:w-auto sm:flex flex-col mb-6">
      <h5 className="text-lg text-center font-bold font-pixelized text-[#FFA479] uppercase">
        Act {romanNumeral}
      </h5>
      <h2 className="text-lg md:text-xl text-center font-semibold font-pixelized mb-4">
        {title}
      </h2>
      <div className="flex-grow bg-white/10 backdrop-blur-md border-s-[#FFA479] border-s-4 sm:rounded-md p-4">
        <ul>
          {topics
            .map((topic) => {
              return { id: crypto.randomUUID(), topic };
            })
            .map(({ id, topic }) => (
              <li
                key={id}
                className="text-base text-center p-2 border-b-[1.5px] border-b-white/30 last-of-type:border-none"
              >
                {topic}
              </li>
            ))}
        </ul>
      </div>
    </article>
  );
};

const Acts = () => {
  return (
    <section className="sm:flex flex-col md:flex-row justify-center items-center md:items-stretch md:gap-10 py-10">
      {actInfo.map(({ id, romanNumeral, topics, title }) => (
        <ActCard
          id={id}
          key={id}
          romanNumeral={romanNumeral}
          topics={topics}
          title={title}
        />
      ))}
    </section>
  );
};

export default Acts;
