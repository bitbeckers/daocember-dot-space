const Details = () => {
  const reasons = [
    {
      title: "Why?",
      copy: "To help people understand DAOs, design DAOs, build DAOs & grow DAOs",
    },
    {
      title: "What's going down?",
      copy: "2 weeks of talks, panels, demos, workshops & more - all about DAOs",
    },
    {
      title: "Who's it for?",
      copy: "Anyone who wants to learn about DAOs, or build a DAO",
    },
    { title: "When?", copy: "December 1st - 15th" },
    { title: "Where?", copy: "Online" },
    {
      title: "How much?",
      copy: "Free to attend, but you need to register",
    },
  ];
  return (
    <div className="flex flex-col space-y-4 text-center">
      {reasons.map((t, i) => (
        <div className="" key={i}>
          <p className="text-2xl">{t.title}</p>
          <p className="text-lg">{t.copy}</p>
        </div>
      ))}
    </div>
  );
};

export default Details;
