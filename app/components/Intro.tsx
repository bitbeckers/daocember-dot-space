const Intro = () => {
  const text = [
    "DAOs are the future of coordination. Yet, since The DAO in ‘16, we watched countless DAOs struggle, wither & die.",
    "They say 90% of startups fail. For DAOs it's much worse.",
    "As if building useful things wasn’t hard enough, DAOists are also innovating on the governance front, using the latest (unfinished) tools, and so on.",
    "DAOcember is gathering DAO veterans from across the space, to pass on wisdom to the next generation of DAOists.",
    "DAO playbooks are yet unwritten, so let’s write some.",
  ];
  return (
    <div className="space-y-8 text-center justify-center">
      {text.map((t, i) => (
        <p className="text-xl" key={i}>
          {t}
        </p>
      ))}
    </div>
  );
};

export default Intro;
