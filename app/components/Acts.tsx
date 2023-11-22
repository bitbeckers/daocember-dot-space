import Image from "next/image";

interface ActCardProps {
  name: string;
  subtitle: string;
  content: string[];
  children?: any;
}

const ActCard = ({ name, content, subtitle }: ActCardProps) => {
  return (
    <div className="flex flex-col h-100 w-70 items-center space-x-4">
      <h1 className="flex justify-center text-6xl font-bold font-pixelify text-[#FFA479] mb-2">
        {name}
      </h1>
      <h2 className="flex justify-center text-2xl font-semibold font-pixelify mb-4">
        {subtitle}
      </h2>
      <div className="flex flex-col flex-grow bg-white bg-opacity-10 border-white border-2 rounded-md p-4">
        <ul className="list-disc list-inside">
          {content.map((t, i) => (
            <li key={i} className="flex flex-col items-center text-center">
              {t}
              {i < content.length - 1 ? (
                <hr className="w-2/3 mx-auto my-2" />
              ) : undefined}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Forms = () => {
  const forms = [
    {
      name: "Act I",
      subtitle: "Wait wut?",
      content: [
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
      name: "Act II",
      subtitle: "DAO summoning",
      content: [
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
      name: "ACT III",
      subtitle: "DAO thriving",
      content: [
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
  return (
    <div className="max-w-screen flex flex-col mt-10 justify-center mb-10">
      <div className="flex flex-row space-x-6 justify-center m-4 mb-10">
        {forms.map((t, i) => (
          <ActCard
            key={i}
            name={t.name}
            content={t.content}
            subtitle={t.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default Forms;
