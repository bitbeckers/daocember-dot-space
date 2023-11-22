const Intro = () => {
  const text = [
    "DAOs are the future of coordination. Yet, since The DAO in ‘16, we watched countless DAOs struggle, wither & die.",
    "They say 90% of startups fail. For DAOs it's much worse.",
    "As if building useful things wasn’t hard enough, DAOists are also innovating on the governance front, using the latest (unfinished) tools, and so on.",
    "DAOcember is gathering DAO veterans from across the space, to pass on wisdom to the next generation of DAOists.",
    "DAO playbooks are yet unwritten, so let’s write some.",
  ];
  return (
    <div className="min-w-screen">
      <div className="max-w-xl space-y-8 mx-auto">
        {text.map((t, i) => (
          <p className="text-center text-xl" key={i}>
            {t}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Intro;
