interface ButtonProps {
  text: string;
  [x: string]: any; // for additional props
}

const Button = ({ text, key }: ButtonProps) => {
  return (
    <button
      key={key}
      type="button"
      className="px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800"
    >
      {text}
    </button>
  );
};

const Partners = () => {
  const daoists = ["DAOhaus", "MetaCartel", "MetaGame", "Raid Guild"];
  const daos = ["Moloch", "MetaCartel", "MetaGame", "Raid Guild"];
  return (
    <div className="flex flex-col justify-center bg-opacity-30 bg-slate-500 my-5">
      <div className="flex flex-col justify-center m-10">
        <span className="mb-4">Powered by</span>
        <div className="space-x-4">
          {daoists.map((daoist, i) => (
            <Button key={i} text={daoist} />
          ))}
        </div>
      </div>
      <div className="flex flex-col m-10">
        <span className="mb-4">Supported by</span>
        <div className="space-x-4">
          {daos.map((dao, i) => (
            <Button key={i} text={dao} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Partners;
